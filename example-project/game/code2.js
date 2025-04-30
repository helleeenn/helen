gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDNewSpriteObjects1= [];
gdjs.GameOverCode.GDNewSpriteObjects2= [];
gdjs.GameOverCode.GDNewSprite2Objects1= [];
gdjs.GameOverCode.GDNewSprite2Objects2= [];
gdjs.GameOverCode.GDNewSprite3Objects1= [];
gdjs.GameOverCode.GDNewSprite3Objects2= [];
gdjs.GameOverCode.GDNewTextObjects1= [];
gdjs.GameOverCode.GDNewTextObjects2= [];
gdjs.GameOverCode.GDNewSprite4Objects1= [];
gdjs.GameOverCode.GDNewSprite4Objects2= [];
gdjs.GameOverCode.GDRepeatArrowObjects1= [];
gdjs.GameOverCode.GDRepeatArrowObjects2= [];


gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDRepeatArrowObjects1Objects = Hashtable.newFrom({"RepeatArrow": gdjs.GameOverCode.GDRepeatArrowObjects1});
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RepeatArrow"), gdjs.GameOverCode.GDRepeatArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_9546GameOverCode_9546GDRepeatArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects2.length = 0;
gdjs.GameOverCode.GDNewSprite3Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite3Objects2.length = 0;
gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite4Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite4Objects2.length = 0;
gdjs.GameOverCode.GDRepeatArrowObjects1.length = 0;
gdjs.GameOverCode.GDRepeatArrowObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite2Objects2.length = 0;
gdjs.GameOverCode.GDNewSprite3Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite3Objects2.length = 0;
gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;
gdjs.GameOverCode.GDNewSprite4Objects1.length = 0;
gdjs.GameOverCode.GDNewSprite4Objects2.length = 0;
gdjs.GameOverCode.GDRepeatArrowObjects1.length = 0;
gdjs.GameOverCode.GDRepeatArrowObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
