gdjs.sn1Code = {};
gdjs.sn1Code.GDe9Objects1= [];
gdjs.sn1Code.GDe9Objects2= [];
gdjs.sn1Code.GDe9Objects3= [];
gdjs.sn1Code.GDe9Objects4= [];
gdjs.sn1Code.GDe8Objects1= [];
gdjs.sn1Code.GDe8Objects2= [];
gdjs.sn1Code.GDe8Objects3= [];
gdjs.sn1Code.GDe8Objects4= [];
gdjs.sn1Code.GDe7Objects1= [];
gdjs.sn1Code.GDe7Objects2= [];
gdjs.sn1Code.GDe7Objects3= [];
gdjs.sn1Code.GDe7Objects4= [];
gdjs.sn1Code.GDe6Objects1= [];
gdjs.sn1Code.GDe6Objects2= [];
gdjs.sn1Code.GDe6Objects3= [];
gdjs.sn1Code.GDe6Objects4= [];
gdjs.sn1Code.GDe5Objects1= [];
gdjs.sn1Code.GDe5Objects2= [];
gdjs.sn1Code.GDe5Objects3= [];
gdjs.sn1Code.GDe5Objects4= [];
gdjs.sn1Code.GDe4Objects1= [];
gdjs.sn1Code.GDe4Objects2= [];
gdjs.sn1Code.GDe4Objects3= [];
gdjs.sn1Code.GDe4Objects4= [];
gdjs.sn1Code.GDe3Objects1= [];
gdjs.sn1Code.GDe3Objects2= [];
gdjs.sn1Code.GDe3Objects3= [];
gdjs.sn1Code.GDe3Objects4= [];
gdjs.sn1Code.GDe2Objects1= [];
gdjs.sn1Code.GDe2Objects2= [];
gdjs.sn1Code.GDe2Objects3= [];
gdjs.sn1Code.GDe2Objects4= [];
gdjs.sn1Code.GDe1Objects1= [];
gdjs.sn1Code.GDe1Objects2= [];
gdjs.sn1Code.GDe1Objects3= [];
gdjs.sn1Code.GDe1Objects4= [];
gdjs.sn1Code.GDevObjects1= [];
gdjs.sn1Code.GDevObjects2= [];
gdjs.sn1Code.GDevObjects3= [];
gdjs.sn1Code.GDevObjects4= [];
gdjs.sn1Code.GDboxplayerObjects1= [];
gdjs.sn1Code.GDboxplayerObjects2= [];
gdjs.sn1Code.GDboxplayerObjects3= [];
gdjs.sn1Code.GDboxplayerObjects4= [];
gdjs.sn1Code.GDplayerObjects1= [];
gdjs.sn1Code.GDplayerObjects2= [];
gdjs.sn1Code.GDplayerObjects3= [];
gdjs.sn1Code.GDplayerObjects4= [];
gdjs.sn1Code.GDtextObjects1= [];
gdjs.sn1Code.GDtextObjects2= [];
gdjs.sn1Code.GDtextObjects3= [];
gdjs.sn1Code.GDtextObjects4= [];
gdjs.sn1Code.GDffrockObjects1= [];
gdjs.sn1Code.GDffrockObjects2= [];
gdjs.sn1Code.GDffrockObjects3= [];
gdjs.sn1Code.GDffrockObjects4= [];
gdjs.sn1Code.GDstelarObjects1= [];
gdjs.sn1Code.GDstelarObjects2= [];
gdjs.sn1Code.GDstelarObjects3= [];
gdjs.sn1Code.GDstelarObjects4= [];

gdjs.sn1Code.conditionTrue_0 = {val:false};
gdjs.sn1Code.condition0IsTrue_0 = {val:false};
gdjs.sn1Code.condition1IsTrue_0 = {val:false};
gdjs.sn1Code.condition2IsTrue_0 = {val:false};
gdjs.sn1Code.condition3IsTrue_0 = {val:false};
gdjs.sn1Code.conditionTrue_1 = {val:false};
gdjs.sn1Code.condition0IsTrue_1 = {val:false};
gdjs.sn1Code.condition1IsTrue_1 = {val:false};
gdjs.sn1Code.condition2IsTrue_1 = {val:false};
gdjs.sn1Code.condition3IsTrue_1 = {val:false};


