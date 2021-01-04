import { Injectable } from '@ali/common-di';
import { Deferred } from '@ali/ide-core-common';
import { request, API } from './request';
import { IGitAPIService } from './types';

// TODO: 适配 gitlab 接口

@Injectable()
export class GitAPIService implements IGitAPIService {
  private initialized = new Deferred();
  public project: string;
  public projectId: number;
  public commit: string;
  public branch: string;

  async initProject(config: { project: string; commit?: string; branch?: string }) {
    this.project = config.project;
    if (config.commit) {
      this.commit = config.commit;
    }
    if (config.branch) {
      this.branch = config.branch;
    }
    const projectInfo = await this.getProjectInfo();
    this.projectId = projectInfo.id;
    if (!this.branch) {
      this.branch = projectInfo.default_branch;
    }
    if (!this.commit) {
      const commitInfo = await this.getCommit(this.branch);
      this.commit = commitInfo.id;
    }
    this.initialized.resolve();
  }

  get ready() {
    return this.initialized.promise;
  }

  getProjectInfo() {
    return request<API.ResponseGetProjectById>(
      `/api/v3/projects/${encodeURIComponent(this.project)}`
    );
  }

  // 根据分支获取最新的 commit
  async getCommit(ref: string) {
    return request<API.ResponseGetCommit>(
      `/api/v3/projects/${this.projectId}/repository/commits/${ref}`
    );
  }

  // 获取文件节点
  async getTreeEntry(path: string) {
    await this.ready;
    return request<API.ResponseGetTreeEntry>(
      `/api/v3/projects/${this.projectId}/repository/tree_entry`,
      {
        params: {
          ref_name: this.commit,
          path,
        },
      }
    );
  }

  // 根据 commit 和 path 获取 tree
  async getTree(path: string = '') {
    await this.ready;
    return request<API.ResponseGetTree>(`/api/v3/projects/${this.projectId}/repository/tree`, {
      params: {
        ref_name: this.commit,
        path,
      },
    });
  }

  async getBlobSize(path: string) {
    await this.ready;
    const res: Response = await request(
      `/api/v3/projects/${this.projectId}/repository/blobs/${this.commit}`,
      {
        params: {
          filepath: path,
        },
        method: 'HEAD',
        parseResponse: false,
      }
    );
    return parseInt(res.headers.get('Content-Length') || '-1', 10);
  }

  // 根据 commit 和 path 获取 blob
  async getBlob(path: string = '') {
    await this.ready;
    const buf = await request<ArrayBuffer>(
      `/api/v3/projects/${this.projectId}/repository/blobs/${this.commit}`,
      {
        params: {
          filepath: path,
        },
        responseType: 'arrayBuffer',
      }
    );
    return Buffer.from(buf);
  }
}
