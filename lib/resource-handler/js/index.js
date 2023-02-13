import CssResourceHandler from '../css/index.js';

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
