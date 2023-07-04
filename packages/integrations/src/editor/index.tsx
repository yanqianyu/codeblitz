import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IAppInstance, EditorRenderer } from '@alipay/alex/lib/editor';
import * as Alex from '@alipay/alex/lib/editor';
// 引入 extension
import '@alipay/alex/lib/editor.extension';
import '@alipay/alex/languages';

import 'antd/dist/antd.css';
import Select from 'antd/lib/select';
import Cascader from 'antd/lib/cascader';
import Button from 'antd/lib/button';
import './style.less';
import * as editorPlugin from './plugin';
import { LocalExtensionModule } from '../common/local-extension.module';

(window as any).alex = Alex;

const fileOptions = (function transform(obj) {
  return Object.keys(obj).map((key) => {
    return {
      value: key,
      label: key,
      children: Array.isArray(obj[key])
        ? obj[key].map((v) => ({ value: v, label: v }))
        : transform(obj[key]),
    };
  });
})({
  'chaxuan.wh/qiankun-mirror': {
    master: ['src/globalState.ts'],
  },
  'wealth_release/finstrategy': {
    f577528518c7c0279f8cdf3de59ae24a80a16607: [
      'app/biz/service-impl/src/main/java/com/alipay/finstrategy/biz/service/impl/portfolio/msg/TradeMessageListener.java',
    ],
  },
  'kaitian/ide-framework': {
    develop: [
      'packages/addons/src/browser/file-drop.service.ts',
      'packages/addons/src/common/index.ts',
      'OWNERS',
    ],
  },
  'ide-s/TypeScript-Node-Starter': {
    'feat/123123': ['gbk.ts'],
  },
  'zoloz_common/zoloz-api-test': {
    master: ['integration/saas/src/test/resources/images/doc/VN/id/cover_face_vnid2.jpg'],
  },
});

const App = () => {
  const [key, setKey] = useState(0);
  const [project, setProject] = useState('');
  const [ref, setRef] = useState('');
  const [filepath, setFilePath] = useState('');
  const [encoding, setEncoding] = useState<'utf8' | 'gbk' | undefined>('utf8');
  const [lineNumber, setLineNumber] = useState<
    number | [number, number] | Array<[number, number]> | undefined
  >([
    [10, 20],
    [30, 40],
  ]);

  const readFile = async (filepath: string) => {
    const res = await fetch(
      `/code-service/api/v3/projects/${encodeURIComponent(
        project
      )}/repository/blobs/${encodeURIComponent(ref)}?filepath=${filepath}`
    );
    if (res.status >= 200 && res.status < 300) {
      return res.arrayBuffer();
    }
    throw new Error(`${res.status} - ${res.statusText}`);
  };

  const onFileChange = ([project, ref, filepath]) => {
    setProject(project);
    setRef(ref);
    setFilePath(filepath);
  };

  return (
    <div style={{ padding: 8 }}>
      <div style={{ display: 'flex', marginBottom: 8 }}>
        <Cascader
          style={{ width: '100%' }}
          size="small"
          options={fileOptions}
          onChange={onFileChange}
          placeholder="Please select"
        />
      </div>
      <div style={{ display: 'flex', marginBottom: 8 }}>
        <Button onClick={() => setKey((k) => k + 1)} size="small" style={{ marginRight: 8 }}>
          RESET
        </Button>
        <Select
          value={encoding}
          onChange={setEncoding}
          size="small"
          style={{ width: 120, marginRight: 8 }}
          placeholder="更改编码"
        >
          {['utf8', 'gbk'].map((encoding) => (
            <Select.Option key={encoding} value={encoding}>
              {encoding}
            </Select.Option>
          ))}
        </Select>
        <Select
          value={JSON.stringify(lineNumber)}
          onChange={(value) => setLineNumber(JSON.parse(value))}
          size="small"
          style={{ width: 120, marginRight: 8 }}
          placeholder="更改选中行"
        >
          {[
            10,
            30,
            100,
            [10, 20],
            [
              [30, 35],
              [40, 50],
              [66, 77],
            ],
          ].map((line, index) => (
            <Select.Option key={index} value={JSON.stringify(line)}>
              {JSON.stringify(line)}
            </Select.Option>
          ))}
        </Select>
        <Button
          onClick={() => {
            const commands = editorPlugin.api.commands;
            if (commands) {
              commands.executeCommand('plugin.command.add', 1);
            }
          }}
          size="small"
        >
          command test
        </Button>
        <Button
          onClick={() => {
            const commands = editorPlugin.api.commands;
            if (commands) {
              commands.executeCommand('plugin.command.changeTheme', 'opensumi-dark');
            }
          }}
          size="small"
        >
          theme change
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '80%', minHeight: 500 }}>
          {project ? (
            <EditorRenderer
              key={`${project}-${key}`}
              onLoad={(app) => {
                window.app = app;
              }}
              appConfig={{
                modules: [LocalExtensionModule],
                plugins: [editorPlugin],
                workspaceDir: project,
                defaultPreferences: {
                  'general.theme': 'opensumi-light',
                  'editor.scrollBeyondLastLine': false,
                  'lsif.documentScheme': 'file',
                  'lsif.enable': true,
                  'lsif.env': 'prod',
                  // 'editor.forceReadOnly': true,
                  // 'editor.wordWrap': 'on',
                },
              }}
              runtimeConfig={{
                biz: 'editor',
                scenario: null,
                startupEditor: 'none',
                // hideEditorTab: true,
                resolveFileType(path) {
                  return 'text';
                },
              }}
              editorConfig={{
                adjustFindWidgetTop: true,
                disableCache: true,
                // disableEditorSearch: true,
                // stretchHeight: true,
              }}
              documentModel={{
                type: 'code',
                ref,
                owner: project.split('/')[0],
                name: project.split('/')[1],
                filepath,
                onFilepathChange(newFilepath) {
                  setFilePath(newFilepath);
                },
                readFile,
                encoding,
                lineNumber,
                onLineNumberChange(num) {
                  setLineNumber(num);
                },
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));

// for test
window.destroy = () => {
  ReactDOM.render(<div>destroyed</div>, document.getElementById('main'));
};

declare global {
  interface Window {
    app: IAppInstance;
    destroy(): void;
  }
}
