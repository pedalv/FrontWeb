# Module Resolution

```bash
// Look at the example:
import { jquery } from ‘jquery’;
```

- Module resolution tell module bundler where to look the file that you import. 
- It depends on your setting and module bundler. 
> For example, webpack will look for the file in directories specified in resolve.modules if you don’t provide path. 

> It’s default setting is node_modules folder.

> You can use relative path and absolute path as well.
```bash
import plus2num from './idoaboutmathcalculate';
//or
import plus2num from 'absolute/path/idoaboutmathcalculate';
```
- You can notice there’s no file extension. 
- The default is .js
> you can set default file extension in module bundler config file.