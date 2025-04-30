gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDPlayObjects1= [];
gdjs.MainMenuCode.GDPlayObjects2= [];
gdjs.MainMenuCode.GDSettingsObjects1= [];
gdjs.MainMenuCode.GDSettingsObjects2= [];
gdjs.MainMenuCode.GDQuitObjects1= [];
gdjs.MainMenuCode.GDQuitObjects2= [];
gdjs.MainMenuCode.GDMarkerObjects1= [];
gdjs.MainMenuCode.GDMarkerObjects2= [];
gdjs.MainMenuCode.GDSoundVolumeObjects1= [];
gdjs.MainMenuCode.GDSoundVolumeObjects2= [];
gdjs.MainMenuCode.GDMusicVolumeObjects1= [];
gdjs.MainMenuCode.GDMusicVolumeObjects2= [];
gdjs.MainMenuCode.GDSquareWhiteSliderObjects1= [];
gdjs.MainMenuCode.GDSquareWhiteSliderObjects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayObjects1[k] = gdjs.MainMenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безіменна сцена", false);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDPlayObjects1.length = 0;
gdjs.MainMenuCode.GDPlayObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsObjects2.length = 0;
gdjs.MainMenuCode.GDQuitObjects1.length = 0;
gdjs.MainMenuCode.GDQuitObjects2.length = 0;
gdjs.MainMenuCode.GDMarkerObjects1.length = 0;
gdjs.MainMenuCode.GDMarkerObjects2.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MainMenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDPlayObjects1.length = 0;
gdjs.MainMenuCode.GDPlayObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsObjects2.length = 0;
gdjs.MainMenuCode.GDQuitObjects1.length = 0;
gdjs.MainMenuCode.GDQuitObjects2.length = 0;
gdjs.MainMenuCode.GDMarkerObjects1.length = 0;
gdjs.MainMenuCode.GDMarkerObjects2.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MainMenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
