var __liquidLastRenderData = null;

function isDynamic() {
  return urlSearchParams.get('dynamic') || false;
}

function buildRenderData(dynamicData) {
  var data = Object.assign(liquidData, dynamicData || {});
  return data;
}

function render(element, template, dynamicData) {
  var data = dynamicData && buildRenderData(dynamicData);
  liquidEngine.renderFile(template, data || __liquidLastRenderData).then(function(content) { element.innerHTML = content });
  if (data)
    __liquidLastRenderData = data;
}
