# 2.0.0 (2020-12-28)

### Features

- remove getPseudorandom, isPlainObject, replaceProperty ([35ef170](https://github.com/xianshenglu/jsSnippets/commit/35ef170ca295bfdd72f7d70220e39cdd6891886a))
- remove htmlDecodeByDom, htmlEncodeByDom, isObject ([a8077ce](https://github.com/xianshenglu/jsSnippets/commit/a8077ceb467d066dcbd1936de4e047b983026933))
- rename flattenArr to flattenChildrenDeep ([41ef61c](https://github.com/xianshenglu/jsSnippets/commit/41ef61c51df05ba200d384ce28ce4f09deadf090))
- replace tryJsonParse with isJson ([61981f4](https://github.com/xianshenglu/jsSnippets/commit/61981f43fb6c2dff6eb6fd0683bdddc2c01ede6a))

### BREAKING CHANGES

- rename flattenArr to flattenChildrenDeep
- replace tryJsonParse with isJson to avoid customizing data format
- remove htmlDecodeByDom, htmlEncodeByDom, isObject because lodash already have escape, unescape, and isObject
- remove getPseudorandom, isPlainObject, replaceProperty as they exist in lodash, remove getDateInfo as it exists in dayjs, remove closest as polyfill exists, remove sortCharacters
