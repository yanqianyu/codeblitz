##  (2024-11-08)

* v2.3.1 (#217) ([9bac1a0](https://github.com/opensumi/codeblitz/commit/9bac1a0)), closes [#217](https://github.com/opensumi/codeblitz/issues/217)



## [1.0.3](https://github.com/opensumi/codeblitz/compare/v1.0.2...v1.0.3) (2023-09-08)


### Bug Fixes

* build error ([8502ba7](https://github.com/opensumi/codeblitz/commit/8502ba767468c988f8bbdb43e0d4f6bab2dff9a2))
* bundle script ([c90a11a](https://github.com/opensumi/codeblitz/commit/c90a11a54a2df72d0264db80363c411d0648ce4e))
* code-api dependencies ([f376ca4](https://github.com/opensumi/codeblitz/commit/f376ca4a1be2a4c58f5db38990d2bec93eceeda8))
* dependencies ([e9cdf67](https://github.com/opensumi/codeblitz/commit/e9cdf67d876f07c5ccadae5881c6a54cee3d7fcc))
* release action bundle ([#14](https://github.com/opensumi/codeblitz/issues/14)) ([27ab99d](https://github.com/opensumi/codeblitz/commit/27ab99d49ef94f84898422bb34c9b9caab962f4a))
* release script ([0e046da](https://github.com/opensumi/codeblitz/commit/0e046dacd13a4df6235931fd57caad2f1f89d6a1))



## 1.0.1-0 (2023-08-18)


### Bug Fixes

* 编辑器模式初始化问题 ([8c9e1fe](https://github.com/opensumi/codeblitz/commit/8c9e1feed63ebd0ddd51a08733dd41c0e5f9a8aa))
* 编辑器模式右侧链接按钮消失 ([a9b7293](https://github.com/opensumi/codeblitz/commit/a9b7293d6ef51db50740fb281c084791a86b6b3a))
* 编辑器stretchHeight滚动问题 ([764eb3f](https://github.com/opensumi/codeblitz/commit/764eb3f3b7150e8fe41e226a10179d0290da68dd))
* 编辑数据持久化到 indexedDB ([2311774](https://github.com/opensumi/codeblitz/commit/2311774a0dbcb964b46ffe8ad014fea6aeb50fea))
* 插件 meta 文件输出 browser 字段 ([891f9a7](https://github.com/opensumi/codeblitz/commit/891f9a79a57689cb782e6d30f110246e894abc30))
* 调整 atomgit oauth 授权交互 ([3746442](https://github.com/opensumi/codeblitz/commit/37464427129f82f1ffc9cf8b2efd465a37751797))
* 调整 startup 模块顺序,避免语言选择出不来 ([d7cf765](https://github.com/opensumi/codeblitz/commit/d7cf7658f47ef86e8ebf7075cc5821e43d95f978))
* 防止主题dispose后黑屏 ([1b24384](https://github.com/opensumi/codeblitz/commit/1b24384b1febaef0fda6f09c8f47baaf5cc85af7))
* 非 file 不更改 browser url ([b5a9f8b](https://github.com/opensumi/codeblitz/commit/b5a9f8bb02c0c873cc2ad84bd42f9fdfd535fb36))
* 非 file 协议 onFilepathChange 传参为空 ([9c88234](https://github.com/opensumi/codeblitz/commit/9c882341d2b1f038fb47d2c7fee3f21917147abd))
* 更改 monaco cdn及修复折叠样式 ([45e023d](https://github.com/opensumi/codeblitz/commit/45e023d585587a97d5245ba5ca2f1cd18b0e6169))
* 合并master ([e3f5c11](https://github.com/opensumi/codeblitz/commit/e3f5c112144d66e0c7e3751a8b7efd22059eec6f))
* 回退租户相关代码 ([c5552ec](https://github.com/opensumi/codeblitz/commit/c5552ec9d1f83c69ebcffb43b392ed4ad9928e67))
* 兼容 references 可能不存在情况 ([0c46a63](https://github.com/opensumi/codeblitz/commit/0c46a6313838cf22f694568f7e3e5de42b0c6649))
* 临时 patch icon 路径不对问题 ([5f25953](https://github.com/opensumi/codeblitz/commit/5f259537e7747992fc35bad1ac1a5af7c23a7899))
* 临时修复新建文件节点消失的问题 ([6c17ef7](https://github.com/opensumi/codeblitz/commit/6c17ef72c5603746a4f4ebbb7aebdfd2603a4f7d))
* 切换蚂蚁源 ([c732948](https://github.com/opensumi/codeblitz/commit/c732948819a459cc9ae1064c36768ad130703a82))
* 去除 atomgit-auth 的 header authorization ([345fbdd](https://github.com/opensumi/codeblitz/commit/345fbdd1cbb6b42e159f4340b0a2d2fb38994061))
* 去掉 lsif 测试环境判断的部分条件 ([bd6f3a2](https://github.com/opensumi/codeblitz/commit/bd6f3a27b7c07e26d71f7233a9ecb6cc5ad94a6a))
* 全局样式冲突 ([da55509](https://github.com/opensumi/codeblitz/commit/da5550950a4e0180764e94b3b9171b439877b283))
* 如果没有 ref 获取默认分支 ([1e884e9](https://github.com/opensumi/codeblitz/commit/1e884e9b001eb1088505d0039f990d6074346c43))
* 小程序Code支持租户 ([359c3b0](https://github.com/opensumi/codeblitz/commit/359c3b073cafa2e2fbb2e9ef54cd433ca29c40a9))
* 修复 ACR dispose 控制台出现 error 问题 ([4e23ac9](https://github.com/opensumi/codeblitz/commit/4e23ac99e8256d78b81f4cccf0cd531c8a7286d1))
* 修复 app dispose 报错问题 ([6205e8d](https://github.com/opensumi/codeblitz/commit/6205e8de6fc4cf1b931d66a448a5a8c43ca1a2f6))
* 修复 atomgit 过期 token 问题 ([ac8f3ca](https://github.com/opensumi/codeblitz/commit/ac8f3ca8eb630c372c4e5d9badd03900df4aeb5c))
* 修复 blame 数据不对应的问题 ([cb1f2ec](https://github.com/opensumi/codeblitz/commit/cb1f2ecfc907a546684ba804a8b1f016a5eef78b))
* 修复 dispose preference reset 问题 ([8e14730](https://github.com/opensumi/codeblitz/commit/8e14730a25b2dae154e118ee4a8ecc474d45fb38))
* 修复 editor tab 的展示名 ([77c4b3e](https://github.com/opensumi/codeblitz/commit/77c4b3ea256cd606e21c30e602f87a30620aa28c))
* 修复 fs-watcher checkCb 报错 ([434bc34](https://github.com/opensumi/codeblitz/commit/434bc34e666dbb848411c726bb24123f47b520e1))
* 修复 github diff 报错问题 ([449396c](https://github.com/opensumi/codeblitz/commit/449396cfe2628fab51f3e8298a741c044167cd76))
* 修复 gitlink 评论 dispose 后白色区域未消失问题 ([31fd899](https://github.com/opensumi/codeblitz/commit/31fd8990fd8fb198a300fa11ca8090a87c456aa7))
* 修复 global 打包的问题 ([87594aa](https://github.com/opensumi/codeblitz/commit/87594aabd683af3dd10868345043b7ca45914069))
* 修复 merge config 空错误 ([6fbd22a](https://github.com/opensumi/codeblitz/commit/6fbd22ad0e2e942bddd2a78668809ce151c5ed11))
* 修复 module block 语法问题 ([1317f03](https://github.com/opensumi/codeblitz/commit/1317f03fac73921828e8d42cd38cb186a6fd624d))
* 修复 rename 参数取值问题 ([33ef82e](https://github.com/opensumi/codeblitz/commit/33ef82e671bd377f4ffb3375cee1abf6424a6781))
* 修复 snippet 路径协议问题 ([10b6662](https://github.com/opensumi/codeblitz/commit/10b6662bbbd997a4d77b2852a9c415be8b9050b7))
* 修复 tab 监听问题 ([226bf2f](https://github.com/opensumi/codeblitz/commit/226bf2fc34810b7603842a4808d4e85b3bc3f623))
* 修复 unregisterKeybinding 的参数问题 ([5bac365](https://github.com/opensumi/codeblitz/commit/5bac365e76e390762226e10fcabf15dc6984afb8))
* 修复 webgw auth 接口缺少 appId 的问题 ([7ad7490](https://github.com/opensumi/codeblitz/commit/7ad749037229482498310c184656f69e6c3166a5))
* 修复编译报错 ([28cb2b7](https://github.com/opensumi/codeblitz/commit/28cb2b73eb2fdb74ebce085d488c67fcc572a183))
* 修复初始文件打开 url hash 问题 ([845bac6](https://github.com/opensumi/codeblitz/commit/845bac6022906d17999fb8d566b69d400951f1fb))
* 修复代码折叠失效的问题 ([456107e](https://github.com/opensumi/codeblitz/commit/456107ec89333b5a65ba3fea60bd66896e56dfb5))
* 修复调用命令面板时报错 ([c5e9bf4](https://github.com/opensumi/codeblitz/commit/c5e9bf4f95c8a96661d1cb4d3dcb7bc2afa068cf))
* 修复加载 webscm 插件时产生多个相同的 reference ([ce5e6fe](https://github.com/opensumi/codeblitz/commit/ce5e6fe29fbee36c43d4339da011a06bc363e1e5))
* 修复解决冲突场景问题 ([fa09417](https://github.com/opensumi/codeblitz/commit/fa09417c704d4dbb755957d358284b1b746a5ac2))
* 修复流水线问题 ([9e96499](https://github.com/opensumi/codeblitz/commit/9e964996924caa2eb141721ca6b7236d44b6e43a))
* 修复逻辑修改 ([9993c7e](https://github.com/opensumi/codeblitz/commit/9993c7efd1976ef6cc23227f625b1989f565f236))
* 修复评论不展示问题 ([a7ebd31](https://github.com/opensumi/codeblitz/commit/a7ebd31d91f9a0bc01dcf02f927367d36f5c8c6f))
* 修复评论弹出空白问题 ([084b2bc](https://github.com/opensumi/codeblitz/commit/084b2bc81dea7131cf27b382e68915bbde843bde))
* 修复评论icon不展示问题 ([8f3051c](https://github.com/opensumi/codeblitz/commit/8f3051cef89fc8aad4c6060968467edd2dd3bddc))
* 修复首次打开文件高度不展开的问题 ([f63b1ec](https://github.com/opensumi/codeblitz/commit/f63b1ec156664da04f76cdd1db70d5e70de781c8))
* 修复搜索 query 如果为空字符串 antcode 会报错问题 ([9484100](https://github.com/opensumi/codeblitz/commit/94841008c28cd8d03db7d04ff10f3085521638a2))
* 修复误修改的代码 ([8f6ac46](https://github.com/opensumi/codeblitz/commit/8f6ac46df8b389ef9da03b0892139702582e6bce))
* 修复组件非首次加载变慢的问题 ([63fb428](https://github.com/opensumi/codeblitz/commit/63fb4285e9aa9ce2849bff03c8a52088e7f917eb))
* 修复acr内代码折叠问题 ([62ce856](https://github.com/opensumi/codeblitz/commit/62ce8564147f36f930ca5590de18f02507e56906))
* 修复ACR样式 ([39d38ec](https://github.com/opensumi/codeblitz/commit/39d38eca037318ce1f15e3f2f8d8826264492454))
* 修复Code服务接入 ([ce83261](https://github.com/opensumi/codeblitz/commit/ce83261752d34d90491b306a6f40a435f2634910))
* 修复commit信息丢失导致展示问题 ([08282b5](https://github.com/opensumi/codeblitz/commit/08282b5b93b5ef8d0ff5af7738af16bfbf32b9e5))
* 修复editor主题初始化未注册fromExtension ([a63e03a](https://github.com/opensumi/codeblitz/commit/a63e03a7498adaaa44bf1b7355e25a5693810252))
* 修复monaco override dispose 问题 ([0b22a5e](https://github.com/opensumi/codeblitz/commit/0b22a5e9126c6ce698d9ab0c5439e80dd37da82b))
* 修复MonacoContextKeyService绑定错误 ([e595581](https://github.com/opensumi/codeblitz/commit/e59558142082eca007030947aaf6e892402a85f7))
* 优化 change 查找路径问题 ([7b7a937](https://github.com/opensumi/codeblitz/commit/7b7a937d1efabba3b8ae2c45bd32d836d015a14c))
* 语言服务dispose后失效 ([ddc5778](https://github.com/opensumi/codeblitz/commit/ddc57784fff8474fd65f4101fe21ce4ec8c1beac))
* 增加 alex module ([64d742c](https://github.com/opensumi/codeblitz/commit/64d742cec72de8a807a4b3aed21f604c23778e76))
* 增加monaco keybindingService  override ([e9bf262](https://github.com/opensumi/codeblitz/commit/e9bf262a850fe14fd3649b64154c55093ab80e58))
* 注册时序问题 ([32d756d](https://github.com/opensumi/codeblitz/commit/32d756dc79fc7c00de29c1d8e4db810957a2a0bc))
* 左右diff数据展示异常 ([d354b95](https://github.com/opensumi/codeblitz/commit/d354b95c1a148fe6ce32a73fbb944c3cc1d98d7b))
* ACR 评论获取 onStart 改为 initialize ([adaf22e](https://github.com/opensumi/codeblitz/commit/adaf22e6c826b792dc06c55e0c7df03e6ca954ca))
* acr代码折叠样式问题 ([7f91666](https://github.com/opensumi/codeblitz/commit/7f9166661bed5aa4ba9c7585cef1cb6d5ce44322))
* **acr:** 修复 codeServiceEditor 等问题 ([2915ad6](https://github.com/opensumi/codeblitz/commit/2915ad66a28ebdfc49c7d5faa0a3d50796cb8059))
* **alex:** 修复 polyfills 导出问题 ([9e37074](https://github.com/opensumi/codeblitz/commit/9e370743a3d532ed870e57250b69d4dbd962e442))
* assignment error ([19de039](https://github.com/opensumi/codeblitz/commit/19de039656bc1f7bfa48751e80a4fe0237c6c3c6))
* atomgit 去掉 auth 请求，统一由上层处理 ([87525f3](https://github.com/opensumi/codeblitz/commit/87525f3d4517b652b4ed437173e159b324b7a198))
* build error ([6074ac7](https://github.com/opensumi/codeblitz/commit/6074ac756935cd714f7ddea40b6db6eb17f2daee))
* build scripts ([bff33c8](https://github.com/opensumi/codeblitz/commit/bff33c80941db7316f16cd6bc2420469ed18b8d1))
* build-assets ([9f6d928](https://github.com/opensumi/codeblitz/commit/9f6d928c13fbbbe9ab3ecc9000e34e1bf095f842))
* bundle define ([abea73c](https://github.com/opensumi/codeblitz/commit/abea73cee579f5fca3abb63abbee629374ded1c4))
* ci ([db89e0f](https://github.com/opensumi/codeblitz/commit/db89e0fdd085dd30a07faad519c8df5c612eb47a))
* clear side effect when destroy ([c36d7bc](https://github.com/opensumi/codeblitz/commit/c36d7bce748ad52865a9bf307f9319c35c7760ae))
* **cli:** 扩展安装设置 retry 为 3 ([43edc34](https://github.com/opensumi/codeblitz/commit/43edc346d06b14287d9565584e93fa16f336b38d))
* **cli:** 修复 link 时 host options 定义问题 ([5d310aa](https://github.com/opensumi/codeblitz/commit/5d310aacdd83afcf11bfbc6affc2df22b3df8f15))
* **cli:** 修复扩展安装 mode 写入问题 ([6a97016](https://github.com/opensumi/codeblitz/commit/6a97016a961b8bd5cdf35773e37d8046a4744d59))
* code ([a859e01](https://github.com/opensumi/codeblitz/commit/a859e011a5acccb4ed90aeec4f78adf16c95675c))
* contextKeyService dispose 报错 ([cbd52ab](https://github.com/opensumi/codeblitz/commit/cbd52abd6732d819ae93d3436416d0b25329a2e2))
* core reference ([5aba982](https://github.com/opensumi/codeblitz/commit/5aba982bbd75998f45e4b5d80c1f421513c0dfb9))
* **core:** logo 替换为公网地址 ([e1731cb](https://github.com/opensumi/codeblitz/commit/e1731cb1bbce9070dd47eb7f3f4f8d0c93f1aa78))
* deps fields ([8b60f68](https://github.com/opensumi/codeblitz/commit/8b60f68700110956f93b9d89e5d04a23af330395))
* dispose 时 unmount home 文件系统 ([205b04c](https://github.com/opensumi/codeblitz/commit/205b04c153910c14dfbe0f22250ba03123c2d623))
* disposeClientExtProcess error ([1d17bbf](https://github.com/opensumi/codeblitz/commit/1d17bbfcdb4ccc989e6faf511d2e341a24efc6dd))
* file ext judge ([b58ccf0](https://github.com/opensumi/codeblitz/commit/b58ccf003045537e950c4a233574c8681d692c73))
* fs-watch and react version ([6a5d8bd](https://github.com/opensumi/codeblitz/commit/6a5d8bdb1a6054ac41bdb21681b4ab090f22f20e))
* getFunctionProps ([e5f34fc](https://github.com/opensumi/codeblitz/commit/e5f34fcbc37135da71a297591c9af0f66eab547b))
* import path ([6860ee4](https://github.com/opensumi/codeblitz/commit/6860ee4139c03f592546f4aa5818a7b29ac69158))
* keybinding ([e88ec5c](https://github.com/opensumi/codeblitz/commit/e88ec5c77ac736df19cea75a6c7534ec3c06fafa))
* layout config ([bf741e2](https://github.com/opensumi/codeblitz/commit/bf741e240115bb654f7a41500fccba344f45cc8b))
* onEvent 初始化问题 ([7f1284a](https://github.com/opensumi/codeblitz/commit/7f1284a70c4a808deb4f713f76cef6c5b5d08fda))
* original ([7990e87](https://github.com/opensumi/codeblitz/commit/7990e879437f8dd6e47be2ed0f4552c03813ea5c))
* posix path ([ccc3a58](https://github.com/opensumi/codeblitz/commit/ccc3a5874b02a8f0ef9b8856b5ea5b87ba575bf3))
* remove files field in alex-acr pkg.json ([b7a655c](https://github.com/opensumi/codeblitz/commit/b7a655cd55a19a1996e736674781575a1e765846))
* remove jschardet ([0def4f1](https://github.com/opensumi/codeblitz/commit/0def4f12ea35ab5d93237d9a59461ac36bdfe8ac))
* remove miss references path ([2af5794](https://github.com/opensumi/codeblitz/commit/2af5794e0f15b45e3331a57d4a4c42ae2914101f))
* remove useless props ([63f3f31](https://github.com/opensumi/codeblitz/commit/63f3f315ca264fbea9fafe726ef50336051c1856))
* signature error ([05be148](https://github.com/opensumi/codeblitz/commit/05be148242f460e18d7066e72e87da3b33b4c0bf))
* submodule as folder ([56d1f44](https://github.com/opensumi/codeblitz/commit/56d1f4402e47f42022c65a5991a99168d6cc0d03))
* titleMenu cache ([bc735af](https://github.com/opensumi/codeblitz/commit/bc735af5dd914c97a22dfd50e7a9cdd943888e1d))
* unmout filesystem when dispose ([390e48f](https://github.com/opensumi/codeblitz/commit/390e48f709676448d8b1253943e00ff04299d804))
* use es2015 module ([98d7c43](https://github.com/opensumi/codeblitz/commit/98d7c434041d169f1cc88f7066d7bafc805534b9))
* use public access ([24745e0](https://github.com/opensumi/codeblitz/commit/24745e0592d4f03b9e31f38a0000b7d577f9dc48))
* web-scm修改路径 ([4cd1b2b](https://github.com/opensumi/codeblitz/commit/4cd1b2b6237d6aa158fa2a35cdd365de7bd311d8))


### Features

* [WIP] 增加 editor 入口, 精简体积 ([1036fb8](https://github.com/opensumi/codeblitz/commit/1036fb8234ae4d5aca1d8bcb448466998e600c3e))
* 编辑器增加缓存控制 ([6f9745c](https://github.com/opensumi/codeblitz/commit/6f9745c31d666116c1925b3d29059e66e62da001))
* 打通 worker 插件 ([3504b02](https://github.com/opensumi/codeblitz/commit/3504b02bb2459de5d69c5e6607524b17bf197b76))
* 代理 StandaloneKeybindingService ([908135d](https://github.com/opensumi/codeblitz/commit/908135dee5fe40f7f23ad3420f2c7741c2f7e95e))
* 代理 StandaloneKeybindingService ([371fbc1](https://github.com/opensumi/codeblitz/commit/371fbc1716285b3502263b8501fb0088505f2725))
* 导出 Uri 和 Emitter ([de59873](https://github.com/opensumi/codeblitz/commit/de5987356c43b644cf400e4ebe978ca244c9d6c8))
* 对接 code 接口 ([42eca1c](https://github.com/opensumi/codeblitz/commit/42eca1cad1f494e1851f6dbf4dfed5a867645f5e))
* 改造 acr，并提供完整 demo 示例 ([c471fb7](https://github.com/opensumi/codeblitz/commit/c471fb746c3b82071ed7b5ef1d47452b90c56615))
* 更新格式化选定内容 ([24b76f2](https://github.com/opensumi/codeblitz/commit/24b76f27f800226e964768895e710df76abe5802))
* 更新gitlink api ([6551bdf](https://github.com/opensumi/codeblitz/commit/6551bdfbd2bb92968cda61908a42575ff81f95ff))
* 更新gitlink blame接口 ([4ce24a1](https://github.com/opensumi/codeblitz/commit/4ce24a119ba88c9c2abba3d1da9867f5ccdc13db))
* 更新gitlink接口 ([b972dc6](https://github.com/opensumi/codeblitz/commit/b972dc6f125fb00b974b3b308d3266b6e46c6b1e))
* 更新vditor markdown 插件 ([05d995c](https://github.com/opensumi/codeblitz/commit/05d995cc1ca724be5486014ce5596f1f9965e460))
* 构建包含 ACR 及 EditorRender 的版本 ([6203374](https://github.com/opensumi/codeblitz/commit/62033742fcef940431753235560133a8e327c04d))
* 集成 codeswing 及 emmet ([2fe32b6](https://github.com/opensumi/codeblitz/commit/2fe32b6ccdbd1e176e67edac2f1cb19159b43cf9))
* 内置更改默认偏好设置的命令 ([b5e0d2c](https://github.com/opensumi/codeblitz/commit/b5e0d2cd4fbc70b32662fced5c1c08c2a90ce196))
* 迁移dt-sql ([697621d](https://github.com/opensumi/codeblitz/commit/697621dac79d8d3eeb535b0244350dcd4089258a))
* 去掉 acr 老数据迁移 ([0b60a49](https://github.com/opensumi/codeblitz/commit/0b60a49a1a7dd68db2c594f925625ec4172c7b38))
* 升级 kaitian 2.0 ([7a406d8](https://github.com/opensumi/codeblitz/commit/7a406d8e952d2d61a5a062dcbc738cf39430d386))
* 升级 kaitian 2.5.0 以支持 custom editor ([3515004](https://github.com/opensumi/codeblitz/commit/3515004ad1eb5b728b10d887c9f792bc55114dd7))
* 升级 textmate-language, 以支持 kotlin, vue 等 ([0015c00](https://github.com/opensumi/codeblitz/commit/0015c00191768e66a32625c1cf6d4826a560391c))
* 升级 textmate-language，以支持 kconfig ([12a39d4](https://github.com/opensumi/codeblitz/commit/12a39d4d2cc7a0849f73e04ab2a02b405f4b6509))
* 生成 bundle ([c5f721f](https://github.com/opensumi/codeblitz/commit/c5f721fa155704e5c3d7e6d98df1e200af67fd6e))
* 使用 antcode private_token 请求 ([c612ad8](https://github.com/opensumi/codeblitz/commit/c612ad8a41b1e8c7b582d93d19a9d8fca9fc2917))
* 使用 opensumi 默认文件请求限制 ([25a9803](https://github.com/opensumi/codeblitz/commit/25a98030e4206d4e0e50aaf8403273217f630007))
* 适配 coderunner ([18d78ff](https://github.com/opensumi/codeblitz/commit/18d78ffdf47a9b90389c0e56f198d6749564d49b))
* 授权登陆 ([b6246aa](https://github.com/opensumi/codeblitz/commit/b6246aa4673fdafc20c4e6aa2b4dc647c638af45))
* 搜索文件过滤同步转为异步 ([a1a487f](https://github.com/opensumi/codeblitz/commit/a1a487f8b1ae52d21c55c283a18d971113245bfc))
* 替换 tcloudideweb 域名 ([9da5bdc](https://github.com/opensumi/codeblitz/commit/9da5bdc7ef82419b0f278ec3ccd37147aa59bdc2))
* 小程序code支持mergeBase的方法 ([ee6dec4](https://github.com/opensumi/codeblitz/commit/ee6dec432f257a8e68556937dc161c9a0802e94d))
* 新增 anycode 插件 ([0ddce50](https://github.com/opensumi/codeblitz/commit/0ddce500d7d31a9def07f217cc83181d0ab6087c))
* 新增 editor 包用于 script 引入 ([39b604f](https://github.com/opensumi/codeblitz/commit/39b604fac05d3615e4317e6b015d444baf6d43ae))
* 修改gitlink gitLens插件 ([f452cfe](https://github.com/opensumi/codeblitz/commit/f452cfe349f51180b11ae1e352f65c68cf829659))
* 优化 editor 交互,增加 lsif 跨库索引处理 ([ef2439d](https://github.com/opensumi/codeblitz/commit/ef2439d422d54bee7e448621daa5cbf33652459b))
* 优化 git 文件写系统 ([592702b](https://github.com/opensumi/codeblitz/commit/592702b48eb82d3be65a4872dfe60add896773a4))
* 优化样式 ([63e543f](https://github.com/opensumi/codeblitz/commit/63e543ff0fd9e95cbb69c2d17d57f8de0a73870e))
* 增加 app 集成版本 ([523f358](https://github.com/opensumi/codeblitz/commit/523f3585124f26e6b360f9743865156229fff213))
* 增加 editor 入口 ([6c1e4e4](https://github.com/opensumi/codeblitz/commit/6c1e4e451dcf9a9654f2d9a765c13a2978b44291))
* 增加 extension-manager 模块, 可展示已内置的扩展 ([029ccce](https://github.com/opensumi/codeblitz/commit/029cccea91acee2bef98b8efa3dc796853b7d3dc))
* 增加 git 静态资源 resolver ([72d49e4](https://github.com/opensumi/codeblitz/commit/72d49e47041c986e3cc1a9538f5766de3d608ee6))
* 增加 gitlab 和 github api service ([294edd6](https://github.com/opensumi/codeblitz/commit/294edd651c89b2f69ce6847807e76797ae040b06))
* 增加 reporter 配置 ([9ac13a1](https://github.com/opensumi/codeblitz/commit/9ac13a14aa5b336557bbf090ae10fc7c1ad1c91f))
* 增加 submodule 修饰, search, extension-manager 等功能 ([c635a80](https://github.com/opensumi/codeblitz/commit/c635a80b454fdde3746cc5321dcbc93b94381fd2))
* 增加 ts 跨库索引 ([bb3a863](https://github.com/opensumi/codeblitz/commit/bb3a86330354b0199ccd6d590fdde078328da44e))
* 增加 zipfs, 优化代码结构等 ([18cb06b](https://github.com/opensumi/codeblitz/commit/18cb06bda110b635d417ccc9a4ee62790b96e407))
* 增加代码扫描插件 ([83e7bf7](https://github.com/opensumi/codeblitz/commit/83e7bf7748a941ff107bc0c17d0b845049ce1a46))
* 增加分支和标签接口 ([286a431](https://github.com/opensumi/codeblitz/commit/286a431dee0c2f858df6c94b5b8a9775b39d0d0a))
* 增加分支切换逻辑 ([35a9621](https://github.com/opensumi/codeblitz/commit/35a96211e0cbd927ca2cc73be8e28cc484d41608))
* 增加解决冲突能力 ([90f3d8f](https://github.com/opensumi/codeblitz/commit/90f3d8f651438878ed89ac0a4841bc8380878f81))
* 增加空白页以及欢迎页自定义 ([ac1e0f6](https://github.com/opensumi/codeblitz/commit/ac1e0f6b2282351f6404ffeea79b2cf5bc67396b))
* 增加埋点白名单 ([7dd481c](https://github.com/opensumi/codeblitz/commit/7dd481cd05e909d0a1078a1e5cb18a17bbe3be37))
* 增加埋点配置 ([b7f5066](https://github.com/opensumi/codeblitz/commit/b7f5066c6acaa46d1ba81c717a9ccf571399d95d))
* 增加文档变更事件 ([0090c7c](https://github.com/opensumi/codeblitz/commit/0090c7cc444cfcabf94a0e84459b72f163cbd25a))
* 增加文件监听等 ([25273fe](https://github.com/opensumi/codeblitz/commit/25273feec53b317f937cf50fb040ee36661d4ca5))
* 增加文件类型判断 ([a00098c](https://github.com/opensumi/codeblitz/commit/a00098cf302fb0ab35b2dda289ccf61686ec6bf9))
* 增加文件事件回调等 ([ee7b6bf](https://github.com/opensumi/codeblitz/commit/ee7b6bfb98cd31b7443ecca2edf7b4eba21ebfba))
* 增加行居中 ([bfe44d8](https://github.com/opensumi/codeblitz/commit/bfe44d89619bfb3a5dfd1e2c1fa11b19d2a07727))
* 增加隐藏 tab 配置, 修复获取 providerEncoding ([ca1e92a](https://github.com/opensumi/codeblitz/commit/ca1e92a1ee8436d8774d0d258cf68bdb3e81ee06))
* 增加blame插件 ([50d6e08](https://github.com/opensumi/codeblitz/commit/50d6e081e7b8f7b38c902cb849ca6db2f9cfb800))
* 支持 anycode 初始化文件 ([05b65cf](https://github.com/opensumi/codeblitz/commit/05b65cfc81277fce418c1be5f8ad985294ef1fb4))
* 支持 startupEditor 打开并预览 readme ([e01b115](https://github.com/opensumi/codeblitz/commit/e01b115317977992dc36b764c0859e888bad9a62))
* 支持3-way-merge 解决冲突 ([23bae52](https://github.com/opensumi/codeblitz/commit/23bae52d39414acdd31ec280602bbc2d90e4e00c))
* 支持编辑器完全展开及禁用搜索等配置 ([ab0b0cb](https://github.com/opensumi/codeblitz/commit/ab0b0cbc5ca885806306ee7c0d3d6c1c081f7834))
* 支持代码搜索文件匹配 ([3f631ed](https://github.com/opensumi/codeblitz/commit/3f631ed370d8bc1e649eb751dd5b325d629ba0d8))
* 支持多行选中 ([ee7fdcf](https://github.com/opensumi/codeblitz/commit/ee7fdcf85cb78882a88fd2ebcca2552a68e0d79b))
* 支持强制 reinit head ([1c10ca3](https://github.com/opensumi/codeblitz/commit/1c10ca3ab62dd773379f5f91c0c08765b8ae6aa1))
* 支持文件和代码搜索配置 ([41bb701](https://github.com/opensumi/codeblitz/commit/41bb7013b37325b95321ec2942879eac8cc08afb))
* 支持小程序的Code服务接入 ([4bff8f9](https://github.com/opensumi/codeblitz/commit/4bff8f9e9901b45c30651b6b4d243a4e4d2da204))
* 支持自定义worker插件地址 ([829cdf1](https://github.com/opensumi/codeblitz/commit/829cdf14defa666d4b68af98aaf8fedcd2f76dde))
* 支持gitlink Api接口 ([c785e31](https://github.com/opensumi/codeblitz/commit/c785e31159a384fab641bd9a189949ca5531bc81))
* 支持onchange方法 ([78a44d2](https://github.com/opensumi/codeblitz/commit/78a44d200c5c67bd242e06e028de605f45f68d25))
* 支持scm新版交互 ([8561452](https://github.com/opensumi/codeblitz/commit/8561452e80432c4e6a286cddc11e1b1a2219aeb8))
* 支持worker计算 ([f6fd014](https://github.com/opensumi/codeblitz/commit/f6fd01447bf5782f22e035a98295d35a6c32b134))
* 重新梳理代码结构及构建 ([a2836d3](https://github.com/opensumi/codeblitz/commit/a2836d3b2c1cce5f26786b228eb45471aa24434c))
* 注册 https 及 http filesystem，插件会读取相关协议内容 ([3bf95bd](https://github.com/opensumi/codeblitz/commit/3bf95bd09bdebc69a334a51469a32bc2ba57b8a7))
* add api ([b9cb4f2](https://github.com/opensumi/codeblitz/commit/b9cb4f2d787ce5d0fb40c6dfb2a77c24c9fa9afc))
* add ci bin ([77adf3e](https://github.com/opensumi/codeblitz/commit/77adf3e23c55dc555e9491e0b69139799dc3d09c))
* add cli package ([2d00d54](https://github.com/opensumi/codeblitz/commit/2d00d5426328e80ca464c0a5fff19f11ea3dd685))
* add code document model ([120ddb6](https://github.com/opensumi/codeblitz/commit/120ddb62f649ad74187c53a977cb5c8834f2df7d))
* add extenison server api ([43084f4](https://github.com/opensumi/codeblitz/commit/43084f47ea584c281966f40332154e431bb79ca6))
* add git file-system ([8f7cba7](https://github.com/opensumi/codeblitz/commit/8f7cba74d4e88c18fa122b28f07040ea416c35be))
* add git init reposonseError report ([2f7f901](https://github.com/opensumi/codeblitz/commit/2f7f901013e8f142a22e82dc34a830d214229d51))
* add git package ([05a818e](https://github.com/opensumi/codeblitz/commit/05a818eac677bcdf772f21897f58217a0c3cdd5f))
* add iconv-lite-umd to support encoding ([80709e8](https://github.com/opensumi/codeblitz/commit/80709e8b54166ebe4bb9e94c93f1dabc48df2b9f))
* add language service ([d886b59](https://github.com/opensumi/codeblitz/commit/d886b595524396ee4c05780a207a841946a6ddd5))
* add memfs package ([ae49b34](https://github.com/opensumi/codeblitz/commit/ae49b34c8548b7a288b5cc43a7e879365c5e84c1))
* add multi line decorations ([50dd04a](https://github.com/opensumi/codeblitz/commit/50dd04ab3a9cabb45668716a8d6b42ff1bd02be3))
* add register languages for editor ([7504de2](https://github.com/opensumi/codeblitz/commit/7504de2f6a61f1e97d4e919387ae387910ccec9a))
* add shared package ([556e886](https://github.com/opensumi/codeblitz/commit/556e886e989bdd49e562c3fd29172188e2106fd3))
* add some default config ([70b5b30](https://github.com/opensumi/codeblitz/commit/70b5b30bec0090ab62eee0afc08dd47ad14836db))
* add some moudles ([1390620](https://github.com/opensumi/codeblitz/commit/1390620705d5e7cb00c89467cd1eb566ac0e61e7))
* add upgrade kaitian script ([4f0d78a](https://github.com/opensumi/codeblitz/commit/4f0d78aa0a533f0ca5cf95818aca72d18aef57ca))
* add webview, upgrade kaitian ([57e7413](https://github.com/opensumi/codeblitz/commit/57e7413b1d4ace95fc784a78a4d2155c5f0ce6c5))
* add-webscm-monitor ([0bbb5bb](https://github.com/opensumi/codeblitz/commit/0bbb5bbe588e2f7390cdf3d3d75bf3d28ce10a4f))
* **alex:** 内置扩展使用公网的版本 ([c85f09e](https://github.com/opensumi/codeblitz/commit/c85f09efaa8f175984150f380e0a8cc1def74e13))
* **alex:** 支持动态调整搜索组件的顶部位置 ([a537aab](https://github.com/opensumi/codeblitz/commit/a537aab1499601dcf779f1aa77cb4079e722d34d))
* atomgit 平台不加载 graph 插件 ([521123c](https://github.com/opensumi/codeblitz/commit/521123c7caa0a1712aaa8296019cbeceb3a36ff9))
* basic implements for lsif module ([ad61760](https://github.com/opensumi/codeblitz/commit/ad61760e497296779f0e5bc7f6502308371debbe))
* biz 类型改为必需 ([02c95b9](https://github.com/opensumi/codeblitz/commit/02c95b9216f53dcf8e07617a815a433c70a092e9))
* bundle antd3, upgrade lsif ([3ed451b](https://github.com/opensumi/codeblitz/commit/3ed451be736b156d08262ac01e810652cdc3d962))
* change extensions field ([edc03b4](https://github.com/opensumi/codeblitz/commit/edc03b459b3ebe9f3e18deb64f10a35adb11c34b))
* change spacex to alex ([d01dad8](https://github.com/opensumi/codeblitz/commit/d01dad8ddbfbda91e7e5095b650f2fcbac5c626b))
* **cli:** 支持加载公网和本地调试扩展 ([b2601cb](https://github.com/opensumi/codeblitz/commit/b2601cb64a509d71c8fe3887bacf778a1364bfe1))
* **code-api:** 支持代码及文件搜索 ([e2e7056](https://github.com/opensumi/codeblitz/commit/e2e70563f16279e323b07c2dd1c6553ee58473fa))
* **code-service:** 增加 commit 等 api 和 command ([937c53d](https://github.com/opensumi/codeblitz/commit/937c53dc5f5d77fe9cdf9faeb7ff9b9823e9bd5f))
* **code-service:** 增加内置 blame 和 link 命令 ([e11a5a9](https://github.com/opensumi/codeblitz/commit/e11a5a93ec937bccc5bb340d862cc319c97ec597))
* https://code.alipay.com/cloud-ide/acr-ide/pull_requests/233 ([0650cad](https://github.com/opensumi/codeblitz/commit/0650cadcc6f5fe759cf04010ae4d95d741889e55))
* implement getBlob ([acbacac](https://github.com/opensumi/codeblitz/commit/acbacaccd799b30d0059da16971f50cef8b8284e))
* init ([865f5bf](https://github.com/opensumi/codeblitz/commit/865f5bf1967fa86447ac4c997b66adef07a4b4e5))
* keepalive ([62d57dc](https://github.com/opensumi/codeblitz/commit/62d57dcf9b68c076674325778883afb3374353c8))
* lsif 对接,高亮行内容 ([edcdd45](https://github.com/opensumi/codeblitz/commit/edcdd4581433b304c219936d643aa74eefeacb3c))
* markdown 能力增强 ([3d81e76](https://github.com/opensumi/codeblitz/commit/3d81e762aa0d70e6f2bdc286d7f0d64bc28673ac))
* pick https://code.alipay.com/cloud-ide/acr-ide/pull_requests/234 ([24e642c](https://github.com/opensumi/codeblitz/commit/24e642c87f5d7452e0c5f1bc7083ab57d23ca131))
* pick https://code.alipay.com/cloud-ide/acr-ide/pull_requests/235 ([d4b2b16](https://github.com/opensumi/codeblitz/commit/d4b2b1607755ec173b6ae36cb58acbeac20cdae0))
* read commit/project from `alex.codeServiceProject` ([65ac718](https://github.com/opensumi/codeblitz/commit/65ac71881668def6ffe6c9a6db06243088ed4a9c))
* remove scrollBeyondLastLine default false value ([8a792e4](https://github.com/opensumi/codeblitz/commit/8a792e4dd390f8056737c5014c1ed30b760da171))
* remove some config ([8a0d7ef](https://github.com/opensumi/codeblitz/commit/8a0d7efabd741318d9061dd9583207bde2d73923))
* rename module git to code-service ([219f2c0](https://github.com/opensumi/codeblitz/commit/219f2c0b239951a05280ab9b3288639a90af5989))
* resolve path as workspace fs does ([c9ad226](https://github.com/opensumi/codeblitz/commit/c9ad22650700dbae06dd3c9a33a7b7b02058ceb3))
* sql service init ([ce7f416](https://github.com/opensumi/codeblitz/commit/ce7f416dbdeddacb5b0b1b3b7f09bb69c3f5a85d))
* support atomgit api ([78bfaa9](https://github.com/opensumi/codeblitz/commit/78bfaa926449e372d782628975b83a5cfe48c33c))
* tsbuild ([c14278e](https://github.com/opensumi/codeblitz/commit/c14278ec6912c2c7f69ed5b26c1d0ab1a554fc2a))
* use custom elements for alex-root ([b4d7d31](https://github.com/opensumi/codeblitz/commit/b4d7d31477896b8d3c697aaa651ff5e21027ccfb))
* webview 增加内部 url，code-api 支持预设 token ([3875c1a](https://github.com/opensumi/codeblitz/commit/3875c1a9c353d164deaf1f4fb2a549e1176d73c7))
* worker-host 上传到公网 ([e2d79e8](https://github.com/opensumi/codeblitz/commit/e2d79e8ee3c6072e1c770629fb2cae7ddb39a03c))


### Reverts

* 回退版本 ([d95b004](https://github.com/opensumi/codeblitz/commit/d95b004f854d3345c6685ce6f0eb4ec92f742ee9))