gdjs.sn1Code.eventsList0x7081b0 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x7081b0
gdjs.sn1Code.eventsList0x708078 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x7081b0(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(2);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x708078
gdjs.sn1Code.eventsList0x708e10 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x708e10
gdjs.sn1Code.eventsList0x708cd8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x708e10(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(2);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x708cd8
gdjs.sn1Code.eventsList0x709a88 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x709a88
gdjs.sn1Code.eventsList0x709950 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x709a88(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(2);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x709950
gdjs.sn1Code.eventsList0x707f40 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x708078(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 3 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x708cd8(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 5 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x709950(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x707f40
gdjs.sn1Code.eventsList0x707d08 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) < 139 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x707f40(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x707d08
gdjs.sn1Code.eventsList0x70ab08 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x70ab08
gdjs.sn1Code.eventsList0x70a9d0 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x70ab08(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(1);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x70a9d0
gdjs.sn1Code.eventsList0x70bb18 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x70bb18
gdjs.sn1Code.eventsList0x70b9e0 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(10);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x70bb18(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(1);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x70b9e0
gdjs.sn1Code.eventsList0x70a898 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 2 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70a9d0(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 4 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70b9e0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x70a898
gdjs.sn1Code.eventsList0x70a660 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) < 139 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70a898(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x70a660
gdjs.sn1Code.eventsList0x70cf98 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x70cf98
gdjs.sn1Code.eventsList0x70ce60 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x70cf98(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(3);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x70ce60
gdjs.sn1Code.eventsList0x70da40 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x70da40
gdjs.sn1Code.eventsList0x70d908 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(10);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x70da40(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(3);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x70d908
gdjs.sn1Code.eventsList0x70cd28 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 2 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70ce60(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 6 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70d908(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x70cd28
gdjs.sn1Code.eventsList0x70caf0 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) < 139 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70cd28(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x70caf0
gdjs.sn1Code.eventsList0x70eb30 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x70eb30
gdjs.sn1Code.eventsList0x70e9f8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(5);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x70eb30(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(6);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(5);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x70e9f8
gdjs.sn1Code.eventsList0x70f9e0 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x70f9e0
gdjs.sn1Code.eventsList0x70f8a8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(9);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x70f9e0(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(6);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(5);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x70f8a8
gdjs.sn1Code.eventsList0x710958 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x710958
gdjs.sn1Code.eventsList0x710820 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(9);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x710958(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(6);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(5);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x710820
gdjs.sn1Code.eventsList0x711aa8 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x711aa8
gdjs.sn1Code.eventsList0x711970 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(19);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x711aa8(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(6);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(5);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x711970
gdjs.sn1Code.eventsList0x70e7d8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 2 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70e9f8(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 6 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70f8a8(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 4 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x710820(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 8 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x711970(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x70e7d8
gdjs.sn1Code.eventsList0x70e5a0 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) > 214 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) <= 380 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70e7d8(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x70e5a0
gdjs.sn1Code.eventsList0x712f20 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x712f20
gdjs.sn1Code.eventsList0x712de8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(7);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x712f20(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(8);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(6);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x712de8
gdjs.sn1Code.eventsList0x713dc0 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x713dc0
gdjs.sn1Code.eventsList0x713cd0 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(11);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x713dc0(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(8);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(6);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x713cd0
gdjs.sn1Code.eventsList0x714c88 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x714c88
gdjs.sn1Code.eventsList0x714b98 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(13);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x714c88(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(8);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(6);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x714b98
gdjs.sn1Code.eventsList0x712bc8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 5 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x712de8(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 3 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x713cd0(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 9 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x714b98(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x712bc8
gdjs.sn1Code.eventsList0x712990 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) > 214 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) <= 380 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x712bc8(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x712990
gdjs.sn1Code.eventsList0x716040 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x716040
gdjs.sn1Code.eventsList0x715f08 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(12);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x716040(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(14);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(9);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x715f08
gdjs.sn1Code.eventsList0x716ee0 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x716ee0
gdjs.sn1Code.eventsList0x716df0 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(15);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x716ee0(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(16);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(9);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x716df0
gdjs.sn1Code.eventsList0x715ce8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 6 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x715f08(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 8 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x716df0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x715ce8
gdjs.sn1Code.eventsList0x715af8 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) > 446 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) <= 600 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x715ce8(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x715af8
gdjs.sn1Code.eventsList0x718410 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x718410
gdjs.sn1Code.eventsList0x7182d8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(17);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x718410(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(20);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(8);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x7182d8
gdjs.sn1Code.eventsList0x719398 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x719398
gdjs.sn1Code.eventsList0x719260 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(17);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x719398(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(20);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(8);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x719260
gdjs.sn1Code.eventsList0x71a410 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(9)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x71a410
gdjs.sn1Code.eventsList0x71a2d8 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(9)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(18);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(false);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x71a410(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(9)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(20);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(8);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x71a2d8
gdjs.sn1Code.eventsList0x718068 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 9 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x7182d8(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 7 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x719260(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 5 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71a2d8(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x718068
gdjs.sn1Code.eventsList0x717e08 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) > 446 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) <= 600 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x718068(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x717e08
gdjs.sn1Code.eventsList0x71ba40 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x71ba40
gdjs.sn1Code.eventsList0x71b908 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(15);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x71ba40(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(16);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(7);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x71b908
gdjs.sn1Code.eventsList0x71ca90 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(8)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x71ca90
gdjs.sn1Code.eventsList0x71c958 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(8)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(12);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x71ca90(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(8)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(14);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(7);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x71c958
gdjs.sn1Code.eventsList0x71b698 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 8 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71b908(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 4 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71c958(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x71b698
gdjs.sn1Code.eventsList0x71b410 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) > 446 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) <= 600 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71b698(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x71b410
gdjs.sn1Code.eventsList0x71e0e8 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x71e0e8
gdjs.sn1Code.eventsList0x71dfb0 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(13);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x71e0e8(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(8);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(9)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(4);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x71dfb0
gdjs.sn1Code.eventsList0x71f1d0 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects3 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects3[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects3[k] = gdjs.sn1Code.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x71f1d0
gdjs.sn1Code.eventsList0x71f098 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(7);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x71f1d0(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects3.createFrom(gdjs.sn1Code.GDboxplayerObjects2);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects3.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects3[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects3[k] = gdjs.sn1Code.GDboxplayerObjects3[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects3.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects3 */
gdjs.sn1Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects3[i].setAnimation(8);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects3.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects3[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects3[i].getVariables().getFromIndex(4)).setNumber(4);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x71f098
gdjs.sn1Code.eventsList0x720248 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDplayerObjects2 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDplayerObjects2[i].hasAnimationEnded() ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDplayerObjects2[k] = gdjs.sn1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(1);
}
}}

}


}; //End of gdjs.sn1Code.eventsList0x720248
gdjs.sn1Code.eventsList0x720110 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)) == 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(11);
}
}{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].flipX(true);
}
}
{ //Subevents
gdjs.sn1Code.eventsList0x720248(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.sn1Code.GDboxplayerObjects2 */
gdjs.sn1Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects2[i].setAnimation(8);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(1)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(5)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(6)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().get("ve3")).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(7)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(10)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(8)).setNumber(0);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects2.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects2[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)).setNumber(4);
}
}}

}


{


{
}

}


}; //End of gdjs.sn1Code.eventsList0x720110
gdjs.sn1Code.eventsList0x71dd40 = function(runtimeScene) {

{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 7 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71dfb0(runtimeScene);} //End of subevents
}

}


{

gdjs.sn1Code.GDboxplayerObjects2.createFrom(gdjs.sn1Code.GDboxplayerObjects1);


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects2.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects2[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects2[i].getVariables().getFromIndex(4)) == 5 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects2[k] = gdjs.sn1Code.GDboxplayerObjects2[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects2.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71f098(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(4)) == 1 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if (gdjs.sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x720110(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x71dd40
gdjs.sn1Code.eventsList0x71dab8 = function(runtimeScene) {

{

/* Reuse gdjs.sn1Code.GDboxplayerObjects1 */

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) > 214 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)) <= 380 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71dd40(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.sn1Code.eventsList0x71dab8
gdjs.sn1Code.eventsList0xb2358 = function(runtimeScene) {

{


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));
gdjs.sn1Code.GDe1Objects1.createFrom(runtimeScene.getObjects("e1"));
gdjs.sn1Code.GDe2Objects1.createFrom(runtimeScene.getObjects("e2"));
gdjs.sn1Code.GDe3Objects1.createFrom(runtimeScene.getObjects("e3"));
gdjs.sn1Code.GDe4Objects1.createFrom(runtimeScene.getObjects("e4"));
gdjs.sn1Code.GDe5Objects1.createFrom(runtimeScene.getObjects("e5"));
gdjs.sn1Code.GDe6Objects1.createFrom(runtimeScene.getObjects("e6"));
gdjs.sn1Code.GDe7Objects1.createFrom(runtimeScene.getObjects("e7"));
gdjs.sn1Code.GDe9Objects1.createFrom(runtimeScene.getObjects("e9"));
gdjs.sn1Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.sn1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDplayerObjects1[i].setScale(1.3);
}
}{for(var i = 0, len = gdjs.sn1Code.GDe1Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDe1Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDe2Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDe3Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDe4Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDe5Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDe6Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDe9Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe9Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDe7Objects1.length ;i < len;++i) {
    gdjs.sn1Code.GDe7Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].hide();
}
}}

}


{


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition0IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7367668);
}
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "..\\..\\sn1\\so1.mp3", true, 100, 1);
}}

}


{


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].setX((gdjs.sn1Code.GDboxplayerObjects1[i].getPointX("")) - 267);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].setY((gdjs.sn1Code.GDboxplayerObjects1[i].getPointY("")));
}
}}

}


{


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].setX((gdjs.sn1Code.GDboxplayerObjects1[i].getPointX("")) + 267);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].setY((gdjs.sn1Code.GDboxplayerObjects1[i].getPointY("")));
}
}}

}


{


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].setY((gdjs.sn1Code.GDboxplayerObjects1[i].getPointY("")) - 200);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].setX((gdjs.sn1Code.GDboxplayerObjects1[i].getPointX("")));
}
}}

}


{


gdjs.sn1Code.condition0IsTrue_0.val = false;
{
gdjs.sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if (gdjs.sn1Code.condition0IsTrue_0.val) {
gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].setY((gdjs.sn1Code.GDboxplayerObjects1[i].getPointY("")) + 200);
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].setX((gdjs.sn1Code.GDboxplayerObjects1[i].getPointX("")));
}
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));
{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.sn1Code.GDboxplayerObjects1[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.sn1Code.GDboxplayerObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDboxplayerObjects1[i].returnVariable(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(2)).setNumber((gdjs.sn1Code.GDboxplayerObjects1[i].getPointY("")));
}
}}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 300 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 506 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x707d08(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 205 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70a660(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 598 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 800 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70caf0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 300 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 497 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x70e5a0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 580 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 800 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x712990(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 580 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 800 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x715af8(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 300 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 497 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x717e08(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 216 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71b410(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));

gdjs.sn1Code.condition0IsTrue_0.val = false;
gdjs.sn1Code.condition1IsTrue_0.val = false;
gdjs.sn1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.sn1Code.condition0IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}if ( gdjs.sn1Code.condition0IsTrue_0.val ) {
{
{gdjs.sn1Code.conditionTrue_1 = gdjs.sn1Code.condition1IsTrue_0;
gdjs.sn1Code.conditionTrue_1.val = true;
}
}if ( gdjs.sn1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sn1Code.GDboxplayerObjects1.length;i<l;++i) {
    if ( gdjs.sn1Code.GDboxplayerObjects1[i].getVariableNumber(gdjs.sn1Code.GDboxplayerObjects1[i].getVariables().getFromIndex(0)) <= 216 ) {
        gdjs.sn1Code.condition2IsTrue_0.val = true;
        gdjs.sn1Code.GDboxplayerObjects1[k] = gdjs.sn1Code.GDboxplayerObjects1[i];
        ++k;
    }
}
gdjs.sn1Code.GDboxplayerObjects1.length = k;}}
}
if (gdjs.sn1Code.condition2IsTrue_0.val) {

{ //Subevents
gdjs.sn1Code.eventsList0x71dab8(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
}

}


{


{
gdjs.sn1Code.GDboxplayerObjects1.createFrom(runtimeScene.getObjects("boxplayer"));
gdjs.sn1Code.GDtextObjects1.createFrom(runtimeScene.getObjects("text"));
{for(var i = 0, len = gdjs.sn1Code.GDtextObjects1.length ;i < len;++i) {
    gdjs.sn1Code.GDtextObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.sn1Code.GDboxplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.sn1Code.GDboxplayerObjects1[0].getVariables()).getFromIndex(4))));
}
}}

}


}; //End of gdjs.sn1Code.eventsList0xb2358


