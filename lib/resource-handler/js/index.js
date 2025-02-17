import { updateResourceEncoding } from '../../utils/index.js';
import CssResourceHandler from '../css/index.js';
import JsText from '../path-containers/js-text.js';

class JsResourceHandler extends CssResourceHandler {
  async handle(resource) {
    prepareToLoad(resource);

    const pathContainer = new JsText(resource.getText());

    const updatedText = await this.downloadChildrenPaths(pathContainer, resource, this.updateMissingSources);
    resource.setText(updatedText);
    return resource;
  }
}

function prepareToLoad(resource) {
  updateResourceEncoding(resource, 'utf8');
}

export default JsResourceHandler;