gdjs.sn1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.sn1Code.GDe9Objects1.length = 0;
gdjs.sn1Code.GDe9Objects2.length = 0;
gdjs.sn1Code.GDe9Objects3.length = 0;
gdjs.sn1Code.GDe9Objects4.length = 0;
gdjs.sn1Code.GDe8Objects1.length = 0;
gdjs.sn1Code.GDe8Objects2.length = 0;
gdjs.sn1Code.GDe8Objects3.length = 0;
gdjs.sn1Code.GDe8Objects4.length = 0;
gdjs.sn1Code.GDe7Objects1.length = 0;
gdjs.sn1Code.GDe7Objects2.length = 0;
gdjs.sn1Code.GDe7Objects3.length = 0;
gdjs.sn1Code.GDe7Objects4.length = 0;
gdjs.sn1Code.GDe6Objects1.length = 0;
gdjs.sn1Code.GDe6Objects2.length = 0;
gdjs.sn1Code.GDe6Objects3.length = 0;
gdjs.sn1Code.GDe6Objects4.length = 0;
gdjs.sn1Code.GDe5Objects1.length = 0;
gdjs.sn1Code.GDe5Objects2.length = 0;
gdjs.sn1Code.GDe5Objects3.length = 0;
gdjs.sn1Code.GDe5Objects4.length = 0;
gdjs.sn1Code.GDe4Objects1.length = 0;
gdjs.sn1Code.GDe4Objects2.length = 0;
gdjs.sn1Code.GDe4Objects3.length = 0;
gdjs.sn1Code.GDe4Objects4.length = 0;
gdjs.sn1Code.GDe3Objects1.length = 0;
gdjs.sn1Code.GDe3Objects2.length = 0;
gdjs.sn1Code.GDe3Objects3.length = 0;
gdjs.sn1Code.GDe3Objects4.length = 0;
gdjs.sn1Code.GDe2Objects1.length = 0;
gdjs.sn1Code.GDe2Objects2.length = 0;
gdjs.sn1Code.GDe2Objects3.length = 0;
gdjs.sn1Code.GDe2Objects4.length = 0;
gdjs.sn1Code.GDe1Objects1.length = 0;
gdjs.sn1Code.GDe1Objects2.length = 0;
gdjs.sn1Code.GDe1Objects3.length = 0;
gdjs.sn1Code.GDe1Objects4.length = 0;
gdjs.sn1Code.GDevObjects1.length = 0;
gdjs.sn1Code.GDevObjects2.length = 0;
gdjs.sn1Code.GDevObjects3.length = 0;
gdjs.sn1Code.GDevObjects4.length = 0;
gdjs.sn1Code.GDboxplayerObjects1.length = 0;
gdjs.sn1Code.GDboxplayerObjects2.length = 0;
gdjs.sn1Code.GDboxplayerObjects3.length = 0;
gdjs.sn1Code.GDboxplayerObjects4.length = 0;
gdjs.sn1Code.GDplayerObjects1.length = 0;
gdjs.sn1Code.GDplayerObjects2.length = 0;
gdjs.sn1Code.GDplayerObjects3.length = 0;
gdjs.sn1Code.GDplayerObjects4.length = 0;
gdjs.sn1Code.GDtextObjects1.length = 0;
gdjs.sn1Code.GDtextObjects2.length = 0;
gdjs.sn1Code.GDtextObjects3.length = 0;
gdjs.sn1Code.GDtextObjects4.length = 0;
gdjs.sn1Code.GDffrockObjects1.length = 0;
gdjs.sn1Code.GDffrockObjects2.length = 0;
gdjs.sn1Code.GDffrockObjects3.length = 0;
gdjs.sn1Code.GDffrockObjects4.length = 0;
gdjs.sn1Code.GDstelarObjects1.length = 0;
gdjs.sn1Code.GDstelarObjects2.length = 0;
gdjs.sn1Code.GDstelarObjects3.length = 0;
gdjs.sn1Code.GDstelarObjects4.length = 0;

gdjs.sn1Code.eventsList0xb2358(runtimeScene);
return;
}
gdjs['sn1Code'] = gdjs.sn1Code;
