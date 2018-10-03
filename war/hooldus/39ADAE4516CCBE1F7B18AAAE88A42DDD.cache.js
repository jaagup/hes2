var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.hooldus;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = '39ADAE4516CCBE1F7B18AAAE88A42DDD';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {21:1, 13:1, 19:1, 16:1, 22:1, 15:1, 12:1}, $intern_2 = {21:1, 13:1, 19:1, 16:1, 43:1, 22:1, 15:1, 12:1}, $intern_3 = {3:1}, $intern_4 = {205:1, 33:1}, $intern_5 = {35:1, 23:1}, $intern_6 = {33:1, 138:1}, $intern_7 = {136:1, 33:1}, $intern_8 = 3.141592653589793, $intern_9 = {3:1, 8:1, 7:1}, $intern_10 = {10:1, 9:1, 3:1, 5:1, 4:1}, $intern_11 = {9:1, 26:1, 3:1, 5:1, 4:1}, $intern_12 = {9:1, 55:1, 3:1, 5:1, 4:1}, $intern_13 = {9:1, 56:1, 3:1, 5:1, 4:1}, $intern_14 = {9:1, 81:1, 3:1, 5:1, 4:1}, $intern_15 = {9:1, 57:1, 3:1, 5:1, 4:1}, $intern_16 = {25:1, 3:1, 5:1, 4:1}, $intern_17 = {13:1}, $intern_18 = {79:1, 3:1, 8:1, 7:1}, $intern_19 = {63:1, 3:1, 7:1}, $intern_20 = {3:1, 5:1, 39:1}, $intern_21 = -2147483648, $intern_22 = 4194303, $intern_23 = 1048575, $intern_24 = 524288, $intern_25 = 4194304, $intern_26 = 17592186044416, $intern_27 = -17592186044416, $intern_28 = {33:1, 174:1}, $intern_29 = 16384, $intern_30 = 131072, $intern_31 = 16777216, $intern_32 = 33554432, $intern_33 = 67108864, $intern_34 = {18:1, 3:1, 5:1, 4:1}, $intern_35 = {21:1, 13:1, 19:1, 16:1, 43:1, 22:1, 99:1, 15:1, 12:1}, $intern_36 = {3:1, 60:1, 7:1}, $intern_37 = {28:1, 95:1}, $intern_38 = {28:1, 14:1}, $intern_39 = {51:1}, $intern_40 = {3:1, 28:1, 14:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_8(object){
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (hashCode__I__devirtual$(object) >>> 0).toString(16);
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_2(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode_1(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode_1(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode_1(this);
}
;
_.toString_0 = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castTo(src_0, dstId){
  checkCriticalType(src_0 == null || canCast(src_0, dstId));
  return src_0;
}

function castToDouble(src_0){
  checkCriticalType(src_0 == null || instanceOfDouble(src_0));
  return src_0;
}

function castToJso(src_0){
  checkCriticalType(src_0 == null || isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn));
  return src_0;
}

function castToString(src_0){
  checkCriticalType(src_0 == null || instanceOfString(src_0));
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && isJsObjectOrFunction(src_0) && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

function throwClassCastExceptionUnlessNull(o){
  checkCriticalType(o == null);
  return o;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(139, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_15(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 139);
function getAHOImage(imageLetter, size_0){
  var image;
  image = new Image_3('res/aho_' + imageLetter + '.png');
  size_0 >= 0 && (($clinit_DOM() , image.element).style['width'] = size_0 + 'px' , undefined);
  size_0 >= 0 && (($clinit_DOM() , image.element).style['height'] = size_0 + 'px' , undefined);
  $setAltText(image, imageLetter.toLocaleUpperCase());
  return image;
}

function log_0(s){
  isEnabledFlag_ && (console.log(s) , undefined);
}

var isEnabledFlag_ = false;
function $clinit_DeviceCard(){
  $clinit_DeviceCard = emptyMethod;
  deviceTreeService_0 = new DeviceTreeService_Proxy;
}

var deviceTreeService_0;
function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $resolvePotentialElement(){
  throw toJs(new UnsupportedOperationException);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
}

function $setSize(this$static, width_0, height){
  this$static.setWidth(width_0);
  this$static.setHeight(height);
}

function $setStyleName(this$static, style){
  $setClassName(($clinit_DOM() , this$static.element), style);
}

function $setVisible(this$static){
  setVisible(($clinit_DOM() , this$static.element), false);
}

function $setWidth(this$static, width_0){
  ($clinit_DOM() , this$static.element).style['width'] = width_0;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(($clinit_DOM() , this$static.element), eventTypeName);
}

function $toString(this$static){
  if (!this$static.element) {
    return '(null handle)';
  }
  return $toString_1(($clinit_DOM() , this$static.element));
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw toJs(new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.'));
  }
  style = $trim(style);
  if (style.length == 0) {
    throw toJs(new IllegalArgumentException_0('Style names cannot be empty'));
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(15, 1, {16:1, 15:1});
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.setHeight = function setHeight(height){
  $setHeight(this, height);
}
;
_.setSize = function setSize(width_0, height){
  $setSize(this, width_0, height);
}
;
_.setWidth = function setWidth(width_0){
  $setWidth(this, width_0);
}
;
_.toString_0 = function toString_1(){
  return $toString(this);
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 15);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(this$static.element, typeInt | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= typeInt);
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler(this$static, handler, type_0){
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents_1(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.onUnload();
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      this$static.element.__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 43)) {
    castTo(this$static.parent_0, 43).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , this$static.element.__listener = null , undefined);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener(this$static.element, this$static));
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(12, 15, $intern_1);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.setParent = function setParent(parent_0){
  $setParent(this, parent_0);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 12);
defineClass(519, 12, $intern_2);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 519);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_5(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForAccess(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.children.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $checkIndexBoundsForInsertion(this$static, index_0){
  if (index_0 < 0 || index_0 > this$static.children.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $getWidgetIndex(this$static, child){
  return $indexOf(this$static.children, child);
}

function $insert(this$static, child, container, beforeIndex){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_0(this$static.children, child, beforeIndex);
  insertChild(container, ($clinit_DOM() , child.element), beforeIndex);
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(114, 519, $intern_2);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove_0(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 114);
function $getWidgetTd(this$static, w){
  if (w.parent_0 != this$static) {
    return null;
  }
  return $clinit_DOM() , $clinit_DOM() , $getParentElement(w.element);
}

function $setCellHorizontalAlignment(td, align_0){
  ($clinit_DOM() , td)['align'] = align_0.textAlignString;
}

function $setCellHorizontalAlignment_0(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && (($clinit_DOM() , td)['align'] = align_0.textAlignString , undefined);
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  td.style['verticalAlign'] = align_0.verticalAlignString;
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement_0(this, this.table);
}

defineClass(144, 114, $intern_2);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 144);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START;
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_TOP;
function $add_0(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = (td_0 = $doc.createElement('td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  ($clinit_DOM() , this.table)['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(89, 144, $intern_2, VerticalPanel);
_.remove = function remove_1(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 89);
function $collectElementChain(this$static, chain, hRoot, hElem){
  if (!hElem || hElem == hRoot) {
    return;
  }
  $collectElementChain(this$static, chain, hRoot, ($clinit_DOM() , $clinit_DOM() , $getParentElement(hElem)));
  chain.array[chain.array.length] = hElem;
}

function $elementClicked(this$static, hElem){
  var chain, item_0;
  chain = new ArrayList;
  $collectElementChain(this$static, chain, ($clinit_DOM() , this$static.element), hElem);
  item_0 = $findItemByChain(this$static, chain, 0, this$static.root);
  if (!!item_0 && item_0 != this$static.root) {
    if ($getChildCount(item_0) > 0 && $isOrHasChild((null , $getFirstChildElement((!!item_0.imageHolder || $convertToFullNode(item_0) , item_0.imageHolder))), hElem)) {
      $setState(item_0, !item_0.open_0, true);
      return true;
    }
     else if ($isOrHasChild(item_0.element, hElem)) {
      $onSelection(this$static, item_0, !shouldTreeDelegateFocusToElement(hElem));
      return true;
    }
  }
  return false;
}

function $findDeepestOpenChild(this$static, item_0){
  if (!item_0.open_0) {
    return item_0;
  }
  return $findDeepestOpenChild(this$static, $getChild_0(item_0, $getChildCount(item_0) - 1));
}

function $findItemByChain(this$static, chain, idx, root){
  var child, hCurElem, i, n, retItem;
  if (idx == chain.array.length) {
    return root;
  }
  hCurElem = (checkCriticalElementIndex(idx, chain.array.length) , castToJso(chain.array[idx]));
  for (i = 0 , n = $getChildCount(root); i < n; ++i) {
    child = $getChild_0(root, i);
    $clinit_DOM();
    if (child.element == hCurElem) {
      retItem = $findItemByChain(this$static, chain, idx + 1, $getChild_0(root, i));
      if (!retItem) {
        return child;
      }
      return retItem;
    }
  }
  return $findItemByChain(this$static, chain, idx + 1, root);
}

function $fireStateChanged(this$static, open_0){
  open_0?undefined:fire_1(this$static);
}

function $getTopClosedParent(this$static, item_0){
  var parent_0, topClosedParent;
  topClosedParent = null;
  parent_0 = item_0.parent_0;
  while (!!parent_0 && parent_0 != this$static.root) {
    parent_0.open_0 || (topClosedParent = parent_0);
    parent_0 = parent_0.parent_0;
  }
  return topClosedParent;
}

function $init(this$static, images){
  $setImages(this$static, images, false);
  $setElement_0(this$static, ($clinit_DOM() , $doc.createElement('div')));
  this$static.element.style['position'] = 'relative';
  this$static.element.style['zoom'] = '1';
  this$static.focusable = ($clinit_FocusPanel() , createFocusable0(($clinit_FocusImpl() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler())));
  this$static.focusable.style['fontSize'] = '0';
  this$static.focusable.style['position'] = 'absolute';
  this$static.focusable.style['outline'] = '0px';
  this$static.focusable.setAttribute('hideFocus', 'true');
  setIntStyleAttribute(this$static.focusable, 'zIndex', -1);
  $appendChild(this$static.element, resolve(this$static.focusable));
  this$static.eventsToSink == -1?$sinkEvents_1(this$static.element, 901 | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= 901);
  $sinkEvents_1(this$static.focusable, 6144);
  this$static.root = new TreeItem_0(true);
  $setTree(this$static.root, this$static);
  this$static.element.className = 'gwt-Tree';
  $clinit_Roles();
  $set(TREE, this$static.focusable);
}

function $keyboardNavigation(this$static, event_0){
  var code_0, topClosedParent;
  code_0 = event_0.keyCode | 0;
  switch (code_0) {
    case 38:
      {
        $moveSelectionUp(this$static, this$static.curSelection);
        break;
      }

    case 40:
      {
        $moveSelectionDown(this$static, this$static.curSelection, true);
        break;
      }

    case 37:
      {
        $maybeCollapseTreeItem(this$static);
        break;
      }

    case 39:
      {
        topClosedParent = $getTopClosedParent(this$static, this$static.curSelection);
        topClosedParent?$setSelectedItem(this$static, topClosedParent):this$static.curSelection.open_0?$getChildCount(this$static.curSelection) > 0 && $setSelectedItem(this$static, $getChild_0(this$static.curSelection, 0)):$setState(this$static.curSelection, true, true);
        break;
      }

    default:{
        return;
      }

  }
}

function $maybeCollapseTreeItem(this$static){
  var parent_0, topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, this$static.curSelection);
  if (topClosedParent) {
    $setSelectedItem(this$static, topClosedParent);
  }
   else if (this$static.curSelection.open_0) {
    $setState(this$static.curSelection, false, true);
  }
   else {
    parent_0 = this$static.curSelection.parent_0;
    !!parent_0 && $setSelectedItem(this$static, parent_0);
  }
}

function $maybeUpdateSelection(this$static, itemThatChangedState, isItemOpening){
  var tempItem;
  if (!isItemOpening) {
    tempItem = this$static.curSelection;
    while (tempItem) {
      if (tempItem == itemThatChangedState) {
        $setSelectedItem(this$static, itemThatChangedState);
        return;
      }
      tempItem = tempItem.parent_0;
    }
  }
}

function $moveFocus(this$static){
  var containerLeft, containerTop, height, left, selectedElem, top_0, width_0;
  if (this$static.scrollOnSelectEnabled) {
    selectedElem = this$static.curSelection.contentElem;
    containerLeft = $getAbsoluteLeft(($clinit_DOM() , this$static.element));
    containerTop = $getAbsoluteTop(this$static.element);
    left = $getAbsoluteLeftImpl($getViewportElement(selectedElem.ownerDocument), selectedElem) - containerLeft;
    top_0 = $getAbsoluteTopImpl($getViewportElement(selectedElem.ownerDocument), selectedElem) - containerTop;
    width_0 = parseInt(selectedElem['offsetWidth']) | 0;
    height = parseInt(selectedElem['offsetHeight']) | 0;
    if (width_0 == 0 || height == 0) {
      setIntStyleAttribute(this$static.focusable, 'left', 0);
      setIntStyleAttribute(this$static.focusable, 'top', 0);
      return;
    }
    this$static.focusable.style['left'] = left + 'px';
    this$static.focusable.style['top'] = top_0 + 'px';
    this$static.focusable.style['width'] = width_0 + 'px';
    this$static.focusable.style['height'] = height + 'px';
    $scrollIntoView(this$static.focusable);
  }
  $updateAriaAttributes(this$static);
  ($clinit_FocusPanel() , this$static.focusable).focus();
}

function $moveSelectionDown(this$static, sel, dig){
  var idx, parent_0, topClosedParent;
  if (sel == this$static.root) {
    return;
  }
  topClosedParent = $getTopClosedParent(this$static, sel);
  if (topClosedParent) {
    $moveSelectionDown(this$static, topClosedParent, false);
    return;
  }
  parent_0 = sel.parent_0;
  !parent_0 && (parent_0 = this$static.root);
  idx = $getChildIndex_0(parent_0, sel);
  !dig || !sel.open_0?idx < $getChildCount(parent_0) - 1?$onSelection(this$static, $getChild_0(parent_0, idx + 1), true):$moveSelectionDown(this$static, parent_0, false):$getChildCount(sel) > 0 && $onSelection(this$static, $getChild_0(sel, 0), true);
}

function $moveSelectionUp(this$static, sel){
  var idx, parent_0, sibling, topClosedParent;
  topClosedParent = $getTopClosedParent(this$static, sel);
  if (topClosedParent) {
    $onSelection(this$static, topClosedParent, true);
    return;
  }
  parent_0 = sel.parent_0;
  !parent_0 && (parent_0 = this$static.root);
  idx = $getChildIndex_0(parent_0, sel);
  if (idx > 0) {
    sibling = $getChild_0(parent_0, idx - 1);
    $onSelection(this$static, $findDeepestOpenChild(this$static, sibling), true);
  }
   else {
    $onSelection(this$static, parent_0, true);
  }
}

function $onSelection(this$static, item_0, moveFocus){
  if (item_0 == this$static.root) {
    return;
  }
  !!this$static.curSelection && $setSelected(this$static.curSelection, false);
  this$static.curSelection = item_0;
  if (this$static.curSelection) {
    moveFocus && $moveFocus(this$static);
    $setSelected(this$static.curSelection, true);
  }
}

function $remove_0(this$static, w){
  var item_0;
  item_0 = castTo($get_0(this$static.childWidgets, w), 58);
  if (!item_0) {
    return false;
  }
  item_0.contentElem.innerHTML = '';
  return true;
}

function $removeItem(this$static, item_0){
  $removeItem_0(this$static.root, item_0);
}

function $setImages(this$static, images, useLeafImages){
  var image, size_0;
  this$static.images = images;
  this$static.useLeafImages = useLeafImages;
  if (!useLeafImages) {
    image = $createImage(images.treeLeaf);
    ($clinit_DOM() , image.element).style['visibility'] = 'hidden';
    $add_1(($clinit_RootPanel() , get_0()), image);
    size_0 = image.state.getWidth(image) + 7;
    $removeFromParent(image);
    this$static.indentValue = size_0 + 'px';
  }
}

function $setSelectedItem(this$static, item_0){
  if (!item_0) {
    if (!this$static.curSelection) {
      return;
    }
    $setSelected(this$static.curSelection, false);
    this$static.curSelection = null;
    return;
  }
  $onSelection(this$static, item_0, true);
}

function $showClosedImage(this$static, treeItem){
  $showImage(treeItem, this$static.images.treeClosed);
}

function $showImage(treeItem, proto){
  var child, holder;
  holder = (!!treeItem.imageHolder || $convertToFullNode(treeItem) , treeItem.imageHolder);
  child = ($clinit_DOM() , $getFirstChildElement(holder));
  !child?$appendChild(holder, resolve($createStructure(proto.url_0, proto.left_0, proto.top_0, proto.width_0, proto.height_0))):($adjust(child, proto.url_0, proto.left_0, proto.top_0, proto.width_0, proto.height_0) , undefined);
}

function $showLeafImage(this$static, treeItem){
  this$static.useLeafImages || !!treeItem.imageHolder?$showImage(treeItem, this$static.images.treeLeaf):(($clinit_DOM() , treeItem.element).style['paddingLeft'] = this$static.indentValue , undefined);
}

function $showOpenImage(this$static, treeItem){
  $showImage(treeItem, this$static.images.treeOpen);
}

function $updateAriaAttributes(this$static){
  var curSelectionContentElem, curSelectionIndex, curSelectionLevel, curSelectionParent, tempItem;
  curSelectionContentElem = this$static.curSelection.contentElem;
  curSelectionLevel = -1;
  tempItem = this$static.curSelection;
  while (tempItem) {
    tempItem = tempItem.parent_0;
    ++curSelectionLevel;
  }
  $clinit_Roles();
  $set_0(($clinit_Property() , LEVEL), curSelectionContentElem, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_3, 36, 0, [valueOf(curSelectionLevel + 1)]));
  curSelectionParent = this$static.curSelection.parent_0;
  !curSelectionParent && (curSelectionParent = this$static.root);
  $setAriaSetsizeProperty(curSelectionContentElem, $getChildCount(curSelectionParent));
  curSelectionIndex = $getChildIndex_0(curSelectionParent, this$static.curSelection);
  $set_0(POSINSET, curSelectionContentElem, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_3, 36, 0, [valueOf(curSelectionIndex + 1)]));
  $getChildCount(this$static.curSelection) == 0?$remove_1(($clinit_State() , EXPANDED), curSelectionContentElem):$setAriaExpandedState(curSelectionContentElem, ($clinit_ExpandedValue() , this$static.curSelection.open_0?TRUE:FALSE));
  $setAriaSelectedState(curSelectionContentElem, ($clinit_SelectedValue() , $clinit_SelectedValue() , TRUE_0));
  $setAriaActivedescendantProperty(this$static.focusable, new Id(curSelectionContentElem));
}

function shouldTreeDelegateFocusToElement(elem){
  var name_0 = elem.nodeName;
  return name_0 == 'SELECT' || name_0 == 'INPUT' || name_0 == 'TEXTAREA' || name_0 == 'OPTION' || name_0 == 'BUTTON' || name_0 == 'LABEL';
}

defineClass(293, 12, $intern_2);
_.doAttachChildren = function doAttachChildren_1(){
  try {
    tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
  }
   finally {
    $clinit_DOM();
    this.focusable.__listener = this;
  }
}
;
_.doDetachChildren = function doDetachChildren_1(){
  try {
    tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
  }
   finally {
    $clinit_DOM();
    this.focusable.__listener = null;
  }
}
;
_.iterator = function iterator_1(){
  var widgets;
  widgets = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 12, $size(this.childWidgets), 0, 1);
  $toArray(new AbstractMap$1(this.childWidgets), widgets);
  return new WidgetIterators$1(widgets, this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  var chain, e, eventType, item_0;
  eventType = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  switch (eventType) {
    case 128:
      {
        if (!this.curSelection) {
          $getChildCount(this.root) > 0 && $onSelection(this, $getChild_0(this.root, 0), true);
          $onBrowserEvent(this, event_0);
          return;
        }
      }

    case 256:
    case 512:
      if (!!event_0.altKey || !!event_0.metaKey) {
        $onBrowserEvent(this, event_0);
        return;
      }

  }
  switch (eventType) {
    case 1:
      {
        e = event_0.target;
        if (shouldTreeDelegateFocusToElement(e))
        ;
        else 
          !!this.curSelection && $isOrHasChild(this.curSelection.contentElem, e) && (($clinit_FocusPanel() , this.focusable).focus() , undefined);
        break;
      }

    case 4:
      {
        event_0.currentTarget == this.element && $eventGetButton(event_0) == 1 && $elementClicked(this, event_0.target);
        break;
      }

    case 128:
      {
        $keyboardNavigation(this, event_0);
        this.lastWasKeyDown = true;
        break;
      }

    case 256:
      {
        this.lastWasKeyDown || $keyboardNavigation(this, event_0);
        this.lastWasKeyDown = false;
        break;
      }

    case 512:
      {
        if ((event_0.keyCode | 0) == 9) {
          chain = new ArrayList;
          $collectElementChain(this, chain, this.element, event_0.target);
          item_0 = $findItemByChain(this, chain, 0, this.root);
          item_0 != this.curSelection && $setSelectedItem(this, item_0);
        }
        this.lastWasKeyDown = false;
        break;
      }

  }
  switch (eventType) {
    case 128:
    case 512:
      {
        if (isArrowKey(event_0.keyCode | 0)) {
          event_0.stopPropagation();
          event_0.preventDefault();
          return;
        }
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
  $updateStateRecursive(this.root);
}
;
_.remove = function remove_2(w){
  return $remove_0(this, w);
}
;
_.lastWasKeyDown = false;
_.scrollOnSelectEnabled = true;
_.useLeafImages = false;
var Lcom_google_gwt_user_client_ui_Tree_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Tree', 293);
function $addCompanyToTree(this$static, company){
  var companyItem;
  companyItem = new TreeItem;
  $addClassName(($clinit_DOM() , companyItem.element), 'gwt-TreeNode');
  $setText(companyItem, company.companyName);
  companyItem.userObject = company;
  $addItem(this$static.root, companyItem);
  $getDepartments(this$static.deviceTreeService, company.companyKey, this$static.getDepartmentListCallback);
}

function $addDepartmentsToTree(this$static, departments){
  var department, department$iterator, departmentItem, i, selItem;
  selItem = null;
  for (department$iterator = departments.iterator(); department$iterator.hasNext_0();) {
    department = castTo(department$iterator.next_1(), 91);
    for (i = 0; i < $getChildCount(this$static.root); i++) {
      if (instanceOf($getChild_0(this$static.root, i).userObject, 72)) {
        if ($equals(castTo($getChild_0(this$static.root, i).userObject, 72).companyKey, department.companyKey)) {
          departmentItem = new TreeItem;
          $addClassName(($clinit_DOM() , departmentItem.element), 'gwt-TreeNode');
          $setText(departmentItem, department.departmentName);
          departmentItem.userObject = department;
          $addItem($getChild_0(this$static.root, i), departmentItem);
          selItem = $getChild_0(this$static.root, i);
        }
      }
    }
  }
  $openSelectedItem(selItem);
}

function $addUnitsToTree(this$static, units){
  var d, departmentItem, i, j, selItem, unit, unit$iterator, unitItem;
  selItem = null;
  for (unit$iterator = units.iterator(); unit$iterator.hasNext_0();) {
    unit = castTo(unit$iterator.next_1(), 102);
    for (i = 0; i < $getChildCount(this$static.root); i++) {
      for (j = 0; j < $getChildCount($getChild_0(this$static.root, i)); j++) {
        departmentItem = $getChild_0($getChild_0(this$static.root, i), j);
        d = castTo($getChild_0($getChild_0(this$static.root, i), j).userObject, 91);
        if ($equals(d.departmentKey, unit.departmentKey)) {
          unitItem = new TreeItem;
          $addClassName(($clinit_DOM() , unitItem.element), 'gwt-TreeNode');
          $setText(unitItem, unit.unit);
          unitItem.userObject = unit;
          (!!unitItem.parent_0 || !!unitItem.tree) && (unitItem.parent_0?$removeItem_0(unitItem.parent_0, unitItem):!!unitItem.tree && $removeItem(unitItem.tree, unitItem));
          $insertItem(departmentItem, $getChildCount(departmentItem), unitItem);
          selItem = unitItem;
        }
      }
    }
  }
  $openSelectedItem(selItem);
}

function $openSelectedItem(selItem){
  var parent_0, state;
  if (selItem) {
    state = selItem.open_0;
    parent_0 = selItem.parent_0;
    $setSelectedItem(selItem.tree, parent_0);
    !!parent_0 && $setSelected(parent_0, false);
    $setState(selItem, !state, false);
  }
}

function DeviceTree(deviceTreeService){
  this.childWidgets = new HashMap;
  $init(this, new Tree$ImageAdapter);
  this.sessionStore = (!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0);
  this.deviceTreeService = deviceTreeService;
  this.getCompanyCallback = new DeviceTree$1(this);
  this.getDepartmentListCallback = new DeviceTree$2(this);
  new DeviceTree$3(this);
  $addClassName(($clinit_DOM() , this.element), 'gwt-Tree');
  $removeItems(this.root);
  $getCompany(this.deviceTreeService, $getItem(this.sessionStore.storage, 'Account'), this.getCompanyCallback);
}

defineClass(184, 293, $intern_2, DeviceTree);
var Lcom_elektrimasinad_aho_client_DeviceTree_2_classLit = createForClass('com.elektrimasinad.aho.client', 'DeviceTree', 184);
function $onSuccess(this$static, company){
  $addCompanyToTree(this$static.this$01, company);
}

function DeviceTree$1(this$0){
  this.this$01 = this$0;
}

defineClass(294, 1, {}, DeviceTree$1);
_.onSuccess = function onSuccess(company){
  $onSuccess(this, castTo(company, 72));
}
;
_.onFailure = function onFailure(caught){
}
;
var Lcom_elektrimasinad_aho_client_DeviceTree$1_2_classLit = createForClass('com.elektrimasinad.aho.client', 'DeviceTree/1', 294);
function $onSuccess_0(this$static, companies){
  $addDepartmentsToTree(this$static.this$01, companies);
}

function DeviceTree$2(this$0){
  this.this$01 = this$0;
}

defineClass(295, 1, {}, DeviceTree$2);
_.onSuccess = function onSuccess_0(companies){
  $onSuccess_0(this, castTo(companies, 14));
}
;
_.onFailure = function onFailure_0(caught){
}
;
var Lcom_elektrimasinad_aho_client_DeviceTree$2_2_classLit = createForClass('com.elektrimasinad.aho.client', 'DeviceTree/2', 295);
function $onSuccess_1(this$static, units){
  $addUnitsToTree(this$static.this$01, units);
}

function DeviceTree$3(this$0){
  this.this$01 = this$0;
}

defineClass(296, 1, {}, DeviceTree$3);
_.onSuccess = function onSuccess_1(units){
  $onSuccess_1(this, castTo(units, 14));
}
;
_.onFailure = function onFailure_1(caught){
  alert_0($toString_0(caught, caught.getMessage()));
}
;
var Lcom_elektrimasinad_aho_client_DeviceTree$3_2_classLit = createForClass('com.elektrimasinad.aho.client', 'DeviceTree/3', 296);
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $createStreamWriter(this$static){
  var clientSerializationStreamWriter;
  clientSerializationStreamWriter = new ClientSerializationStreamWriter(this$static.serializer, this$static.moduleBaseURL, this$static.serializationPolicyName);
  clientSerializationStreamWriter.objectCount = 0;
  $reset(clientSerializationStreamWriter.objectMap);
  $reset(clientSerializationStreamWriter.stringMap);
  clientSerializationStreamWriter.stringTable.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
  clientSerializationStreamWriter.encodeBuffer = new StringBuilder;
  $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL);
  $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName);
  return clientSerializationStreamWriter;
}

function $doInvoke(this$static, methodName, statsContext, requestData, callback){
  var ex, iex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 63)) {
      ex = $e0;
      iex = new InvocationException_0('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      callback.onFailure(iex);
    }
     else 
      throw toJs($e0);
  }
   finally {
    !!$stats && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw toJs(new ServiceDefTarget$NoServiceEntryPointSpecifiedException);
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext, callback);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish_1(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(moduleBaseURL, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + 'deviceTree';
  this.serializer = serializer;
  this.serializationPolicyName = '4BBC711B3ADDD850E871FB6F556F9A0F';
}

function getEncodedInstance(encodedResponse){
  if ($equals(encodedResponse.substr(0, 4), '//OK') || $equals(encodedResponse.substr(0, 4), '//EX')) {
    return encodedResponse.substr(4);
  }
  return encodedResponse;
}

defineClass(234, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 234);
function $clinit_DeviceTreeService_Proxy(){
  $clinit_DeviceTreeService_Proxy = emptyMethod;
  SERIALIZER = new DeviceTreeService_TypeSerializer;
}

function $getCompany(this$static, companyName, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getCompany');
  try {
    streamWriter = $start_0(helper);
    $append_0(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append_0(streamWriter, '' + $addString(streamWriter, companyName));
    $finish_2(helper, ($clinit_RequestCallbackAdapter$ResponseReader() , callback));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 68)) {
      ex = $e0;
      callback.onFailure(ex);
    }
     else 
      throw toJs($e0);
  }
}

function $getCompanyMaintenanceItems(this$static, companyKey, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getCompanyMaintenanceItems');
  try {
    streamWriter = $start_0(helper);
    $append_0(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append_0(streamWriter, '' + $addString(streamWriter, companyKey));
    $finish_2(helper, ($clinit_RequestCallbackAdapter$ResponseReader() , callback));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 68)) {
      ex = $e0;
      isEnabledFlag_ && (console.log('Maintenance Items error ' + ex) , undefined);
    }
     else 
      throw toJs($e0);
  }
}

function $getCompanyMeasurements(this$static, companyKey, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getCompanyMeasurements');
  try {
    streamWriter = $start_0(helper);
    $append_0(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append_0(streamWriter, '' + $addString(streamWriter, companyKey));
    $finish_2(helper, ($clinit_RequestCallbackAdapter$ResponseReader() , callback));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 68)) {
      ex = $e0;
      isEnabledFlag_ && (console.log('Measurement Items error ' + ex) , undefined);
    }
     else 
      throw toJs($e0);
  }
}

function $getDepartments(this$static, companyKeyString, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getDepartments');
  try {
    streamWriter = $start_0(helper);
    $append_0(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append_0(streamWriter, '' + $addString(streamWriter, companyKeyString));
    $finish_2(helper, ($clinit_RequestCallbackAdapter$ResponseReader() , callback));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 68))
      throw toJs($e0);
  }
}

function DeviceTreeService_Proxy(){
  $clinit_DeviceTreeService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(235, 234, {}, DeviceTreeService_Proxy);
var SERIALIZER;
var Lcom_elektrimasinad_aho_client_DeviceTreeService_1Proxy_2_classLit = createForClass('com.elektrimasinad.aho.client', 'DeviceTreeService_Proxy', 235);
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw toJs(new SerializationException(typeSignature));
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $getSerializationSignature(this$static, clazz){
  return this$static.signatureMapNative[getHashCode_1(clazz)];
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function $serialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $serialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function SerializerBase(methodMapNative, signatureMapNative){
  new HashMap;
  this.methodMapNative = methodMapNative;
  this.signatureMapNative = signatureMapNative;
}

defineClass(307, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 307);
function $clinit_DeviceTreeService_TypeSerializer(){
  $clinit_DeviceTreeService_TypeSerializer = emptyMethod;
  methodMapNative_0 = loadMethodsNative();
  signatureMapNative_0 = loadSignaturesNative();
}

function DeviceTreeService_TypeSerializer(){
  $clinit_DeviceTreeService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0, signatureMapNative_0);
}

function loadMethodsNative(){
  var result = {};
  result['com.elektrimasinad.aho.shared.Company/3544942848'] = [instantiate_0, deserialize_0, serialize];
  result['[Lcom.elektrimasinad.aho.shared.Company;/163771275'] = [instantiate, deserialize];
  result['com.elektrimasinad.aho.shared.Department/281546580'] = [instantiate_2, deserialize_2, serialize_0];
  result['[Lcom.elektrimasinad.aho.shared.Department;/3703158502'] = [instantiate_1, deserialize_1];
  result['com.elektrimasinad.aho.shared.Device/816138212'] = [instantiate_4, deserialize_4, serialize_2];
  result['[Lcom.elektrimasinad.aho.shared.Device;/2816344064'] = [instantiate_3, deserialize_3, serialize_1];
  result['com.elektrimasinad.aho.shared.MaintenanceItem/1813113922'] = [instantiate_6, deserialize_6, serialize_3];
  result['[Lcom.elektrimasinad.aho.shared.MaintenanceItem;/862417407'] = [instantiate_5, deserialize_5];
  result['com.elektrimasinad.aho.shared.Measurement/2852281694'] = [instantiate_8, deserialize_8, serialize_5];
  result['[Lcom.elektrimasinad.aho.shared.Measurement;/2205245786'] = [instantiate_7, deserialize_7, serialize_4];
  result['com.elektrimasinad.aho.shared.Raport/1862837682'] = [instantiate_10, deserialize_10, serialize_6];
  result['[Lcom.elektrimasinad.aho.shared.Raport;/2825098591'] = [instantiate_9, deserialize_9];
  result['com.elektrimasinad.aho.shared.Unit/14787366'] = [instantiate_12, deserialize_12, serialize_8];
  result['[Lcom.elektrimasinad.aho.shared.Unit;/2896684955'] = [instantiate_11, deserialize_11, serialize_7];
  result['com.google.gwt.i18n.shared.impl.DateRecord/3173882066'] = [instantiate_13, deserialize_13, serialize_9];
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_14, deserialize_14, serialize_10];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_15, deserialize_15];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_11];
  result['java.lang.Double/858496421'] = [instantiate_16, deserialize_16, serialize_12];
  result['java.lang.IllegalArgumentException/1755012560'] = [instantiate_17, deserialize_17];
  result['java.lang.Integer/3438268394'] = [instantiate_18, deserialize_18, serialize_13];
  result['java.lang.NumberFormatException/3305228476'] = [instantiate_19, deserialize_19];
  result['java.lang.String/2004016611'] = [instantiate_20, deserialize_21, serialize_15];
  result['java.sql.Date/730999118'] = [instantiate_21, deserialize_22, serialize_16];
  result['java.sql.Time/1816797103'] = [instantiate_22, deserialize_23, serialize_17];
  result['java.sql.Timestamp/3040052672'] = [instantiate_23, deserialize_24, serialize_18];
  result['java.util.ArrayList/4159755760'] = [instantiate_24, deserialize_25, serialize_19];
  result['java.util.Arrays$ArrayList/2507071751'] = [instantiate_25, deserialize_26, serialize_20];
  result['java.util.Collections$EmptyList/4157118744'] = [instantiate_26, deserialize_28, serialize_22];
  result['java.util.Collections$SingletonList/1586180994'] = [instantiate_27, deserialize_29, serialize_23];
  result['java.util.Date/3385151746'] = [instantiate_28, deserialize_30, serialize_24];
  result['java.util.LinkedList/3953877921'] = [instantiate_29, deserialize_31, serialize_25];
  result['java.util.Stack/1346942793'] = [instantiate_30, deserialize_32, serialize_26];
  result['java.util.Vector/3057315478'] = [instantiate_31, deserialize_33, serialize_27];
  return result;
}

function loadSignaturesNative(){
  var result = [];
  result[getObjectIdentityHashCode(Lcom_elektrimasinad_aho_shared_Company_2_classLit)] = 'com.elektrimasinad.aho.shared.Company/3544942848';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Lcom_elektrimasinad_aho_shared_Company_2_classLit, 1))] = '[Lcom.elektrimasinad.aho.shared.Company;/163771275';
  result[getObjectIdentityHashCode(Lcom_elektrimasinad_aho_shared_Department_2_classLit)] = 'com.elektrimasinad.aho.shared.Department/281546580';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Lcom_elektrimasinad_aho_shared_Department_2_classLit, 1))] = '[Lcom.elektrimasinad.aho.shared.Department;/3703158502';
  result[getObjectIdentityHashCode(Lcom_elektrimasinad_aho_shared_Device_2_classLit)] = 'com.elektrimasinad.aho.shared.Device/816138212';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Lcom_elektrimasinad_aho_shared_Device_2_classLit, 1))] = '[Lcom.elektrimasinad.aho.shared.Device;/2816344064';
  result[getObjectIdentityHashCode(Lcom_elektrimasinad_aho_shared_MaintenanceItem_2_classLit)] = 'com.elektrimasinad.aho.shared.MaintenanceItem/1813113922';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Lcom_elektrimasinad_aho_shared_MaintenanceItem_2_classLit, 1))] = '[Lcom.elektrimasinad.aho.shared.MaintenanceItem;/862417407';
  result[getObjectIdentityHashCode(Lcom_elektrimasinad_aho_shared_Measurement_2_classLit)] = 'com.elektrimasinad.aho.shared.Measurement/2852281694';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Lcom_elektrimasinad_aho_shared_Measurement_2_classLit, 1))] = '[Lcom.elektrimasinad.aho.shared.Measurement;/2205245786';
  result[getObjectIdentityHashCode(Lcom_elektrimasinad_aho_shared_Raport_2_classLit)] = 'com.elektrimasinad.aho.shared.Raport/1862837682';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Lcom_elektrimasinad_aho_shared_Raport_2_classLit, 1))] = '[Lcom.elektrimasinad.aho.shared.Raport;/2825098591';
  result[getObjectIdentityHashCode(Lcom_elektrimasinad_aho_shared_Unit_2_classLit)] = 'com.elektrimasinad.aho.shared.Unit/14787366';
  result[getObjectIdentityHashCode(getClassLiteralForArray(Lcom_elektrimasinad_aho_shared_Unit_2_classLit, 1))] = '[Lcom.elektrimasinad.aho.shared.Unit;/2896684955';
  result[getObjectIdentityHashCode(Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit)] = 'com.google.gwt.i18n.shared.impl.DateRecord/3173882066';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getObjectIdentityHashCode(Ljava_lang_Double_2_classLit)] = 'java.lang.Double/858496421';
  result[getObjectIdentityHashCode(Ljava_lang_IllegalArgumentException_2_classLit)] = 'java.lang.IllegalArgumentException/1755012560';
  result[getObjectIdentityHashCode(Ljava_lang_Integer_2_classLit)] = 'java.lang.Integer/3438268394';
  result[getObjectIdentityHashCode(Ljava_lang_NumberFormatException_2_classLit)] = 'java.lang.NumberFormatException/3305228476';
  result[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getObjectIdentityHashCode(Ljava_sql_Date_2_classLit)] = 'java.sql.Date/730999118';
  result[getObjectIdentityHashCode(Ljava_sql_Time_2_classLit)] = 'java.sql.Time/1816797103';
  result[getObjectIdentityHashCode(Ljava_sql_Timestamp_2_classLit)] = 'java.sql.Timestamp/3040052672';
  result[getObjectIdentityHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getObjectIdentityHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751';
  result[getObjectIdentityHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744';
  result[getObjectIdentityHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994';
  result[getObjectIdentityHashCode(Ljava_util_Date_2_classLit)] = 'java.util.Date/3385151746';
  result[getObjectIdentityHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921';
  result[getObjectIdentityHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793';
  result[getObjectIdentityHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478';
  return result;
}

defineClass(308, 307, {}, DeviceTreeService_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_elektrimasinad_aho_client_DeviceTreeService_1TypeSerializer_2_classLit = createForClass('com.elektrimasinad.aho.client', 'DeviceTreeService_TypeSerializer', 308);
function $clinit_Hooldus(){
  $clinit_Hooldus = emptyMethod;
  deviceTreeService_1 = ($clinit_DeviceCard() , $clinit_DeviceCard() , deviceTreeService_0);
}

function $createNewDataTable2(this$static){
  var addressColumn, hooldusImage, idColumn, kommentaarColumn, lLabel, lastArg, lastArg0, markingA, markingColumn, markingH, markingPanel, measurements3, nameColumn, seadeColumn, sp, table, tableSelModel;
  this$static.tablePanel = new VerticalPanel;
  $setStyleName(this$static.tablePanel, 'aho-panel1 table2');
  $setWidth(this$static.tablePanel, '100%');
  lLabel = new Label('Diagnostika ja monitooring');
  ($clinit_DOM() , lLabel.element).className = 'backSaveLabel noPointer';
  hooldusImage = new Image_3('res/pikto-hooldus.png');
  hooldusImage.element.className = 'aho-hooldusImage';
  $addHandler(hooldusImage, new Hooldus$6(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  table = new CellTable;
  markingColumn = new Hooldus$7(new SafeHtmlCell);
  markingColumn.cellStyleNames = 'markingCell';
  $setColumnWidth(table, 0, '60px');
  $insertColumn(table, table.columns.array.length, markingColumn, null);
  nameColumn = new Hooldus$8;
  $insertColumn(table, table.columns.array.length, nameColumn, new TextHeader('Osakond'));
  addressColumn = new Hooldus$9;
  $insertColumn(table, table.columns.array.length, addressColumn, new TextHeader('\xFCksus'));
  idColumn = new Hooldus$10;
  $insertColumn(table, table.columns.array.length, idColumn, new TextHeader('ID.nr'));
  seadeColumn = new Hooldus$11;
  $insertColumn(table, table.columns.array.length, seadeColumn, new TextHeader('Seade'));
  kommentaarColumn = new Hooldus$12;
  $insertColumn(table, table.columns.array.length, kommentaarColumn, new TextHeader('Kommentaar'));
  tableSelModel = new SingleSelectionModel;
  $addSelectionChangeHandler(tableSelModel, new Hooldus$13(tableSelModel));
  $setSelectionModel(table.presenter, tableSelModel);
  measurements3 = castTo($reduce((lastArg0 = $filter($filter(this$static.measurements2.stream(), new Hooldus$lambda$0$Type), new Hooldus$lambda$1$Type) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_3, 71, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 14);
  $setRowCount(table, measurements3.size_1());
  table.element.style['width'] = '710px';
  $setTableLayoutFixed(table);
  $setRowData_0(table.presenter, measurements3);
  $add_0(this$static.tablePanel, lLabel);
  sp = new ScrollPanel(table);
  sp.element.style['width'] = '720px';
  sp.element.style['height'] = '200px';
  $add_0(this$static.tablePanel, sp);
  markingPanel = new AbsolutePanel;
  markingPanel.element.style['width'] = '100%';
  markingPanel.element.style['height'] = '50px';
  $add_2(markingPanel, getAHOImage('a', 14), 0, 5);
  $add_2(markingPanel, getAHOImage('h', 14), 0, 20);
  markingA = new Label('Alarm. Oluline k\xF5rvalekalle normist. Soovitatav tegevus');
  markingH = new Label('Hoiatus. T\xE4heldatav k\xF5rvalekalle normist. V\xE4lja selgitada p\xF5hjus v\xF5i j\xE4lgida arengut.');
  markingA.element.className = 'smallTextLabel';
  markingH.element.className = 'smallTextLabel';
  $add_2(markingPanel, markingA, 25, 5);
  $add_2(markingPanel, markingH, 25, 20);
  $add_0(this$static.tablePanel, markingPanel);
  isEnabledFlag_ && (console.log('ylemine valmis') , undefined);
  return this$static.tablePanel;
}

function $createNewPlannerTable2(this$static){
  var actionColumn, addressColumn, deviceColumn, idColumn, lLabel, lastArg, lastArg0, markingColumn, nameColumn, sp, table, tableSelModel;
  this$static.table2Panel = new VerticalPanel;
  lLabel = new Label('Planeeritavad tegevused');
  ($clinit_DOM() , lLabel.element).className = 'backSaveLabel noPointer';
  $add_0(this$static.table2Panel, lLabel);
  $setStyleName(this$static.table2Panel, 'aho-panel1 table center');
  $setWidth(this$static.table2Panel, '720px');
  table = new CellTable;
  this$static.maintenance2.sort_0(new Hooldus$14);
  markingColumn = new Hooldus$15(new SafeHtmlCell);
  markingColumn.cellStyleNames = 'markingCell';
  $setColumnWidth(table, 0, '60px');
  $insertColumn(table, table.columns.array.length, markingColumn, new TextHeader('Kuup'));
  nameColumn = new Hooldus$16;
  $insertColumn(table, table.columns.array.length, nameColumn, new TextHeader('Osakond'));
  addressColumn = new Hooldus$17;
  $insertColumn(table, table.columns.array.length, addressColumn, new TextHeader('\xDCksus'));
  idColumn = new Hooldus$18;
  $insertColumn(table, table.columns.array.length, idColumn, new TextHeader('ID.nr'));
  deviceColumn = new Hooldus$19;
  $insertColumn(table, table.columns.array.length, deviceColumn, new TextHeader('Seade'));
  actionColumn = new Hooldus$20;
  $insertColumn(table, table.columns.array.length, actionColumn, new TextHeader('Tegevus'));
  tableSelModel = new SingleSelectionModel;
  $addSelectionChangeHandler(tableSelModel, new Hooldus$21(tableSelModel));
  $setSelectionModel(table.presenter, tableSelModel);
  this$static.maintenance2 = castTo($reduce((lastArg0 = $filter(this$static.maintenance2.stream(), new Hooldus$lambda$2$Type) , of(new Collectors$21methodref$ctor$Type, new Collectors$20methodref$add$Type, new Collectors$lambda$21$Type, stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_3, 71, 0, [($clinit_Collector$Characteristics() , IDENTITY_FINISH)])) , lastArg0), (lastArg = new ArrayList , lastArg)), 14);
  $setRowCount(table, this$static.maintenance2.size_1());
  $setRowData(table, this$static.maintenance2);
  $setColumnWidth(table, 0, '80px');
  $setColumnWidth(table, 0, '35px');
  $setColumnWidth(table, 1, '35px');
  $setColumnWidth(table, 2, '35px');
  sp = new ScrollPanel(table);
  sp.element.style['width'] = '720px';
  sp.element.style['height'] = '200px';
  $add_0(this$static.table2Panel, sp);
  return this$static.table2Panel;
}

function $init_0(this$static){
  $createNewDataTable2(this$static);
  $createNewPlannerTable2(this$static);
  $add_3(this$static.contentPanel, this$static.tablePanel);
  $add_3(this$static.content2Panel, this$static.table2Panel);
  $showWidget(this$static.contentPanel, $getWidgetIndex(this$static.contentPanel, this$static.tablePanel));
  $showWidget(this$static.content2Panel, $getWidgetIndex(this$static.content2Panel, this$static.table2Panel));
  isEnabledFlag_ && (console.log('init valmis') , undefined);
}

function $onModuleLoad(this$static){
  var headerImage, headerPanel, navigationPanel, root, td, td0, td1;
  isEnabledFlag_ = true;
  isEnabledFlag_ && (console.log('Debug enabled') , undefined);
  this$static.sessionStore = (!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0);
  this$static.accountKey = $getItem(this$static.sessionStore.storage, 'Account');
  if (this$static.accountKey == null) {
    assign('/Login.html');
    return;
  }
  $wnd.location.href.indexOf('127.0.0.1') != -1?(this$static.isDevMode = true):(this$static.isDevMode = false);
  $getClientWidth($doc) < 1000;
  addResizeHandler(new Hooldus$1(this$static));
  navigationPanel = new HorizontalPanel;
  this$static.getCompanyCallback = new Hooldus$2(this$static, navigationPanel);
  this$static.getCompanyMaintenanceItemsCallback = new Hooldus$3(this$static);
  this$static.getCompanyMeasurementsCallback = new Hooldus$4(this$static);
  root = ($clinit_RootPanel() , get_0());
  ($clinit_DOM() , root.element).className = 'mainBackground2';
  $setSize(this$static.mainPanel, this$static.MAIN_WIDTH + 'px', '900px');
  $setStyleName(this$static.mainPanel, 'panelBackground b');
  headerImage = new Image_3('res/hes-symbol.jpg');
  headerImage.element.className = 'aho-headerImage';
  $addHandler(headerImage, new Hooldus$5(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  navigationPanel.element.className = 'aho-navigationPanel';
  $add_4(navigationPanel, headerImage);
  td0 = $getWidgetTd(navigationPanel, headerImage);
  !!td0 && (td0['width'] = '52px' , undefined);
  headerPanel = new AbsolutePanel;
  headerPanel.element.className = 'headerBackground';
  $add(headerPanel, navigationPanel, headerPanel.element);
  $add_0(this$static.mainPanel, headerPanel);
  this$static.contentPanel = new DeckPanel;
  $add_0(this$static.mainPanel, this$static.contentPanel);
  td1 = $getWidgetTd(this$static.mainPanel, this$static.contentPanel);
  !!td1 && (td1['height'] = '100%' , undefined);
  $setCellHorizontalAlignment_0(this$static.mainPanel, this$static.contentPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  this$static.content2Panel = new DeckPanel;
  $add_0(this$static.mainPanel, this$static.content2Panel);
  td = $getWidgetTd(this$static.mainPanel, this$static.content2Panel);
  !!td && (td['height'] = '100%' , undefined);
  $setCellHorizontalAlignment_0(this$static.mainPanel, this$static.content2Panel, ALIGN_CENTER);
  $add_1(root, this$static.mainPanel);
  this$static.devTree = new DeviceTree(deviceTreeService_1);
  $addClassName($getElement(this$static.devTree), 'gwt-Tree');
  $getCompany(deviceTreeService_1, $getItem(this$static.sessionStore.storage, 'Account'), this$static.getCompanyCallback);
  $updateWidgetSizes(this$static);
}

function $updateWidgetSizes(this$static){
  this$static.MAIN_WIDTH = 700;
  this$static.MAIN_WIDTH = $getClientWidth($doc);
  $setWidth(this$static.mainPanel, this$static.MAIN_WIDTH + 'px');
  $setHeight(this$static.mainPanel, $getClientHeight($doc) + 'px');
  $setWidth(this$static.contentPanel, this$static.CONTENT_WIDTH + 'px');
}

function Hooldus(){
  $clinit_Hooldus();
  this.CONTENT_WIDTH = round_int(this.MAIN_WIDTH * 0.9);
  new ArrayList;
  new ArrayList;
  new ArrayList;
  this.maintenance2 = new ArrayList;
  this.measurements2 = new ArrayList;
  this.mainPanel = new VerticalPanel;
  new VerticalPanel;
  new VerticalPanel;
  new ArrayList;
  new ArrayList;
}

defineClass(175, 1, {}, Hooldus);
_.CONTENT_WIDTH = 0;
_.MAIN_WIDTH = 900;
_.accountKey = null;
_.isDevMode = false;
var deviceTreeService_1;
var Lcom_elektrimasinad_aho_client_Hooldus_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus', 175);
function Hooldus$1(this$0){
  this.this$01 = this$0;
}

defineClass(178, 1, $intern_4, Hooldus$1);
_.onResize = function onResize(event_0){
  $getClientWidth($doc) < 1000;
  $updateWidgetSizes(this.this$01);
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$1_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/1', 178);
function Column(cell){
  this.cell = cell;
}

defineClass(23, 1, $intern_5);
_.getCell = function getCell(){
  return this.cell;
}
;
_.getFieldUpdater = function getFieldUpdater(){
  return this.fieldUpdater;
}
;
_.cellStyleNames = null;
var Lcom_google_gwt_user_cellview_client_Column_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'Column', 23);
function TextColumn(){
  Column.call(this, new TextCell);
}

defineClass(52, 23, $intern_5);
var Lcom_google_gwt_user_cellview_client_TextColumn_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'TextColumn', 52);
function Hooldus$10(){
  TextColumn.call(this);
}

defineClass(189, 52, $intern_5, Hooldus$10);
_.getValue = function getValue(object){
  return castTo(object, 40).deviceID;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$10_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/10', 189);
function Hooldus$11(){
  TextColumn.call(this);
}

defineClass(190, 52, $intern_5, Hooldus$11);
_.getValue = function getValue_0(object){
  return castTo(object, 40).deviceName;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$11_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/11', 190);
function Hooldus$12(){
  TextColumn.call(this);
}

defineClass(191, 52, $intern_5, Hooldus$12);
_.getValue = function getValue_1(object){
  return castTo(object, 40).comment;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$12_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/12', 191);
function Hooldus$13(val$tableSelModel){
  this.val$tableSelModel2 = val$tableSelModel;
}

defineClass(192, 1, $intern_6, Hooldus$13);
_.onSelectionChange = function onSelectionChange(arg0){
  var selectedItem;
  selectedItem = castTo($getSelectedObject(this.val$tableSelModel2), 40);
  assign('/DeviceCard.html?deviceKey=' + selectedItem.deviceKey + '&action=createPlannerItem&problemDescription=' + selectedItem.comment + '&DiagnosticKey=' + selectedItem.measurementKey);
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$13_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/13', 192);
function $compare(m1, m2){
  return m1.completionDate.compareTo_0(m2.completionDate);
}

function Hooldus$14(){
}

defineClass(195, 1, {}, Hooldus$14);
_.compare = function compare(m1, m2){
  return $compare(castTo(m1, 42), castTo(m2, 42));
}
;
_.equals_0 = function equals_0(other){
  return this === other;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$14_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/14', 195);
function $getValue(m){
  var d, dstr, now_0, taust, s;
  now_0 = new Date_0;
  d = m.completionDate;
  dstr = (s = '' , s += d.getDate_0() , s.length < 2 && (s = '0' + s) , s += '.' , d.getMonth_0() < 9?(s += '0' + (d.getMonth_0() + 1)):(s += d.getMonth_0() + 1) , s += '.' , s += d.getYear() + 1900 , s);
  d.compareTo_0(now_0) < 0 && (d.getDate_0() < now_0.jsdate.getDate() || d.getMonth_0() < now_0.jsdate.getMonth())?(taust = 'pink'):lt(d.getTime_0(), add_2(fromDouble_0(now_0.jsdate.getTime()), 86400000))?(taust = 'white'):(taust = 'lightblue');
  return $clinit_SafeHtmlUtils() , new SafeHtmlString("<span style='background-color: " + taust + "'>" + dstr + '<\/span>');
}

function Hooldus$15($anonymous0){
  Column.call(this, $anonymous0);
}

defineClass(196, 23, $intern_5, Hooldus$15);
_.getValue = function getValue_2(m){
  return $getValue(castTo(m, 42));
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$15_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/15', 196);
function Hooldus$16(){
  TextColumn.call(this);
}

defineClass(197, 52, $intern_5, Hooldus$16);
_.getValue = function getValue_3(object){
  return castTo(object, 42).departmentName;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$16_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/16', 197);
function Hooldus$17(){
  TextColumn.call(this);
}

defineClass(198, 52, $intern_5, Hooldus$17);
_.getValue = function getValue_4(object){
  return castTo(object, 42).unitName;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$17_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/17', 198);
function Hooldus$18(){
  TextColumn.call(this);
}

defineClass(199, 52, $intern_5, Hooldus$18);
_.getValue = function getValue_5(object){
  return castTo(object, 42).deviceID;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$18_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/18', 199);
function Hooldus$19(){
  TextColumn.call(this);
}

defineClass(200, 52, $intern_5, Hooldus$19);
_.getValue = function getValue_6(object){
  return castTo(object, 42).deviceName;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$19_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/19', 200);
function $onSuccess_2(this$static, arg0){
  var companyNameLabel, logoutButton;
  this$static.this$01.selectedCompany = arg0;
  companyNameLabel = new Label(this$static.this$01.selectedCompany.companyName);
  ($clinit_DOM() , companyNameLabel.element).className = 'companyLabel';
  logoutButton = new Button(new Hooldus$2$1(this$static));
  logoutButton.element.className = 'loginBtn';
  $add_4(this$static.val$navigationPanel2, companyNameLabel);
  $add_4(this$static.val$navigationPanel2, logoutButton);
  $getCompanyMaintenanceItems(($clinit_Hooldus() , deviceTreeService_1), $getItem(this$static.this$01.sessionStore.storage, 'Account'), this$static.this$01.getCompanyMaintenanceItemsCallback);
}

function Hooldus$2(this$0, val$navigationPanel){
  this.this$01 = this$0;
  this.val$navigationPanel2 = val$navigationPanel;
}

defineClass(180, 1, {}, Hooldus$2);
_.onSuccess = function onSuccess_2(arg0){
  $onSuccess_2(this, castTo(arg0, 72));
}
;
_.onFailure = function onFailure_2(arg0){
  $wnd.alert('failed');
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$2_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/2', 180);
function Hooldus$2$1(this$1){
  this.this$11 = this$1;
}

defineClass(204, 1, $intern_7, Hooldus$2$1);
_.onClick = function onClick(arg0){
  $clear(this.this$11.this$01.sessionStore.storage);
  assign('/Login.html');
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$2$1_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/2/1', 204);
function Hooldus$20(){
  TextColumn.call(this);
}

defineClass(201, 52, $intern_5, Hooldus$20);
_.getValue = function getValue_7(object){
  return castTo(object, 42).name_0;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$20_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/20', 201);
function Hooldus$21(val$tableSelModel){
  this.val$tableSelModel2 = val$tableSelModel;
}

defineClass(202, 1, $intern_6, Hooldus$21);
_.onSelectionChange = function onSelectionChange_0(arg0){
  var selectedItem;
  selectedItem = castTo($getSelectedObject(this.val$tableSelModel2), 42);
  assign('/DeviceCard.html?deviceKey=' + selectedItem.devKey + '&action=showPlannerItem&maintenanceCode=' + selectedItem.keyString);
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$21_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/21', 202);
function $onSuccess_3(this$static, items){
  this$static.this$01.maintenance2 = items;
  isEnabledFlag_ && (console.log('uued saabusid') , undefined);
  log_0(toString_8(this$static.this$01.maintenance2));
  $getCompanyMeasurements(($clinit_Hooldus() , deviceTreeService_1), $getItem(this$static.this$01.sessionStore.storage, 'Account'), this$static.this$01.getCompanyMeasurementsCallback);
}

function Hooldus$3(this$0){
  this.this$01 = this$0;
}

defineClass(181, 1, {}, Hooldus$3);
_.onSuccess = function onSuccess_3(items){
  $onSuccess_3(this, castTo(items, 14));
}
;
_.onFailure = function onFailure_3(caught){
  isEnabledFlag_ && (console.log('Maintenance Items error ' + caught) , undefined);
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$3_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/3', 181);
function $onSuccess_4(this$static, items){
  this$static.this$01.measurements2 = items;
  isEnabledFlag_ && (console.log('uued mootmised saabusid') , undefined);
  log_0(toString_8(this$static.this$01.measurements2));
  $init_0(this$static.this$01);
}

function Hooldus$4(this$0){
  this.this$01 = this$0;
}

defineClass(182, 1, {}, Hooldus$4);
_.onSuccess = function onSuccess_4(items){
  $onSuccess_4(this, castTo(items, 14));
}
;
_.onFailure = function onFailure_4(caught){
  isEnabledFlag_ && (console.log('Measurement Items error ' + caught) , undefined);
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$4_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/4', 182);
function Hooldus$5(this$0){
  this.this$01 = this$0;
}

defineClass(183, 1, $intern_7, Hooldus$5);
_.onClick = function onClick_0(event_0){
  this.this$01.isDevMode?assign($replace_0($wnd.location.href, 'index')):assign('/Index.html');
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$5_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/5', 183);
function Hooldus$6(this$0){
  this.this$01 = this$0;
}

defineClass(185, 1, $intern_7, Hooldus$6);
_.onClick = function onClick_1(event_0){
  this.this$01.isDevMode?assign($replace_0($wnd.location.href, 'DeviceCard')):assign('/DeviceCard.html');
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$6_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/6', 185);
function $getValue_0(object){
  if (object.marking == null) {
    return null;
  }
  if ($equals(object.marking, 'alarm')) {
    return $clinit_SafeHtmlUtils() , new SafeHtmlString($toString(getAHOImage('a', 24)));
  }
  if ($equals(object.marking, 'hoiatus')) {
    return $clinit_SafeHtmlUtils() , new SafeHtmlString($toString(getAHOImage('h', 24)));
  }
  return $clinit_SafeHtmlUtils() , new SafeHtmlString($toString(getAHOImage('o', 24)));
}

function Hooldus$7($anonymous0){
  Column.call(this, $anonymous0);
}

defineClass(186, 23, $intern_5, Hooldus$7);
_.getValue = function getValue_8(object){
  return $getValue_0(castTo(object, 40));
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$7_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/7', 186);
function Hooldus$8(){
  TextColumn.call(this);
}

defineClass(187, 52, $intern_5, Hooldus$8);
_.getValue = function getValue_9(object){
  return castTo(object, 40).departmentName;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$8_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/8', 187);
function Hooldus$9(){
  TextColumn.call(this);
}

defineClass(188, 52, $intern_5, Hooldus$9);
_.getValue = function getValue_10(object){
  return castTo(object, 40).unitName;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$9_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/9', 188);
function Hooldus$lambda$0$Type(){
}

defineClass(193, 1, {}, Hooldus$lambda$0$Type);
_.test_0 = function test_0(arg0){
  return $clinit_Hooldus() , castTo(arg0, 40).raportKey.length > 0;
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$lambda$0$Type_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/lambda$0$Type', 193);
function Hooldus$lambda$1$Type(){
}

defineClass(194, 1, {}, Hooldus$lambda$1$Type);
_.test_0 = function test_1(arg0){
  return $clinit_Hooldus() , ($equals(castTo(arg0, 40).marking, 'alarm') || $equals(castTo(arg0, 40).marking, 'hoiatus')) && !$equals(castTo(arg0, 40).status_0, 'archived');
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$lambda$1$Type_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/lambda$1$Type', 194);
function Hooldus$lambda$2$Type(){
}

defineClass(203, 1, {}, Hooldus$lambda$2$Type);
_.test_0 = function test_2(arg0){
  return $clinit_Hooldus() , !$equals(castTo(arg0, 42).type_0, 'done');
}
;
var Lcom_elektrimasinad_aho_client_Hooldus$lambda$2$Type_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Hooldus/lambda$2$Type', 203);
function Company(){
  this.locationList = new ArrayList;
}

defineClass(72, 1, {72:1, 3:1}, Company);
var Lcom_elektrimasinad_aho_shared_Company_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Company', 72);
function deserialize(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Company_2_classLit, $intern_3, 72, size_0, 0, 1);
}

function deserialize_0(streamReader, instance){
  setCompanyKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCompanyName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setLocationList(instance, castTo($readObject(streamReader), 14));
  setPassword(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUsername(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_0(streamReader){
  return new Company;
}

function serialize(streamWriter, instance){
  $writeString(streamWriter, instance.companyKey);
  $writeString(streamWriter, instance.companyName);
  $writeObject(streamWriter, instance.locationList);
  $writeString(streamWriter, instance.password);
  $writeString(streamWriter, instance.username);
}

function setCompanyKey(instance, value_0){
  instance.companyKey = value_0;
}

function setCompanyName(instance, value_0){
  instance.companyName = value_0;
}

function setLocationList(instance, value_0){
  instance.locationList = value_0;
}

function setPassword(instance, value_0){
  instance.password = value_0;
}

function setUsername(instance, value_0){
  instance.username = value_0;
}

function Department(){
  this.unitList = new ArrayList;
}

defineClass(91, 1, {91:1, 3:1}, Department);
_.companyKey = '';
_.departmentKey = '';
_.departmentName = '';
var Lcom_elektrimasinad_aho_shared_Department_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Department', 91);
function deserialize_1(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_1(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Department_2_classLit, $intern_3, 91, size_0, 0, 1);
}

function deserialize_2(streamReader, instance){
  setCompanyKey_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDepartmentKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDepartmentName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUnitList(instance, castTo($readObject(streamReader), 14));
}

function instantiate_2(streamReader){
  return new Department;
}

function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.companyKey);
  $writeString(streamWriter, instance.departmentKey);
  $writeString(streamWriter, instance.departmentName);
  $writeObject(streamWriter, instance.unitList);
}

function setCompanyKey_0(instance, value_0){
  instance.companyKey = value_0;
}

function setDepartmentKey(instance, value_0){
  instance.departmentKey = value_0;
}

function setDepartmentName(instance, value_0){
  instance.departmentName = value_0;
}

function setUnitList(instance, value_0){
  instance.unitList = value_0;
}

function Device(){
  this.locationKey = '';
  this.id_0 = '';
  this.deviceName = '';
  this.locationName = '';
  this.devicekWrpm = '';
  this.deviceType = '';
  this.deviceManufacturer = '';
  this.DElaager = '';
  this.DEsimmer = '';
  this.DEVtihend = '';
  this.DEnotes = '';
  this.NDElaager = '';
  this.NDEsimmer = '';
  this.NDEVtihend = '';
  this.NDEnotes = '';
  this.coupledDeviceName = '';
  this.coupledDeviceType = '';
  this.coupledDeviceManufacturer = '';
  this.MPlaager = '';
  this.MPsimmer = '';
  this.MPVtihend = '';
  this.MPnotes = '';
  this.TPlaager = '';
  this.TPsimmer = '';
  this.TPVtihend = '';
  this.TPnotes = '';
  this.hasCoupledDevice = false;
}

defineClass(119, 1, {119:1, 3:1}, Device);
_.deviceComment = '';
_.deviceNickname = 'El.mootor';
_.hasCoupledDevice = false;
var Lcom_elektrimasinad_aho_shared_Device_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Device', 119);
function deserialize_3(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_3(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Device_2_classLit, $intern_3, 119, size_0, 0, 1);
}

function serialize_1(streamWriter, instance){
  serialize_14(streamWriter, instance);
}

function deserialize_4(streamReader, instance){
  setDEVtihend(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDElaager(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDEnotes(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDEsimmer(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMPVtihend(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMPlaager(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMPnotes(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMPsimmer(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNDEVtihend(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNDElaager(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNDEnotes(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNDEsimmer(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTPVtihend(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTPlaager(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTPnotes(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTPsimmer(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCoupledDeviceComment(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCoupledDeviceManufacturer(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCoupledDeviceName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCoupledDeviceType(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDepartmentName_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceComment(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceManufacturer(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceNickname(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceType(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDevicekWrpm(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  instance.hasCoupledDevice = $readBoolean(streamReader);
  setId(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setLocationKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setLocationName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUnitName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_4(streamReader){
  return new Device;
}

function serialize_2(streamWriter, instance){
  $writeString(streamWriter, instance.DEVtihend);
  $writeString(streamWriter, instance.DElaager);
  $writeString(streamWriter, instance.DEnotes);
  $writeString(streamWriter, instance.DEsimmer);
  $writeString(streamWriter, instance.MPVtihend);
  $writeString(streamWriter, instance.MPlaager);
  $writeString(streamWriter, instance.MPnotes);
  $writeString(streamWriter, instance.MPsimmer);
  $writeString(streamWriter, instance.NDEVtihend);
  $writeString(streamWriter, instance.NDElaager);
  $writeString(streamWriter, instance.NDEnotes);
  $writeString(streamWriter, instance.NDEsimmer);
  $writeString(streamWriter, instance.TPVtihend);
  $writeString(streamWriter, instance.TPlaager);
  $writeString(streamWriter, instance.TPnotes);
  $writeString(streamWriter, instance.TPsimmer);
  $writeString(streamWriter, instance.coupledDeviceComment);
  $writeString(streamWriter, instance.coupledDeviceManufacturer);
  $writeString(streamWriter, instance.coupledDeviceName);
  $writeString(streamWriter, instance.coupledDeviceType);
  $writeString(streamWriter, instance.departmentName);
  $writeString(streamWriter, instance.deviceComment);
  $writeString(streamWriter, instance.deviceKey);
  $writeString(streamWriter, instance.deviceManufacturer);
  $writeString(streamWriter, instance.deviceName);
  $writeString(streamWriter, instance.deviceNickname);
  $writeString(streamWriter, instance.deviceType);
  $writeString(streamWriter, instance.devicekWrpm);
  $append_0(streamWriter, instance.hasCoupledDevice?'1':'0');
  $writeString(streamWriter, instance.id_0);
  $writeString(streamWriter, instance.locationKey);
  $writeString(streamWriter, instance.locationName);
  $writeString(streamWriter, instance.unitName);
}

function setCoupledDeviceComment(instance, value_0){
  instance.coupledDeviceComment = value_0;
}

function setCoupledDeviceManufacturer(instance, value_0){
  instance.coupledDeviceManufacturer = value_0;
}

function setCoupledDeviceName(instance, value_0){
  instance.coupledDeviceName = value_0;
}

function setCoupledDeviceType(instance, value_0){
  instance.coupledDeviceType = value_0;
}

function setDEVtihend(instance, value_0){
  instance.DEVtihend = value_0;
}

function setDElaager(instance, value_0){
  instance.DElaager = value_0;
}

function setDEnotes(instance, value_0){
  instance.DEnotes = value_0;
}

function setDEsimmer(instance, value_0){
  instance.DEsimmer = value_0;
}

function setDepartmentName_0(instance, value_0){
  instance.departmentName = value_0;
}

function setDeviceComment(instance, value_0){
  instance.deviceComment = value_0;
}

function setDeviceKey(instance, value_0){
  instance.deviceKey = value_0;
}

function setDeviceManufacturer(instance, value_0){
  instance.deviceManufacturer = value_0;
}

function setDeviceName(instance, value_0){
  instance.deviceName = value_0;
}

function setDeviceNickname(instance, value_0){
  instance.deviceNickname = value_0;
}

function setDeviceType(instance, value_0){
  instance.deviceType = value_0;
}

function setDevicekWrpm(instance, value_0){
  instance.devicekWrpm = value_0;
}

function setId(instance, value_0){
  instance.id_0 = value_0;
}

function setLocationKey(instance, value_0){
  instance.locationKey = value_0;
}

function setLocationName(instance, value_0){
  instance.locationName = value_0;
}

function setMPVtihend(instance, value_0){
  instance.MPVtihend = value_0;
}

function setMPlaager(instance, value_0){
  instance.MPlaager = value_0;
}

function setMPnotes(instance, value_0){
  instance.MPnotes = value_0;
}

function setMPsimmer(instance, value_0){
  instance.MPsimmer = value_0;
}

function setNDEVtihend(instance, value_0){
  instance.NDEVtihend = value_0;
}

function setNDElaager(instance, value_0){
  instance.NDElaager = value_0;
}

function setNDEnotes(instance, value_0){
  instance.NDEnotes = value_0;
}

function setNDEsimmer(instance, value_0){
  instance.NDEsimmer = value_0;
}

function setTPVtihend(instance, value_0){
  instance.TPVtihend = value_0;
}

function setTPlaager(instance, value_0){
  instance.TPlaager = value_0;
}

function setTPnotes(instance, value_0){
  instance.TPnotes = value_0;
}

function setTPsimmer(instance, value_0){
  instance.TPsimmer = value_0;
}

function setUnitName(instance, value_0){
  instance.unitName = value_0;
}

function MaintenanceItem(){
  this.downtime = valueOf(0);
  this.timeSpent = valueOf(0);
  this.upload = valueOf(0);
}

defineClass(42, 1, {42:1, 3:1}, MaintenanceItem);
_.assignedTo = '';
_.connectedMeasurementKeyString = '';
_.deviceID = '';
_.problemDesc = '';
var Lcom_elektrimasinad_aho_shared_MaintenanceItem_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'MaintenanceItem', 42);
function deserialize_5(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_5(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_MaintenanceItem_2_classLit, $intern_3, 42, size_0, 0, 1);
}

function deserialize_6(streamReader, instance){
  setAssignedTo(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCompletionDate(instance, castTo($readObject(streamReader), 39));
  setConnectedMeasurementKeyString(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCost(instance, castToDouble($readObject(streamReader)));
  setDepartmentName_1(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDesc(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDevKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceID(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceName_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDowntime(instance, castTo($readObject(streamReader), 36));
  setInterval_0(instance, castTo($readObject(streamReader), 36));
  setKeyString(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMaterials(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNotes(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setProblemDesc(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTimeSpent(instance, castTo($readObject(streamReader), 36));
  setType(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUnitName_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUpload(instance, castTo($readObject(streamReader), 36));
}

function instantiate_6(streamReader){
  return new MaintenanceItem;
}

function serialize_3(streamWriter, instance){
  $writeString(streamWriter, instance.assignedTo);
  $writeObject(streamWriter, instance.completionDate);
  $writeString(streamWriter, instance.connectedMeasurementKeyString);
  $writeObject(streamWriter, instance.cost);
  $writeString(streamWriter, instance.departmentName);
  $writeString(streamWriter, instance.desc);
  $writeString(streamWriter, instance.devKey);
  $writeString(streamWriter, instance.deviceID);
  $writeString(streamWriter, instance.deviceName);
  $writeObject(streamWriter, instance.downtime);
  $writeObject(streamWriter, instance.interval);
  $writeString(streamWriter, instance.keyString);
  $writeString(streamWriter, instance.materials);
  $writeString(streamWriter, instance.name_0);
  $writeString(streamWriter, instance.notes);
  $writeString(streamWriter, instance.problemDesc);
  $writeObject(streamWriter, instance.timeSpent);
  $writeString(streamWriter, instance.type_0);
  $writeString(streamWriter, instance.unitName);
  $writeObject(streamWriter, instance.upload);
}

function setAssignedTo(instance, value_0){
  instance.assignedTo = value_0;
}

function setCompletionDate(instance, value_0){
  instance.completionDate = value_0;
}

function setConnectedMeasurementKeyString(instance, value_0){
  instance.connectedMeasurementKeyString = value_0;
}

function setCost(instance, value_0){
  instance.cost = value_0;
}

function setDepartmentName_1(instance, value_0){
  instance.departmentName = value_0;
}

function setDesc(instance, value_0){
  instance.desc = value_0;
}

function setDevKey(instance, value_0){
  instance.devKey = value_0;
}

function setDeviceID(instance, value_0){
  instance.deviceID = value_0;
}

function setDeviceName_0(instance, value_0){
  instance.deviceName = value_0;
}

function setDowntime(instance, value_0){
  instance.downtime = value_0;
}

function setInterval_0(instance, value_0){
  instance.interval = value_0;
}

function setKeyString(instance, value_0){
  instance.keyString = value_0;
}

function setMaterials(instance, value_0){
  instance.materials = value_0;
}

function setName(instance, value_0){
  instance.name_0 = value_0;
}

function setNotes(instance, value_0){
  instance.notes = value_0;
}

function setProblemDesc(instance, value_0){
  instance.problemDesc = value_0;
}

function setTimeSpent(instance, value_0){
  instance.timeSpent = value_0;
}

function setType(instance, value_0){
  instance.type_0 = value_0;
}

function setUnitName_0(instance, value_0){
  instance.unitName = value_0;
}

function setUpload(instance, value_0){
  instance.upload = value_0;
}

function Measurement(){
}

defineClass(40, 1, {40:1, 3:1}, Measurement);
_.DEcomment = '';
_.DEge = '';
_.DEmms = '';
_.MPcomment = '';
_.MPge = '';
_.MPmms = '';
_.NDEcomment = '';
_.NDEge = '';
_.NDEmms = '';
_.TPcomment = '';
_.TPge = '';
_.TPmms = '';
_.comment = '';
_.date = '';
_.departmentName = '';
_.deviceID = '';
_.deviceKey = '';
_.deviceName = '';
_.marking = '';
_.measurementKey = '';
_.raportID = '';
_.raportKey = '';
_.status_0 = '';
_.unitName = '';
var Lcom_elektrimasinad_aho_shared_Measurement_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Measurement', 40);
function deserialize_7(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_7(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Measurement_2_classLit, $intern_3, 40, size_0, 0, 1);
}

function serialize_4(streamWriter, instance){
  serialize_14(streamWriter, instance);
}

function deserialize_8(streamReader, instance){
  setDEcomment(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDEge(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDEmms(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMPcomment(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMPge(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMPmms(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNDEcomment(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNDEge(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNDEmms(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTPcomment(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTPge(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTPmms(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setComment(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDate(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDepartmentName_2(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceID_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceKey_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceName_1(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMarking(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMeasurementKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setRaportID(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setRaportKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setStatus(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUnitName_1(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_8(streamReader){
  return new Measurement;
}

function serialize_5(streamWriter, instance){
  $writeString(streamWriter, instance.DEcomment);
  $writeString(streamWriter, instance.DEge);
  $writeString(streamWriter, instance.DEmms);
  $writeString(streamWriter, instance.MPcomment);
  $writeString(streamWriter, instance.MPge);
  $writeString(streamWriter, instance.MPmms);
  $writeString(streamWriter, instance.NDEcomment);
  $writeString(streamWriter, instance.NDEge);
  $writeString(streamWriter, instance.NDEmms);
  $writeString(streamWriter, instance.TPcomment);
  $writeString(streamWriter, instance.TPge);
  $writeString(streamWriter, instance.TPmms);
  $writeString(streamWriter, instance.comment);
  $writeString(streamWriter, instance.date);
  $writeString(streamWriter, instance.departmentName);
  $writeString(streamWriter, instance.deviceID);
  $writeString(streamWriter, instance.deviceKey);
  $writeString(streamWriter, instance.deviceName);
  $writeString(streamWriter, instance.marking);
  $writeString(streamWriter, instance.measurementKey);
  $writeString(streamWriter, instance.raportID);
  $writeString(streamWriter, instance.raportKey);
  $writeString(streamWriter, instance.status_0);
  $writeString(streamWriter, instance.unitName);
}

function setComment(instance, value_0){
  instance.comment = value_0;
}

function setDEcomment(instance, value_0){
  instance.DEcomment = value_0;
}

function setDEge(instance, value_0){
  instance.DEge = value_0;
}

function setDEmms(instance, value_0){
  instance.DEmms = value_0;
}

function setDate(instance, value_0){
  instance.date = value_0;
}

function setDepartmentName_2(instance, value_0){
  instance.departmentName = value_0;
}

function setDeviceID_0(instance, value_0){
  instance.deviceID = value_0;
}

function setDeviceKey_0(instance, value_0){
  instance.deviceKey = value_0;
}

function setDeviceName_1(instance, value_0){
  instance.deviceName = value_0;
}

function setMPcomment(instance, value_0){
  instance.MPcomment = value_0;
}

function setMPge(instance, value_0){
  instance.MPge = value_0;
}

function setMPmms(instance, value_0){
  instance.MPmms = value_0;
}

function setMarking(instance, value_0){
  instance.marking = value_0;
}

function setMeasurementKey(instance, value_0){
  instance.measurementKey = value_0;
}

function setNDEcomment(instance, value_0){
  instance.NDEcomment = value_0;
}

function setNDEge(instance, value_0){
  instance.NDEge = value_0;
}

function setNDEmms(instance, value_0){
  instance.NDEmms = value_0;
}

function setRaportID(instance, value_0){
  instance.raportID = value_0;
}

function setRaportKey(instance, value_0){
  instance.raportKey = value_0;
}

function setStatus(instance, value_0){
  instance.status_0 = value_0;
}

function setTPcomment(instance, value_0){
  instance.TPcomment = value_0;
}

function setTPge(instance, value_0){
  instance.TPge = value_0;
}

function setTPmms(instance, value_0){
  instance.TPmms = value_0;
}

function setUnitName_1(instance, value_0){
  instance.unitName = value_0;
}

function Raport(){
  this.raportData = new ArrayList;
}

defineClass(120, 1, {120:1, 3:1}, Raport);
_.companyName = '';
_.date = '';
_.measurerName = '';
_.measurerPhone = '';
_.raportID = '';
_.raportKey = '';
_.unitKey = '';
_.unitName = '';
var Lcom_elektrimasinad_aho_shared_Raport_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Raport', 120);
function deserialize_9(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_9(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Raport_2_classLit, $intern_3, 120, size_0, 0, 1);
}

function deserialize_10(streamReader, instance){
  setCompanyName_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDate_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMeasurerName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMeasurerPhone(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setRaportData(instance, castTo($readObject(streamReader), 14));
  setRaportID_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setRaportKey_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUnitKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUnitName_2(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_10(streamReader){
  return new Raport;
}

function serialize_6(streamWriter, instance){
  $writeString(streamWriter, instance.companyName);
  $writeString(streamWriter, instance.date);
  $writeString(streamWriter, instance.measurerName);
  $writeString(streamWriter, instance.measurerPhone);
  $writeObject(streamWriter, instance.raportData);
  $writeString(streamWriter, instance.raportID);
  $writeString(streamWriter, instance.raportKey);
  $writeString(streamWriter, instance.unitKey);
  $writeString(streamWriter, instance.unitName);
}

function setCompanyName_0(instance, value_0){
  instance.companyName = value_0;
}

function setDate_0(instance, value_0){
  instance.date = value_0;
}

function setMeasurerName(instance, value_0){
  instance.measurerName = value_0;
}

function setMeasurerPhone(instance, value_0){
  instance.measurerPhone = value_0;
}

function setRaportData(instance, value_0){
  instance.raportData = value_0;
}

function setRaportID_0(instance, value_0){
  instance.raportID = value_0;
}

function setRaportKey_0(instance, value_0){
  instance.raportKey = value_0;
}

function setUnitKey(instance, value_0){
  instance.unitKey = value_0;
}

function setUnitName_2(instance, value_0){
  instance.unitName = value_0;
}

function Unit(){
  this.deviceList = new ArrayList;
}

defineClass(102, 1, {102:1, 3:1}, Unit);
var Lcom_elektrimasinad_aho_shared_Unit_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Unit', 102);
function deserialize_11(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_11(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Unit_2_classLit, $intern_3, 102, size_0, 0, 1);
}

function serialize_7(streamWriter, instance){
  serialize_14(streamWriter, instance);
}

function deserialize_12(streamReader, instance){
  setDepartmentKey_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDepartmentName_3(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceList(instance, castTo($readObject(streamReader), 14));
  setUnit(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUnitKey_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_12(streamReader){
  return new Unit;
}

function serialize_8(streamWriter, instance){
  $writeString(streamWriter, instance.departmentKey);
  $writeString(streamWriter, instance.departmentName);
  $writeObject(streamWriter, instance.deviceList);
  $writeString(streamWriter, instance.unit);
  $writeString(streamWriter, instance.unitKey);
}

function setDepartmentKey_0(instance, value_0){
  instance.departmentKey = value_0;
}

function setDepartmentName_3(instance, value_0){
  instance.departmentName = value_0;
}

function setDeviceList(instance, value_0){
  instance.deviceList = value_0;
}

function setUnit(instance, value_0){
  instance.unit = value_0;
}

function setUnitKey_0(instance, value_0){
  instance.unitKey = value_0;
}

function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.wasStarted && this$static.onComplete();
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate((1 + $wnd.Math.cos($intern_8 + progress * $intern_8)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation(){
  Animation_0.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(116, 1, {});
_.onComplete = function onComplete(){
  this.onUpdate((1 + $wnd.Math.cos(6.283185307179586)) / 2);
}
;
_.onStart = function onStart(){
  this.onUpdate((1 + $wnd.Math.cos($intern_8)) / 2);
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 116);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(231, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 231);
defineClass(530, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 530);
defineClass(124, 1, {124:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 124);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(414, 530, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 414);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(415, 124, {124:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 415);
function $cancelAnimationFrame(this$static, requestId){
  $remove_9(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {498:1, 3:1}, 125, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray_1(this$static.animationRequests, curAnimations), 498);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_9(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(416, 530, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_7(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 416);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException_0('must be non-negative'));
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(156, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 156);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(417, 156, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 417);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(125, 124, {124:1, 125:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 125);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(6, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 6);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(347, 6, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 347);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(346, 6, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 346);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(348, 6, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 348);
function $getAriaValue(this$static, value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_3($append_3(buf, this$static.getSingleValue(item_0)), ' ');
  }
  return $trim(buf.string);
}

function $remove_1(this$static, element){
  $removeAttribute(element, this$static.name_0);
}

function $set_0(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(this$static, values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(170, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 170);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(31, 170, {}, AriaValueAttribute);
_.getSingleValue = function getSingleValue(value_0){
  return castTo(value_0, 173).getAriaValue();
}
;
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 31);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(349, 6, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 349);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(350, 6, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 350);
function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(351, 6, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 351);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(352, 6, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 352);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(353, 6, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 353);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(354, 6, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 354);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(355, 6, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 355);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(356, 6, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 356);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(357, 6, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 357);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(358, 6, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 358);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(359, 6, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 359);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(360, 6, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 360);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(4, 1, {3:1, 5:1, 4:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, castTo(other, 4));
}
;
_.equals_0 = function equals_1(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode_1(this);
}
;
_.toString_0 = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 4);
function $clinit_ExpandedValue(){
  $clinit_ExpandedValue = emptyMethod;
  TRUE = new ExpandedValue('TRUE', 0);
  FALSE = new ExpandedValue('FALSE', 1);
  UNDEFINED = new ExpandedValue('UNDEFINED', 2);
}

function ExpandedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_ExpandedValue();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_ExpandedValue_2_classLit, 1), $intern_3, 82, 0, [TRUE, FALSE, UNDEFINED]);
}

defineClass(82, 4, {173:1, 82:1, 3:1, 5:1, 4:1}, ExpandedValue);
_.getAriaValue = function getAriaValue(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'undefined';
  }
  return null;
}
;
var FALSE, TRUE, UNDEFINED;
var Lcom_google_gwt_aria_client_ExpandedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'ExpandedValue', 82, Ljava_lang_Enum_2_classLit, values_0);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(361, 6, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 361);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(363, 6, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 363);
function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(362, 6, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 362);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(364, 6, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 364);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(365, 6, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 365);
function $init_1(this$static, elementId){
  this$static.id_0 = elementId;
}

function Id(element){
  $init_1(this, element.id);
}

defineClass(122, 1, {173:1, 122:1}, Id);
_.getAriaValue = function getAriaValue_0(){
  return this.id_0;
}
;
var Lcom_google_gwt_aria_client_Id_2_classLit = createForClass('com.google.gwt.aria.client', 'Id', 122);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(366, 6, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 366);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(367, 6, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 367);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(370, 6, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 370);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(368, 6, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 368);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(369, 6, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 369);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(371, 6, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 371);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(372, 6, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 372);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(373, 6, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 373);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(374, 6, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 374);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(379, 6, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 379);
function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(375, 6, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 375);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(378, 6, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 378);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(376, 6, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 376);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(377, 6, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 377);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(380, 6, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 380);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(381, 6, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 381);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(382, 6, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 382);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(383, 6, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 383);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(34, 170, {}, PrimitiveValueAttribute);
_.getSingleValue = function getSingleValue_0(value_0){
  return value_0 == null?'null':toString_8(value_0);
}
;
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 34);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(384, 6, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 384);
function $clinit_Property(){
  $clinit_Property = emptyMethod;
  ACTIVEDESCENDANT = new AriaValueAttribute('aria-activedescendant');
  new PrimitiveValueAttribute('aria-atomic');
  new AriaValueAttribute('aria-autocomplete');
  new AriaValueAttribute('aria-controls');
  new AriaValueAttribute('aria-describedby');
  new AriaValueAttribute('aria-dropeffect');
  new AriaValueAttribute('aria-flowto');
  new PrimitiveValueAttribute('aria-haspopup');
  new PrimitiveValueAttribute('aria-label');
  new AriaValueAttribute('aria-labelledby');
  LEVEL = new PrimitiveValueAttribute('aria-level');
  new AriaValueAttribute('aria-live');
  new PrimitiveValueAttribute('aria-multiline');
  new PrimitiveValueAttribute('aria-multiselectable');
  new AriaValueAttribute('aria-orientation');
  new AriaValueAttribute('aria-owns');
  POSINSET = new PrimitiveValueAttribute('aria-posinset');
  new PrimitiveValueAttribute('aria-readonly');
  new AriaValueAttribute('aria-relevant');
  new PrimitiveValueAttribute('aria-required');
  SETSIZE = new PrimitiveValueAttribute('aria-setsize');
  new AriaValueAttribute('aria-sort');
  new PrimitiveValueAttribute('aria-valuemax');
  new PrimitiveValueAttribute('aria-valuemin');
  new PrimitiveValueAttribute('aria-valuenow');
  new PrimitiveValueAttribute('aria-valuetext');
}

var ACTIVEDESCENDANT, LEVEL, POSINSET, SETSIZE;
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(386, 6, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 386);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(385, 6, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 385);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(387, 6, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 387);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  $putStringValue(ROLES_MAP, 'region', REGION);
  $putStringValue(ROLES_MAP, 'alert', ALERT);
  $putStringValue(ROLES_MAP, 'dialog', DIALOG);
  $putStringValue(ROLES_MAP, 'alertdialog', ALERTDIALOG);
  $putStringValue(ROLES_MAP, 'application', APPLICATION);
  $putStringValue(ROLES_MAP, 'document', DOCUMENT);
  $putStringValue(ROLES_MAP, 'article', ARTICLE);
  $putStringValue(ROLES_MAP, 'banner', BANNER);
  $putStringValue(ROLES_MAP, 'button', BUTTON);
  $putStringValue(ROLES_MAP, 'checkbox', CHECKBOX);
  $putStringValue(ROLES_MAP, 'gridcell', GRIDCELL);
  $putStringValue(ROLES_MAP, 'columnheader', COLUMNHEADER);
  $putStringValue(ROLES_MAP, 'group', GROUP);
  $putStringValue(ROLES_MAP, 'combobox', COMBOBOX);
  $putStringValue(ROLES_MAP, 'complementary', COMPLEMENTARY);
  $putStringValue(ROLES_MAP, 'contentinfo', CONTENTINFO);
  $putStringValue(ROLES_MAP, 'definition', DEFINITION);
  $putStringValue(ROLES_MAP, 'list', LIST);
  $putStringValue(ROLES_MAP, 'directory', DIRECTORY);
  $putStringValue(ROLES_MAP, 'form', FORM);
  $putStringValue(ROLES_MAP, 'grid', GRID);
  $putStringValue(ROLES_MAP, 'heading', HEADING);
  $putStringValue(ROLES_MAP, 'img', IMG);
  $putStringValue(ROLES_MAP, 'link', LINK);
  $putStringValue(ROLES_MAP, 'listbox', LISTBOX);
  $putStringValue(ROLES_MAP, 'listitem', LISTITEM);
  $putStringValue(ROLES_MAP, 'log', LOG);
  $putStringValue(ROLES_MAP, 'main', MAIN);
  $putStringValue(ROLES_MAP, 'marquee', MARQUEE);
  $putStringValue(ROLES_MAP, 'math', MATH);
  $putStringValue(ROLES_MAP, 'menu', MENU);
  $putStringValue(ROLES_MAP, 'menubar', MENUBAR);
  $putStringValue(ROLES_MAP, 'menuitem', MENUITEM);
  $putStringValue(ROLES_MAP, 'menuitemcheckbox', MENUITEMCHECKBOX);
  $putStringValue(ROLES_MAP, 'option', OPTION);
  $putStringValue(ROLES_MAP, 'radio', RADIO);
  $putStringValue(ROLES_MAP, 'menuitemradio', MENUITEMRADIO);
  $putStringValue(ROLES_MAP, 'navigation', NAVIGATION);
  $putStringValue(ROLES_MAP, 'note', NOTE);
  $putStringValue(ROLES_MAP, 'presentation', PRESENTATION);
  $putStringValue(ROLES_MAP, 'progressbar', PROGRESSBAR);
  $putStringValue(ROLES_MAP, 'radiogroup', RADIOGROUP);
  $putStringValue(ROLES_MAP, 'row', ROW);
  $putStringValue(ROLES_MAP, 'rowgroup', ROWGROUP);
  $putStringValue(ROLES_MAP, 'rowheader', ROWHEADER);
  $putStringValue(ROLES_MAP, 'search', SEARCH);
  $putStringValue(ROLES_MAP, 'separator', SEPARATOR);
  $putStringValue(ROLES_MAP, 'scrollbar', SCROLLBAR);
  $putStringValue(ROLES_MAP, 'slider', SLIDER);
  $putStringValue(ROLES_MAP, 'spinbutton', SPINBUTTON);
  $putStringValue(ROLES_MAP, 'status', STATUS);
  $putStringValue(ROLES_MAP, 'tab', TAB);
  $putStringValue(ROLES_MAP, 'tablist', TABLIST);
  $putStringValue(ROLES_MAP, 'tabpanel', TABPANEL);
  $putStringValue(ROLES_MAP, 'textbox', TEXTBOX);
  $putStringValue(ROLES_MAP, 'timer', TIMER);
  $putStringValue(ROLES_MAP, 'toolbar', TOOLBAR);
  $putStringValue(ROLES_MAP, 'tooltip', TOOLTIP);
  $putStringValue(ROLES_MAP, 'tree', TREE);
  $putStringValue(ROLES_MAP, 'treegrid', TREEGRID);
  $putStringValue(ROLES_MAP, 'treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(390, 6, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 390);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(388, 6, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 388);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(389, 6, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 389);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(391, 6, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 391);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(392, 6, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 392);
function $clinit_SelectedValue(){
  $clinit_SelectedValue = emptyMethod;
  TRUE_0 = new SelectedValue('TRUE', 0);
  FALSE_0 = new SelectedValue('FALSE', 1);
  UNDEFINED_0 = new SelectedValue('UNDEFINED', 2);
}

function SelectedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_SelectedValue();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_SelectedValue_2_classLit, 1), $intern_3, 83, 0, [TRUE_0, FALSE_0, UNDEFINED_0]);
}

defineClass(83, 4, {173:1, 83:1, 3:1, 5:1, 4:1}, SelectedValue);
_.getAriaValue = function getAriaValue_1(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'undefined';
  }
  return null;
}
;
var FALSE_0, TRUE_0, UNDEFINED_0;
var Lcom_google_gwt_aria_client_SelectedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'SelectedValue', 83, Ljava_lang_Enum_2_classLit, values_1);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(393, 6, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 393);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(394, 6, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 394);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(395, 6, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 395);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  EXPANDED = new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  new AriaValueAttribute('aria-pressed');
  SELECTED = new AriaValueAttribute('aria-selected');
}

var EXPANDED, SELECTED;
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(396, 6, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 396);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(399, 6, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 399);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(397, 6, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 397);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(398, 6, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 398);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(400, 6, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 400);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(401, 6, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 401);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(402, 6, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 402);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(403, 6, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 403);
function $setAriaActivedescendantProperty(element, value_0){
  $set_0(($clinit_Property() , ACTIVEDESCENDANT), element, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_Id_2_classLit, 1), $intern_3, 122, 0, [value_0]));
}

function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(406, 6, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 406);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(404, 6, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 404);
function $setAriaExpandedState(element, value_0){
  $set_0(($clinit_State() , EXPANDED), element, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_ExpandedValue_2_classLit, 1), $intern_3, 82, 0, [value_0]));
}

function $setAriaSelectedState(element, value_0){
  $set_0(($clinit_State() , SELECTED), element, stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_aria_client_SelectedValue_2_classLit, 1), $intern_3, 83, 0, [value_0]));
}

function $setAriaSetsizeProperty(element, value_0){
  $set_0(($clinit_Property() , SETSIZE), element, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Integer_2_classLit, 1), $intern_3, 36, 0, [valueOf(value_0)]));
}

function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(405, 6, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 405);
function $onBrowserEvent_0(event_0){
  var eventType;
  eventType = event_0.type;
  $equals('keydown', eventType) && (event_0.keyCode | 0) == 13 && undefined;
}

function AbstractCell(consumedEvents){
  var event_0, event$index, event$max, events;
  events = null;
  if (consumedEvents.length > 0) {
    events = new HashSet;
    for (event$index = 0 , event$max = consumedEvents.length; event$index < event$max; ++event$index) {
      event_0 = consumedEvents[event$index];
      $putStringValue(events.map_0, event_0, events);
    }
  }
  !!events && (this.consumedEvents = ($clinit_Collections() , new Collections$UnmodifiableSet(events)));
}

defineClass(169, 1, {});
var Lcom_google_gwt_cell_client_AbstractCell_2_classLit = createForClass('com.google.gwt.cell.client', 'AbstractCell', 169);
function $render(data_0, sb){
  data_0 != null && $render_1($render_2(castToString(data_0)), sb);
}

function AbstractSafeHtmlCell(renderer, consumedEvents){
  AbstractCell.call(this, consumedEvents);
  if (!renderer) {
    throw toJs(new IllegalArgumentException_0('renderer == null'));
  }
}

defineClass(443, 169, {});
_.render = function render(context, data_0, sb){
  $render(data_0, sb);
}
;
var Lcom_google_gwt_cell_client_AbstractSafeHtmlCell_2_classLit = createForClass('com.google.gwt.cell.client', 'AbstractSafeHtmlCell', 443);
function Cell$Context(index_0, column){
  Cell$Context_0.call(this, index_0, column, 0);
}

function Cell$Context_0(index_0, column, subindex){
  this.index_0 = index_0;
  this.column = column;
  this.subindex = subindex;
}

defineClass(85, 1, {}, Cell$Context, Cell$Context_0);
_.column = 0;
_.index_0 = 0;
_.subindex = 0;
var Lcom_google_gwt_cell_client_Cell$Context_2_classLit = createForClass('com.google.gwt.cell.client', 'Cell/Context', 85);
function $render_0(value_0, sb){
  !!value_0 && ($append_3(sb.sb, value_0.asString()) , sb);
}

function SafeHtmlCell(){
  AbstractCell.call(this, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
}

defineClass(131, 169, {}, SafeHtmlCell);
_.render = function render_0(context, value_0, sb){
  $render_0(castTo(value_0, 96), sb);
}
;
var Lcom_google_gwt_cell_client_SafeHtmlCell_2_classLit = createForClass('com.google.gwt.cell.client', 'SafeHtmlCell', 131);
function $render_1(value_0, sb){
  !!value_0 && ($append_3(sb.sb, value_0.html) , sb);
}

function TextCell(){
  AbstractSafeHtmlCell.call(this, (!instance_2 && (instance_2 = new SimpleSafeHtmlRenderer) , instance_2), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, []));
}

defineClass(137, 443, {}, TextCell);
var Lcom_google_gwt_cell_client_TextCell_2_classLit = createForClass('com.google.gwt.cell.client', 'TextCell', 137);
function $elapsedMillis(this$static){
  return now_1() - this$static.start_0;
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(121, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 121);
function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_3, 7, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  this$static.writetableStackTrace && this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState_0(!this$static.cause);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString_0(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(7, 1, {3:1, 7:1});
_.createError = function createError(msg){
  return new $wnd.Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_3(){
  return $toString_0(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 7);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(73, 7, {3:1, 7:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 73);
function RuntimeException(){
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

function RuntimeException_2(cause){
  this.detailMessage = !cause?null:$toString_0(cause, cause.getMessage());
  this.cause = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(8, 73, $intern_9, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8);
defineClass(112, 8, $intern_9);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 112);
defineClass(213, 112, $intern_9);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 213);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(castToJso(exception)):instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(castToJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_8(e);
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(66, 213, {66:1, 3:1, 8:1, 7:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 66);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function safeEval(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}

function throwIllegalArgumentException(message, data_0){
  throw toJs(new IllegalArgumentException_0(message + '\n' + data_0));
}

defineClass(500, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 500);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getModuleBaseURL(){
  $clinit_Impl();
  var key = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function reportToBrowser(e){
  $clinit_Impl();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 66)?castTo(e, 66).getThrown():e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(297, 500, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 297);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(298, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 298);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(299, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 299);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(515, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 515);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(214, 515, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 214);
defineClass(516, 515, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 516);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(215, 516, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 215);
function $html(this$static, html){
  $html_0(this$static.delegate_0, html);
  return this$static.returnBuilder;
}

defineClass(483, 1, {});
_.html_0 = function html_0(html){
  return $html(this, html);
}
;
_.isEndTagForbidden = false;
var Lcom_google_gwt_dom_builder_shared_AbstractElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'AbstractElementBuilderBase', 483);
defineClass(534, 1, {});
var Lcom_google_gwt_dom_builder_shared_ElementBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'ElementBuilderFactory', 534);
function $assertCanAddStylePropertyImpl(this$static){
  $assertStartTagOpen(this$static, 'Style properties cannot be added after appending HTML or adding a child element.');
  if (this$static.isStyleClosed) {
    throw toJs(new IllegalStateException_0('Style properties must be added at the same time. If you already added style properties, you cannot add more after adding non-style attributes.'));
  }
  if (!this$static.isStyleOpen) {
    this$static.isStyleOpen = true;
    $append_3(this$static.sb, ' style="');
  }
}

function $assertEndTagNotForbidden(this$static, operation){
  if ($peek(this$static.stack_0).builder.isEndTagForbidden) {
    throw toJs(new UnsupportedOperationException_0($peek(this$static.stack_0).tagName_0 + ' does not support ' + operation));
  }
}

function $assertStartTagOpen(this$static, message){
  if (!this$static.isStartTagOpen) {
    throw toJs(new IllegalStateException_0(message));
  }
}

function $assertValidTagName(tagName){
  if (!$test(HTML_TAG_REGEX, tagName)) {
    throw toJs(new IllegalArgumentException_0('The specified tag name is invalid: ' + tagName));
  }
}

function $end(this$static){
  $endImpl(this$static, $peek(this$static.stack_0).tagName_0);
}

function $end_0(this$static, tagName){
  var topItem;
  topItem = $peek(this$static.stack_0).tagName_0;
  if (!$equalsIgnoreCase(topItem, tagName)) {
    throw toJs(new IllegalStateException_0('Specified tag "' + tagName + '" does not match the current element "' + topItem + '"'));
  }
  $endImpl(this$static, topItem);
}

function $endAllTags(this$static){
  while (this$static.stack_0.top_0) {
    $endImpl(this$static, $peek(this$static.stack_0).tagName_0);
  }
}

function $endImpl(this$static, tagName){
  $maybeCloseStartTag(this$static);
  $peek(this$static.stack_0).builder.isEndTagForbidden?$append_3(this$static.sb, ' />'):$append_3($append_3($append_3(this$static.sb, '<\/'), tagName), '>');
  this$static.isStartTagOpen = false;
  this$static.isStyleClosed = true;
  $pop(this$static.stack_0);
  this$static.isHtmlOrTextAdded = false;
}

function $endStyle(this$static){
  if (!this$static.isStyleOpen) {
    throw toJs(new IllegalStateException_0("Attempting to close a style attribute, but the style attribute isn't open"));
  }
  $maybeCloseStyleAttribute(this$static);
}

function $html_0(this$static, html){
  $assertStartTagOpen(this$static, 'html cannot be set on an element that already contains other content or elements.');
  $maybeCloseStartTag(this$static);
  $assertEndTagNotForbidden(this$static, 'html');
  this$static.isHtmlOrTextAdded = true;
  $append_3(this$static.sb, html.html);
}

function $maybeCloseStartTag(this$static){
  $maybeCloseStyleAttribute(this$static);
  if (this$static.isStartTagOpen) {
    this$static.isStartTagOpen = false;
    $peek(this$static.stack_0).builder.isEndTagForbidden || $append_3(this$static.sb, '>');
  }
}

function $maybeCloseStyleAttribute(this$static){
  if (this$static.isStyleOpen) {
    this$static.isStyleOpen = false;
    this$static.isStyleClosed = true;
    $append_3(this$static.sb, '"');
  }
}

function $onStart(this$static, tagName, builder){
  if (this$static.isEmpty) {
    this$static.isEmpty = false;
  }
   else if (!this$static.stack_0.top_0) {
    throw toJs(new IllegalStateException_0('You can only build one top level element.'));
  }
   else {
    $assertEndTagNotForbidden(this$static, 'child elements');
    if ($peek(this$static.stack_0).builder.isEndTagForbidden) {
      throw toJs(new UnsupportedOperationException_0($peek(this$static.stack_0).tagName_0 + ' does not support child elements.'));
    }
  }
  if (this$static.isHtmlOrTextAdded) {
    throw toJs(new IllegalStateException_0('Cannot append an element after setting text of html.'));
  }
  $assertValidTagName(tagName);
  $maybeCloseStartTag(this$static);
  $push_1(this$static.stack_0, builder, tagName);
  this$static.isStartTagOpen = true;
  this$static.isStyleOpen = false;
  this$static.isStyleClosed = false;
  this$static.isHtmlOrTextAdded = false;
}

defineClass(485, 1, {});
_.isEmpty = true;
_.isHtmlOrTextAdded = false;
_.isStartTagOpen = false;
_.isStyleClosed = false;
_.isStyleOpen = false;
var HTML_TAG_REGEX;
var Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'ElementBuilderImpl', 485);
function $assertNotEmpty(this$static){
  if (!this$static.top_0) {
    throw toJs(new IllegalStateException_0('There are no elements on the stack.'));
  }
}

function $peek(this$static){
  $assertNotEmpty(this$static);
  return this$static.top_0;
}

function $pop(this$static){
  var toRet;
  $assertNotEmpty(this$static);
  toRet = this$static.top_0;
  this$static.top_0 = this$static.top_0.next_0;
  --this$static.size_0;
  return toRet;
}

function $push_1(this$static, builder, tagName){
  var node;
  node = new ElementBuilderImpl$StackNode(tagName, builder);
  node.next_0 = this$static.top_0;
  this$static.top_0 = node;
  ++this$static.size_0;
}

function ElementBuilderImpl$FastPeekStack(){
}

defineClass(487, 1, {}, ElementBuilderImpl$FastPeekStack);
_.size_0 = 0;
var Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$FastPeekStack_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'ElementBuilderImpl/FastPeekStack', 487);
function ElementBuilderImpl$StackNode(tagName, builder){
  this.builder = builder;
  this.tagName_0 = tagName;
}

defineClass(486, 1, {}, ElementBuilderImpl$StackNode);
var Lcom_google_gwt_dom_builder_shared_ElementBuilderImpl$StackNode_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'ElementBuilderImpl/StackNode', 486);
function HtmlBuilderFactory(){
}

defineClass(128, 534, {}, HtmlBuilderFactory);
var instance_1;
var Lcom_google_gwt_dom_builder_shared_HtmlBuilderFactory_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlBuilderFactory', 128);
function $asSafeHtml(this$static){
  $endAllTags(this$static);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString(this$static.sb.string);
}

function $attribute(this$static, name_0, value_0){
  $trustedAttribute(this$static, htmlEscape(name_0), value_0);
}

function $attribute_0(this$static, name_0, value_0){
  $trustedAttribute_0(this$static, htmlEscape(name_0), value_0);
}

function $startDiv(this$static){
  $trustedStart(this$static, 'div', this$static.divBuilder);
  return this$static.divBuilder;
}

function $startTD(this$static){
  $trustedStart(this$static, 'td', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTH(this$static){
  $trustedStart(this$static, 'th', this$static.tableCellBuilder);
  return this$static.tableCellBuilder;
}

function $startTR(this$static){
  $trustedStart(this$static, 'tr', this$static.tableRowBuilder);
  return this$static.tableRowBuilder;
}

function $startTableSection(this$static, tagName){
  !this$static.tableSectionBuilder && (this$static.tableSectionBuilder = new HtmlTableSectionBuilder(this$static));
  $trustedStart(this$static, tagName, this$static.tableSectionBuilder);
  return this$static.tableSectionBuilder;
}

function $styleProperty(this$static, style){
  $assertCanAddStylePropertyImpl(this$static);
  $append_3(this$static.sb, style.css);
  return this$static.stylesBuilder;
}

function $trustedAttribute(this$static, name_0, value_0){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_3($append_1($append_3($append_3($append_3(this$static.sb, ' '), name_0), '="'), value_0), '"');
}

function $trustedAttribute_0(this$static, name_0, value_0){
  $assertStartTagOpen(this$static, 'Attributes cannot be added after appending HTML or adding a child element.');
  $maybeCloseStyleAttribute(this$static);
  $append_3($append_3($append_3($append_3($append_3(this$static.sb, ' '), name_0), '="'), htmlEscape(value_0)), '"');
}

function $trustedStart(this$static, tagName, builder){
  $onStart(this$static, tagName, builder);
  $append_3($append_3(this$static.sb, '<'), tagName);
}

function HtmlBuilderImpl(){
  this.stack_0 = new ElementBuilderImpl$FastPeekStack;
  !HTML_TAG_REGEX && (HTML_TAG_REGEX = new RegExp('^[a-z][a-z0-9]*$', 'i'));
  this.divBuilder = new HtmlDivBuilder(this);
  new HtmlElementBuilder(this);
  new HtmlInputBuilder(this);
  new HtmlLIBuilder(this);
  new HtmlOptionBuilder(this);
  new HtmlSpanBuilder(this);
  this.stylesBuilder = new HtmlStylesBuilder(this);
  this.tableCellBuilder = new HtmlTableCellBuilder(this);
  this.tableRowBuilder = new HtmlTableRowBuilder(this);
  this.sb = new StringBuilder;
}

defineClass(129, 485, {}, HtmlBuilderImpl);
var Lcom_google_gwt_dom_builder_shared_HtmlBuilderImpl_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlBuilderImpl', 129);
function $attribute_1(this$static, name_0, value_0){
  $attribute(this$static.delegate, name_0, value_0);
  return this$static.returnBuilder;
}

function $className(this$static, className){
  return $trustedAttribute_0(this$static.delegate, 'class', className) , this$static.returnBuilder;
}

function HtmlElementBuilderBase(delegate){
  HtmlElementBuilderBase_0.call(this, delegate, false);
}

function HtmlElementBuilderBase_0(delegate, isEndTagForbidden){
  this.delegate_0 = delegate;
  this.isEndTagForbidden = isEndTagForbidden;
  this.returnBuilder = this;
  this.delegate = delegate;
}

defineClass(59, 483, {});
var Lcom_google_gwt_dom_builder_shared_HtmlElementBuilderBase_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlElementBuilderBase', 59);
function HtmlDivBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(489, 59, {}, HtmlDivBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlDivBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlDivBuilder', 489);
function HtmlElementBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(490, 59, {}, HtmlElementBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlElementBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlElementBuilder', 490);
function HtmlInputBuilder(delegate){
  HtmlElementBuilderBase_0.call(this, delegate, true);
}

defineClass(491, 59, {}, HtmlInputBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlInputBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlInputBuilder', 491);
function HtmlLIBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(492, 59, {}, HtmlLIBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlLIBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlLIBuilder', 492);
function HtmlOptionBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(493, 59, {}, HtmlOptionBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlOptionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlOptionBuilder', 493);
function HtmlSpanBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(494, 59, {}, HtmlSpanBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlSpanBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlSpanBuilder', 494);
function $marginTop(this$static, value_0){
  return $styleProperty(this$static.delegate, new SafeStylesString('margin-top:' + value_0 + 'px' + ';'));
}

function $paddingLeft(this$static, value_0){
  return $styleProperty(this$static.delegate, new SafeStylesString('padding-left:' + value_0 + 'px' + ';'));
}

function $paddingRight(this$static, value_0){
  return $styleProperty(this$static.delegate, new SafeStylesString('padding-right:' + value_0 + 'px' + ';'));
}

function $position(this$static, value_0){
  return $styleProperty(this$static.delegate, new SafeStylesString('position:' + value_0.getCssName() + ';'));
}

function $trustedProperty(this$static, name_0){
  name_0 = toHyphenatedForm(name_0);
  return $styleProperty(this$static.delegate, new SafeStylesString(name_0 + ':' + '1' + ';'));
}

function HtmlStylesBuilder(delegate){
  this.delegate = delegate;
}

function toHyphenatedForm(name_0){
  var hyphenated, matches, word;
  if (!camelCaseWord) {
    camelCaseMap = new HashMap;
    camelCaseWord = new RegExp('([A-Za-z])([^A-Z]*)', 'g');
    caseWord = new RegExp('[A-Z]([^A-Z]*)');
  }
  if (name_0.indexOf('-') != -1) {
    return name_0;
  }
  hyphenated = castToString($getStringValue(camelCaseMap, name_0));
  if (hyphenated == null) {
    hyphenated = '';
    while (matches = $exec(camelCaseWord, name_0)) {
      word = matches[0];
      if (!$exec(caseWord, word)) {
        hyphenated += '' + word;
      }
       else {
        hyphenated += '-' + $toLowerCase(matches[1], ($clinit_Locale() , ROOT));
        matches.length > 1 && (hyphenated += '' + matches[2]);
      }
    }
    $putStringValue(camelCaseMap, name_0, hyphenated);
  }
  return hyphenated;
}

defineClass(495, 1, {}, HtmlStylesBuilder);
var camelCaseMap, camelCaseWord, caseWord;
var Lcom_google_gwt_dom_builder_shared_HtmlStylesBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlStylesBuilder', 495);
function $colSpan(this$static, colSpan){
  return $trustedAttribute(this$static.delegate, 'colSpan', colSpan) , castTo(this$static.returnBuilder, 499);
}

function HtmlTableCellBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(496, 59, {499:1}, HtmlTableCellBuilder);
var Lcom_google_gwt_dom_builder_shared_HtmlTableCellBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlTableCellBuilder', 496);
function $html_1(){
  throw toJs(new UnsupportedOperationException_0('Table row elements do not support setting inner html or text. Use startTD/startTH() instead to append a table cell to the section.'));
}

function HtmlTableRowBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(488, 59, {}, HtmlTableRowBuilder);
_.html_0 = function html_1(html){
  return $html_1();
}
;
var Lcom_google_gwt_dom_builder_shared_HtmlTableRowBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlTableRowBuilder', 488);
function $html_2(){
  throw toJs(new UnsupportedOperationException_0('Table section elements do not support setting inner html or text. Use startTR() instead to append a table row to the section.'));
}

function HtmlTableSectionBuilder(delegate){
  HtmlElementBuilderBase.call(this, delegate);
}

defineClass(484, 59, {}, HtmlTableSectionBuilder);
_.html_0 = function html_2(html){
  return $html_2();
}
;
var Lcom_google_gwt_dom_builder_shared_HtmlTableSectionBuilder_2_classLit = createForClass('com.google.gwt.dom.builder.shared', 'HtmlTableSectionBuilder', 484);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $getChild(this$static, index_0){
  return this$static.childNodes[index_0];
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = this$static.className || '';
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function $getAbsoluteLeft(this$static){
  return $getAbsoluteLeftImpl($getViewportElement(this$static.ownerDocument), this$static);
}

function $getAbsoluteTop(this$static){
  return $getAbsoluteTopImpl($getViewportElement(this$static.ownerDocument), this$static);
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = this$static.className || '';
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $scrollIntoView(elem){
  var left = elem.offsetLeft, top_0 = elem.offsetTop;
  var width_0 = elem.offsetWidth, height = elem.offsetHeight;
  if (elem.parentNode != elem.offsetParent) {
    left -= elem.parentNode.offsetLeft;
    top_0 -= elem.parentNode.offsetTop;
  }
  var cur = elem.parentNode;
  while (cur && cur.nodeType == 1) {
    left < cur.scrollLeft && (cur.scrollLeft = left);
    left + width_0 > cur.scrollLeft + cur.clientWidth && (cur.scrollLeft = left + width_0 - cur.clientWidth);
    top_0 < cur.scrollTop && (cur.scrollTop = top_0);
    top_0 + height > cur.scrollTop + cur.clientHeight && (cur.scrollTop = top_0 + height - cur.clientHeight);
    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
    if (cur.parentNode != cur.offsetParent) {
      offsetLeft -= cur.parentNode.offsetLeft;
      offsetTop -= cur.parentNode.offsetTop;
    }
    left += offsetLeft - cur.scrollLeft;
    top_0 += offsetTop - cur.scrollTop;
    cur = cur.parentNode;
  }
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $eventGetRelatedTarget(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function $getAbsoluteLeftImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().left + viewport.scrollLeft | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenX - doc.getBoxObjectFor(doc.documentElement).screenX;
  }
}

function $getAbsoluteTopImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().top + viewport.scrollTop | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenY - doc.getBoxObjectFor(doc.documentElement).screenY;
  }
}

function $getScrollLeft(elem){
  var geckoVersion;
  geckoVersion = getGeckoVersion();
  if (!(geckoVersion != -1 && geckoVersion >= 1009000) && $isRTL(elem)) {
    return ((elem.scrollLeft || 0) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return (elem.scrollLeft || 0) | 0;
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $isRTL(elem){
  var style = elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  return style.direction == 'rtl';
}

function $setScrollLeft(elem, left){
  var geckoVersion;
  geckoVersion = getGeckoVersion();
  !(geckoVersion != -1 && geckoVersion >= 1009000) && $isRTL(elem) && (left += ((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  elem.scrollLeft = left;
}

function $toString_1(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function getGeckoVersion(){
  var result = /rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());
  if (result && result.length >= 3) {
    var version = parseInt(result[1]) * 1000000 + parseInt(result[2]) * 1000 + parseInt(result.length >= 5 && !isNaN(result[4])?result[4]:0);
    return version;
  }
  return -1;
}

function isGecko192OrBefore(){
  var geckoVersion;
  geckoVersion = getGeckoVersion();
  return geckoVersion != -1 && geckoVersion <= 1009002;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0) | 0;
}

function $getViewportElement(this$static){
  return $equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body;
}

function $setAlt(this$static, alt_0){
  this$static.alt = alt_0;
}

function $setHeight_0(this$static, height){
  this$static.height = height;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setWidth_0(this$static, width_0){
  this$static.width = width_0;
}

function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
  FLEX = new Style$Display$18;
  INLINE_FLEX = new Style$Display$19;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Display();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_3, 10, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL, FLEX, INLINE_FLEX]);
}

defineClass(10, 4, $intern_10);
var BLOCK, FLEX, INITIAL, INLINE, INLINE_BLOCK, INLINE_FLEX, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 10, Ljava_lang_Enum_2_classLit, values_2);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(251, 10, $intern_10, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 251, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(260, 10, $intern_10, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 260, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(261, 10, $intern_10, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 261, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(262, 10, $intern_10, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 262, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(263, 10, $intern_10, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 263, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(264, 10, $intern_10, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 264, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(265, 10, $intern_10, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 265, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(266, 10, $intern_10, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 266, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(267, 10, $intern_10, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 267, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$18(){
  Style$Display.call(this, 'FLEX', 17);
}

defineClass(268, 10, $intern_10, Style$Display$18);
var Lcom_google_gwt_dom_client_Style$Display$18_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/18', 268, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$19(){
  Style$Display.call(this, 'INLINE_FLEX', 18);
}

defineClass(269, 10, $intern_10, Style$Display$19);
var Lcom_google_gwt_dom_client_Style$Display$19_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/19', 269, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(252, 10, $intern_10, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 252, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(253, 10, $intern_10, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 253, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(254, 10, $intern_10, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 254, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(255, 10, $intern_10, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 255, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(256, 10, $intern_10, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 256, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(257, 10, $intern_10, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 257, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(258, 10, $intern_10, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 258, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(259, 10, $intern_10, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 259, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function $clinit_Style$OutlineStyle(){
  $clinit_Style$OutlineStyle = emptyMethod;
  NONE_0 = new Style$OutlineStyle$1;
  DASHED = new Style$OutlineStyle$2;
  DOTTED = new Style$OutlineStyle$3;
  DOUBLE = new Style$OutlineStyle$4;
  GROOVE = new Style$OutlineStyle$5;
  INSET = new Style$OutlineStyle$6;
  OUTSET = new Style$OutlineStyle$7;
  RIDGE = new Style$OutlineStyle$8;
  SOLID = new Style$OutlineStyle$9;
}

function Style$OutlineStyle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$OutlineStyle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, 1), $intern_3, 26, 0, [NONE_0, DASHED, DOTTED, DOUBLE, GROOVE, INSET, OUTSET, RIDGE, SOLID]);
}

defineClass(26, 4, $intern_11);
var DASHED, DOTTED, DOUBLE, GROOVE, INSET, NONE_0, OUTSET, RIDGE, SOLID;
var Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle', 26, Ljava_lang_Enum_2_classLit, values_3);
function Style$OutlineStyle$1(){
  Style$OutlineStyle.call(this, 'NONE', 0);
}

defineClass(270, 26, $intern_11, Style$OutlineStyle$1);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/1', 270, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function Style$OutlineStyle$2(){
  Style$OutlineStyle.call(this, 'DASHED', 1);
}

defineClass(271, 26, $intern_11, Style$OutlineStyle$2);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/2', 271, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function Style$OutlineStyle$3(){
  Style$OutlineStyle.call(this, 'DOTTED', 2);
}

defineClass(272, 26, $intern_11, Style$OutlineStyle$3);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/3', 272, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function Style$OutlineStyle$4(){
  Style$OutlineStyle.call(this, 'DOUBLE', 3);
}

defineClass(273, 26, $intern_11, Style$OutlineStyle$4);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/4', 273, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function Style$OutlineStyle$5(){
  Style$OutlineStyle.call(this, 'GROOVE', 4);
}

defineClass(274, 26, $intern_11, Style$OutlineStyle$5);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/5', 274, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function Style$OutlineStyle$6(){
  Style$OutlineStyle.call(this, 'INSET', 5);
}

defineClass(275, 26, $intern_11, Style$OutlineStyle$6);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/6', 275, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function Style$OutlineStyle$7(){
  Style$OutlineStyle.call(this, 'OUTSET', 6);
}

defineClass(276, 26, $intern_11, Style$OutlineStyle$7);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/7', 276, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function Style$OutlineStyle$8(){
  Style$OutlineStyle.call(this, 'RIDGE', 7);
}

defineClass(277, 26, $intern_11, Style$OutlineStyle$8);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/8', 277, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function Style$OutlineStyle$9(){
  Style$OutlineStyle.call(this, 'SOLID', 8);
}

defineClass(278, 26, $intern_11, Style$OutlineStyle$9);
var Lcom_google_gwt_dom_client_Style$OutlineStyle$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/OutlineStyle/9', 278, Lcom_google_gwt_dom_client_Style$OutlineStyle_2_classLit, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_3, 55, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(55, 4, $intern_12);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 55, Ljava_lang_Enum_2_classLit, values_4);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(279, 55, $intern_12, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 279, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(280, 55, $intern_12, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 280, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(281, 55, $intern_12, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 281, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(282, 55, $intern_12, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 282, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_3, 56, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(56, 4, $intern_13);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 56, Ljava_lang_Enum_2_classLit, values_5);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(283, 56, $intern_13, Style$Position$1);
_.getCssName = function getCssName(){
  return 'static';
}
;
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 283, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(284, 56, $intern_13, Style$Position$2);
_.getCssName = function getCssName_0(){
  return 'relative';
}
;
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 284, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(285, 56, $intern_13, Style$Position$3);
_.getCssName = function getCssName_1(){
  return 'absolute';
}
;
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 285, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(286, 56, $intern_13, Style$Position$4);
_.getCssName = function getCssName_2(){
  return 'fixed';
}
;
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 286, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$TableLayout(){
  $clinit_Style$TableLayout = emptyMethod;
  AUTO_0 = new Style$TableLayout$1;
  FIXED_0 = new Style$TableLayout$2;
}

function Style$TableLayout(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$TableLayout();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, 1), $intern_3, 81, 0, [AUTO_0, FIXED_0]);
}

defineClass(81, 4, $intern_14);
var AUTO_0, FIXED_0;
var Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TableLayout', 81, Ljava_lang_Enum_2_classLit, values_6);
function Style$TableLayout$1(){
  Style$TableLayout.call(this, 'AUTO', 0);
}

defineClass(287, 81, $intern_14, Style$TableLayout$1);
var Lcom_google_gwt_dom_client_Style$TableLayout$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TableLayout/1', 287, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null);
function Style$TableLayout$2(){
  Style$TableLayout.call(this, 'FIXED', 1);
}

defineClass(288, 81, $intern_14, Style$TableLayout$2);
var Lcom_google_gwt_dom_client_Style$TableLayout$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TableLayout/2', 288, Lcom_google_gwt_dom_client_Style$TableLayout_2_classLit, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$TextAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_3, 57, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(57, 4, $intern_15);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 57, Ljava_lang_Enum_2_classLit, values_7);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(289, 57, $intern_15, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 289, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(290, 57, $intern_15, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 290, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(291, 57, $intern_15, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 291, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(292, 57, $intern_15, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 292, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_3, 25, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(25, 4, $intern_16);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 25, Ljava_lang_Enum_2_classLit, values_8);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(242, 25, $intern_16, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 242, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(243, 25, $intern_16, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 243, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(244, 25, $intern_16, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 244, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(245, 25, $intern_16, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 245, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(246, 25, $intern_16, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 246, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(247, 25, $intern_16, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 247, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(248, 25, $intern_16, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 248, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(249, 25, $intern_16, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 249, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(250, 25, $intern_16, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 250, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_StyleInjector(){
  $clinit_StyleInjector = emptyMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtStart && (toReturn = maybeReturn);
    toInjectAtStart.length = 0;
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInject && (toReturn = maybeReturn);
    toInject.length = 0;
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , IMPL), css);
    !toInjectAtEnd && (toReturn = maybeReturn);
    toInjectAtEnd.length = 0;
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1(){
}

defineClass(482, 1, {}, StyleInjector$1);
_.execute_1 = function execute_3(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 482);
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = emptyMethod;
  IMPL = new StyleInjector$StyleInjectorImpl;
}

function $createElement(contents){
  var style;
  style = $doc.createElement('style');
  style['language'] = 'text/css';
  style.textContent = contents || '';
  return style;
}

function $getHead(this$static){
  var elt;
  if (!this$static.head) {
    elt = $doc.getElementsByTagName('head')[0];
    this$static.head = elt;
  }
  return this$static.head;
}

function $injectStyleSheet(this$static, contents){
  var style;
  style = $createElement(contents);
  $appendChild($getHead(this$static), style);
  return style;
}

function $injectStyleSheetAtStart(this$static, contents){
  var style;
  style = $createElement(contents);
  $insertBefore($getHead(this$static), style, this$static.head.firstChild);
  return style;
}

function StyleInjector$StyleInjectorImpl(){
}

defineClass(481, 1, {}, StyleInjector$StyleInjectorImpl);
var IMPL;
var Lcom_google_gwt_dom_client_StyleInjector$StyleInjectorImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/StyleInjectorImpl', 481);
function $setColSpan(this$static, colSpan){
  this$static.colSpan = colSpan;
}

defineClass(504, 1, {});
_.toString_0 = function toString_4(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 504);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(503, 504, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 503);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = castTo($unsafeGet(registered, nativeEvent.type), 14);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = castTo(type$iterator.next_1(), 74);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(523, 503, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 523);
defineClass(524, 523, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 524);
defineClass(525, 524, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 525);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(241, 525, {}, ClickEvent);
_.dispatch = function dispatch(handler){
  castTo(handler, 136).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 241);
defineClass(207, 1, {});
_.hashCode_0 = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_5(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 207);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(53, 207, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 53);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = castTo($unsafeGet(registered, eventName), 14);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(74, 53, {74:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 74);
function isArrowKey(code_0){
  switch (code_0) {
    case 40:
    case 39:
    case 38:
    case 37:
      return true;
    default:return false;
  }
}

function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(335, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 335);
defineClass(533, 524, {});
var impl;
var Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent', 533);
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('touchcancel', new TouchCancelEvent);
}

function TouchCancelEvent(){
}

defineClass(472, 533, {}, TouchCancelEvent);
_.dispatch = function dispatch_0(handler){
  $onTouchEnd(castTo(handler, 545).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchCancelEvent', 472);
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('touchend', new TouchEndEvent);
}

function TouchEndEvent(){
}

defineClass(471, 533, {}, TouchEndEvent);
_.dispatch = function dispatch_1(handler){
  $onTouchEnd(castTo(handler, 544).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEndEvent', 471);
function TouchEvent$TouchSupportDetector(){
  var elem;
  this.isSupported = (elem = document.createElement('div') , elem.setAttribute('ontouchstart', 'return;') , typeof elem.ontouchstart == 'function');
}

defineClass(469, 1, {}, TouchEvent$TouchSupportDetector);
_.isSupported = false;
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetector', 469);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('touchmove', new TouchMoveEvent);
}

function $dispatch(this$static, handler){
  $onTouchMove(handler.this$01, this$static);
}

function TouchMoveEvent(){
}

defineClass(470, 533, {}, TouchMoveEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch(this, castTo(handler, 543));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchMoveEvent', 470);
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('touchstart', new TouchStartEvent);
}

function $dispatch_0(this$static, handler){
  $onTouchStart(handler.this$01, this$static);
}

function TouchStartEvent(){
}

defineClass(468, 533, {}, TouchStartEvent);
_.dispatch = function dispatch_3(handler){
  $dispatch_0(this, castTo(handler, 542));
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchStartEvent', 468);
function $dispatch_1(this$static, handler){
  this$static.attached?$setupBustClickHandler(handler.this$01):$removeBustClickHandler(handler.this$01);
}

function AttachEvent(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_4) {
    event_0 = new AttachEvent(attached);
    !!source.handlerManager && $fireEvent_0(source.handlerManager, event_0);
  }
}

defineClass(340, 503, {}, AttachEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch_1(this, castTo(handler, 539));
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_4;
}
;
_.attached = false;
var TYPE_4;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 340);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_5) {
    event_0 = new CloseEvent_0;
    source.fireEvent(event_0);
  }
}

defineClass(339, 503, {}, CloseEvent_0);
_.dispatch = function dispatch_5(handler){
  castTo(handler, 535);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 339);
function ResizeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_6) {
    event_0 = new ResizeEvent;
    $fireEvent_0(source, event_0);
  }
}

defineClass(237, 503, {}, ResizeEvent);
_.dispatch = function dispatch_6(handler){
  castTo(handler, 205).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 237);
defineClass(532, 503, {});
_.dispatch = function dispatch_7(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 532);
function $addHandler_0(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent_0(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 79)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(80, 1, $intern_17, HandlerManager, HandlerManager_0);
_.fireEvent = function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 80);
defineClass(520, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 520);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_7(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(castTo(handler, 33));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 7)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put_0(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_1(handler);
  removed && l.isEmpty_0() && (sourceMap = castTo($get_0(this$static.map_0, type_0), 64) , castTo(sourceMap.remove_2(source), 14) , sourceMap.isEmpty_0() && $remove_5(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 64);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_0(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 14);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 64);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_0(source), 14);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = castTo($next_3(c$iterator), 497);
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(225, 520, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 225);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(226, 225, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 226);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(331, 1, {536:1}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 331);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty_0()?null:castTo(causes.iterator().next_1(), 7));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_1(), 7);
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_1(), 7);
    first?(first = false):(b.string += '; ' , b);
    $append_3(b, t.getMessage());
  }
  return b.string;
}

defineClass(79, 8, $intern_18, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 79);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(145, 79, $intern_18, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 145);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(this$static.callback, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw toJs(new NullPointerException);
  }
  if (!callback) {
    throw toJs(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(328, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 328);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(330, 156, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 330);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 66)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw toJs(requestPermissionException);
    }
     else 
      throw toJs($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 66)) {
      e = $e1;
      throw toJs(new RequestException(e.getMessage()));
    }
     else 
      throw toJs($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && $size(this$static.headers) > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers)).this$01); header$iterator.hasNext;) {
      header = $next_2(header$iterator);
      try {
        $setRequestHeader(xmlHttpRequest, castToString(header.getKey()), castToString(header.getValue_0()));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 66)) {
          e = $e0;
          throw toJs(new RequestException(e.getMessage()));
        }
         else 
          throw toJs($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(161, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 161);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(345, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 345);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(93, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_6(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 93);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(63, 73, $intern_19, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 63);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(411, 63, $intern_19, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 411);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(441, 63, $intern_19, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 441);
defineClass(527, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 527);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(329, 527, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 329);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw toJs(new IllegalArgumentException_0(name_0 + ' cannot be empty'));
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0(name_0 + ' cannot be null'));
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_HasDirection$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_3, 92, 0, [RTL, LTR, DEFAULT]);
}

defineClass(92, 4, {92:1, 3:1, 5:1, 4:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 92, Ljava_lang_Enum_2_classLit, values_9);
function $setTime(this$static, time){
  this$static.jsdate.setTime(toDouble_0(time));
}

function Date_0(){
  this.jsdate = new $wnd.Date;
}

function Date_1(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(39, 1, $intern_20, Date_0, Date_1);
_.compareTo = function compareTo_0(other){
  return this.compareTo_0(castTo(other, 39));
}
;
_.compareTo_0 = function compareTo_1(other){
  return compare_5(this.getTime_0(), other.getTime_0());
}
;
_.equals_0 = function equals_2(obj){
  return instanceOf(obj, 39) && eq(this.getTime_0(), castTo(obj, 39).getTime_0());
}
;
_.getDate_0 = function getDate(){
  return this.jsdate.getDate();
}
;
_.getMonth_0 = function getMonth(){
  return this.jsdate.getMonth();
}
;
_.getTime_0 = function getTime(){
  return fromDouble_0(this.jsdate.getTime());
}
;
_.getYear = function getYear(){
  return this.jsdate.getFullYear() - 1900;
}
;
_.hashCode_0 = function hashCode_3(){
  var time;
  return time = this.getTime_0() , toInt(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_7(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 39);
function DateRecord(){
  Date_0.call(this);
  this.era = -1;
  this.ambiguousYear = false;
  this.year = $intern_21;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.midnightIs24 = false;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = $intern_21;
}

defineClass(309, 39, $intern_20, DateRecord);
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.midnightIs24 = false;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
var Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl', 'DateRecord', 309);
function deserialize_13(streamReader, instance){
  setAmbiguousYear(instance, $readBoolean(streamReader));
  setAmpm(instance, streamReader.results[--streamReader.index_0]);
  setDayOfMonth(instance, streamReader.results[--streamReader.index_0]);
  setDayOfWeek(instance, streamReader.results[--streamReader.index_0]);
  setEra(instance, streamReader.results[--streamReader.index_0]);
  setHours(instance, streamReader.results[--streamReader.index_0]);
  setMidnightIs24(instance, $readBoolean(streamReader));
  setMilliseconds(instance, streamReader.results[--streamReader.index_0]);
  setMinutes(instance, streamReader.results[--streamReader.index_0]);
  setMonth(instance, streamReader.results[--streamReader.index_0]);
  setSeconds(instance, streamReader.results[--streamReader.index_0]);
  setTzOffset(instance, streamReader.results[--streamReader.index_0]);
  setYear(instance, streamReader.results[--streamReader.index_0]);
}

function instantiate_13(streamReader){
  return new DateRecord;
}

function serialize_9(streamWriter, instance){
  $writeBoolean(streamWriter, instance.ambiguousYear);
  $writeInt(streamWriter, instance.ampm);
  $writeInt(streamWriter, instance.dayOfMonth);
  $writeInt(streamWriter, instance.dayOfWeek);
  $writeInt(streamWriter, instance.era);
  $writeInt(streamWriter, instance.hours);
  $writeBoolean(streamWriter, instance.midnightIs24);
  $writeInt(streamWriter, instance.milliseconds);
  $writeInt(streamWriter, instance.minutes);
  $writeInt(streamWriter, instance.month);
  $writeInt(streamWriter, instance.seconds);
  $writeInt(streamWriter, instance.tzOffset);
  $writeInt(streamWriter, instance.year);
  $append_0(streamWriter, longToBase64(fromDouble_0(instance.jsdate.getTime())));
}

function setAmbiguousYear(instance, value_0){
  instance.ambiguousYear = value_0;
}

function setAmpm(instance, value_0){
  instance.ampm = value_0;
}

function setDayOfMonth(instance, value_0){
  instance.dayOfMonth = value_0;
}

function setDayOfWeek(instance, value_0){
  instance.dayOfWeek = value_0;
}

function setEra(instance, value_0){
  instance.era = value_0;
}

function setHours(instance, value_0){
  instance.hours = value_0;
}

function setMidnightIs24(instance, value_0){
  instance.midnightIs24 = value_0;
}

function setMilliseconds(instance, value_0){
  instance.milliseconds = value_0;
}

function setMinutes(instance, value_0){
  instance.minutes = value_0;
}

function setMonth(instance, value_0){
  instance.month = value_0;
}

function setSeconds(instance, value_0){
  instance.seconds = value_0;
}

function setTzOffset(instance, value_0){
  instance.tzOffset = value_0;
}

function setYear(instance, value_0){
  instance.year = value_0;
}

function canSet(array, value_0){
  var elementTypeCategory;
  switch (getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = getElementTypeCategory(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === 'function';
    case 12:
      return value_0 != null && (typeof value_0 === 'object' || typeof value_0 == 'function');
    case 0:
      return canCast(value_0, array.__elementTypeId$);
    case 2:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn);
    case 1:
      return isJsObjectOrFunction(value_0) && !(value_0.typeMarker === typeMarkerFn) || canCast(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function setCheck(array, index_0, value_0){
  checkCriticalArrayType(value_0 == null || canSet(array, value_0));
  return array[index_0] = value_0;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_22;
  a1 = value_0 >> 22 & $intern_22;
  a2 = value_0 < 0?$intern_23:0;
  return create0(a0, a1, a2);
}

function create_0(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException);
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_24 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_24 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare_0(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_24 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_22;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_22;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_23;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_25 + a.h * $intern_26;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_22;
  a.m = sum1 & $intern_22;
  a.h = sum2 & $intern_23;
  return true;
}

var remainder;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_22, sum1 & $intern_22, sum2 & $intern_23);
}

function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

function compare_0(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const() , ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_26) {
    a2 = round_int(value_0 / $intern_26);
    value_0 -= a2 * $intern_26;
  }
  a1 = 0;
  if (value_0 >= $intern_25) {
    a1 = round_int(value_0 / $intern_25);
    value_0 -= a1 * $intern_25;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_22;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_22;
  c2 += c1 >> 22;
  c1 &= $intern_22;
  c2 &= $intern_23;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_22;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_22;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_23;
  return create0(neg0, neg1, neg2);
}

function or(a, b){
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & $intern_22, res1 & $intern_22, res2 & $intern_23);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_24) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_23:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_23:0;
    res1 = negative?$intern_22:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_22, res1 & $intern_22, res2 & $intern_23);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_23;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return create0(res0 & $intern_22, res1 & $intern_22, res2 & $intern_23);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_22, sum1 & $intern_22, sum2 & $intern_23);
}

function toDouble(a){
  if (compare_0(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_25 + a.h * $intern_26;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_22, $intern_22, 524287);
  MIN_VALUE = create0(0, 0, $intern_24);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 7)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function add_2(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_27 < result && result < $intern_26) {
      return result;
    }
  }
  return createLongEmul(add_1(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function compare_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_25;
  }
  if (a2 == $intern_23) {
    return big_0.l + big_0.m * $intern_25 - $intern_26;
  }
  return big_0;
}

function div_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_27 < result && result < $intern_26) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

function eq(a, b){
  return compare_1(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_27 < value_0 && value_0 < $intern_26) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function lt(a, b){
  return compare_1(a, b) < 0;
}

function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_27 < result && result < $intern_26) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder));
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_27 < result && result < $intern_26) {
      return result;
    }
  }
  return createLongEmul(mul(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function or_0(a, b){
  return createLongEmul(or(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function shru_0(a, n){
  return createLongEmul(shru(isSmallLong0(a)?toBigLong(a):a, n));
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_26;
    a3 = $intern_23;
  }
  a1 = round_int(value_0 / $intern_25);
  a0 = round_int(value_0 - a1 * $intern_25);
  return create0(a0, a1, a3);
}

function toDouble_0(a){
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0.?0:d;
  }
  return toDouble(a);
}

function toInt(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return a.l | a.m << 22;
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad(new Hooldus);
}

function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function $test(this$static, input_0){
  return this$static.test(input_0);
}

function ImageResourcePrototype(url_0, width_0, height){
  this.left_0 = 0;
  this.top_0 = 0;
  this.height_0 = height;
  this.width_0 = width_0;
  this.url_0 = url_0;
}

defineClass(84, 1, {}, ImageResourcePrototype);
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.width_0 = 0;
var Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl', 'ImageResourcePrototype', 84);
function $append(this$static, styles){
  $append_3(this$static.sb, styles.css);
  return this$static;
}

function SafeStylesBuilder(){
  this.sb = new StringBuilder;
}

defineClass(440, 1, {}, SafeStylesBuilder);
var Lcom_google_gwt_safecss_shared_SafeStylesBuilder_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesBuilder', 440);
function SafeStylesString(css){
  verifySafeStylesConstraints(css);
  this.css = css;
}

defineClass(32, 1, {541:1, 32:1, 3:1}, SafeStylesString);
_.equals_0 = function equals_3(obj){
  if (!instanceOf(obj, 32)) {
    return false;
  }
  return $equals(this.css, castTo(castTo(obj, 541), 32).css);
}
;
_.hashCode_0 = function hashCode_4(){
  return getHashCode_2(this.css);
}
;
var Lcom_google_gwt_safecss_shared_SafeStylesString_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesString', 32);
function verifySafeStylesConstraints(styles){
  if (styles == null) {
    throw toJs(new NullPointerException_0('css is null'));
  }
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html = html;
}

defineClass(106, 1, {96:1, 3:1}, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals_0 = function equals_4(obj){
  if (!instanceOf(obj, 96)) {
    return false;
  }
  return $equals(this.html, castTo(obj, 96).asString());
}
;
_.hashCode_0 = function hashCode_5(){
  return getHashCode_2(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 106);
function SafeHtmlBuilder(){
  this.sb = new StringBuilder;
}

defineClass(88, 1, {}, SafeHtmlBuilder);
var Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlBuilder', 88);
function SafeHtmlString(html){
  if (html == null) {
    throw toJs(new NullPointerException_0('html is null'));
  }
  this.html = html;
}

defineClass(44, 1, {96:1, 3:1}, SafeHtmlString);
_.asString = function asString_1(){
  return this.html;
}
;
_.equals_0 = function equals_5(obj){
  if (!instanceOf(obj, 96)) {
    return false;
  }
  return $equals(this.html, castTo(obj, 96).asString());
}
;
_.hashCode_0 = function hashCode_6(){
  return getHashCode_2(this.html);
}
;
_.toString_0 = function toString_9(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 44);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  EMPTY_SAFE_HTML = new SafeHtmlString('');
  HTML_CHARS_RE = new RegExp('[&<>\'"]');
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  if (!$test(HTML_CHARS_RE, s)) {
    return s;
  }
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, EMPTY_SAFE_HTML, GT_RE, HTML_CHARS_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(49, 1, {538:1, 49:1}, SafeUriString);
_.equals_0 = function equals_6(obj){
  if (!instanceOf(obj, 49)) {
    return false;
  }
  return $equals(this.uri_0, castTo(castTo(obj, 538), 49).uri_0);
}
;
_.hashCode_0 = function hashCode_7(){
  return getHashCode_2(this.uri_0);
}
;
_.toString_0 = function toString_10(){
  return 'safe: "' + this.uri_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 49);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function Storage_0(){
  this.storage = 'sessionStorage';
}

defineClass(130, 1, {}, Storage_0);
var sessionStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 130);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  checkStorageSupport('localStorage');
  sessionStorageSupported = checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var sessionStorageSupported = false;
function $clear(storage){
  $wnd[storage].clear();
}

function $getItem(storage, key){
  return $wnd[storage].getItem(key);
}

function $render_2(object){
  return object == null?($clinit_SafeHtmlUtils() , EMPTY_SAFE_HTML):($clinit_SafeHtmlUtils() , new SafeHtmlString(htmlEscape(object)));
}

function SimpleSafeHtmlRenderer(){
}

defineClass(455, 1, {}, SimpleSafeHtmlRenderer);
var instance_2;
var Lcom_google_gwt_text_shared_SimpleSafeHtmlRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'SimpleSafeHtmlRenderer', 455);
function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = $wnd.Math.max(0, oldVelocity - minDecel);
    newVelocity = $wnd.Math.min(newVelocity, maxVelocityX);
  }
   else {
    minVelocityX = $wnd.Math.min(0, oldVelocity + minDecel);
    newVelocity = $wnd.Math.max(newVelocity, minVelocityX);
  }
  return newVelocity;
}

function $updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.elapsedMillis;
  totalEllapsedMillis = state.cumulativeElapsedMillis;
  initialVelocity = state.initialVelocity;
  oldVelocity = state.velocity;
  decelFactor = $wnd.Math.pow(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity(initialVelocity.x_0, decelFactor, oldVelocity.x_0, minDecel);
  newVelocityY = $calcNewVelocity(initialVelocity.y_0, decelFactor, oldVelocity.y_0, minDecel);
  newVelocity = new Point(newVelocityX, newVelocityY);
  state.velocity = newVelocity;
  elapsedMillis = state.elapsedMillis;
  dist = $mult(newVelocity, new Point(elapsedMillis, elapsedMillis));
  position = state.position_0;
  $setPosition(state, new Point(position.x_0 + dist.x_0, position.y_0 + dist.y_0));
  if ($wnd.Math.abs(newVelocity.x_0) < 0.02 && $wnd.Math.abs(newVelocity.y_0) < 0.02) {
    return false;
  }
  return true;
}

function DefaultMomentum(){
}

defineClass(473, 1, {}, DefaultMomentum);
var Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client', 'DefaultMomentum', 473);
function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition(this$static, position){
  this$static.position_0 = position;
}

function Momentum$State(initialPosition, initialVelocity){
  this.initialVelocity = initialVelocity;
  this.position_0 = new Point_0(initialPosition);
  this.velocity = new Point_0(initialVelocity);
}

defineClass(474, 1, {}, Momentum$State);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
var Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client', 'Momentum/State', 474);
function $minus(this$static, c){
  return new Point(this$static.x_0 - c.x_0, this$static.y_0 - c.y_0);
}

function $mult(this$static, c){
  return new Point(this$static.x_0 * c.x_0, this$static.y_0 * c.y_0);
}

function $plus(this$static, c){
  return new Point(this$static.x_0 + c.x_0, this$static.y_0 + c.y_0);
}

function Point(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function Point_0(c){
  Point.call(this, c.x_0, c.y_0);
}

defineClass(27, 1, {27:1}, Point, Point_0);
_.equals_0 = function equals_7(obj){
  var c;
  if (!instanceOf(obj, 27)) {
    return false;
  }
  c = castTo(obj, 27);
  return this.x_0 == c.x_0 && this.y_0 == c.y_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_11(){
  return 'Point(' + this.x_0 + ',' + this.y_0 + ')';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client', 'Point', 27);
function $calculateEndVelocity(from, to){
  var dist, time;
  time = to.time - from.time;
  if (time <= 0) {
    return null;
  }
  dist = $minus(from.point, to.point);
  return new Point(dist.x_0 / time, dist.y_0 / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getWidgetScrollPosition(this$static){
  return new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new Point(point1.x_0 - point2.x_0, point1.y_0 - point2.y_0);
  absDiffX = $wnd.Math.abs(diff.x_0);
  absDiffY = $wnd.Math.abs(diff.y_0);
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (this$static.recentScrollTriggeringTouchPosition.point) {
    return $hitTest(clickPoint, this$static.recentScrollTriggeringTouchPosition.point);
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = now_1();
  same = false;
  for (point$iterator = new ArrayList$1(this$static.touchPositionsDuringMomentum); point$iterator.i < point$iterator.this$01.array.length;) {
    point = castTo($next_3(point$iterator), 69);
    if (currentTime - point.time <= 2500 && $hitTest(clickPoint, point.point)) {
      same = true;
      break;
    }
  }
  return same;
}

function $onDragEnd(this$static){
  var endVelocity;
  if (!this$static.momentum) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (endVelocity) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand(this$static, endVelocity);
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumCommand), 16);
  }
}

function $onTouchEnd(this$static){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, touches, trackingTime, vMax, vPosition, diff_0, curScrollPosition;
  if (!this$static.touching) {
    return;
  }
  touch = (touches = event_0.nativeEvent.touches , touches.length > 0?touches[0]:null);
  touchPoint = new Point((touch.pageX || 0) | 0, (touch.pageY || 0) | 0);
  touchTime = now_1();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = $wnd.Math.abs(diff.x_0);
    absDiffY = $wnd.Math.abs(diff.y_0);
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, this$static.recentTouchPosition.point, this$static.recentTouchPosition.time);
      if (absDiffX > absDiffY) {
        hPosition = $getHorizontalScrollPosition(this$static.widget);
        hMin = $getMinimumHorizontalScrollPosition_0(this$static.widget);
        hMax = $getMaximumHorizontalScrollPosition_0(this$static.widget);
        if (diff.x_0 < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.x_0 > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = $getVerticalScrollPosition(this$static.widget);
        vMax = $getMaximumVerticalScrollPosition(this$static.widget);
        if (diff.y_0 < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.y_0 > 0 && 0 >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
    }
  }
  event_0.nativeEvent.preventDefault();
  if (this$static.dragging) {
    diff_0 = $minus(this$static.startTouchPosition, this$static.lastTouchPosition.point);
    curScrollPosition = $plus(this$static.startScrollPosition, diff_0);
    $setHorizontalScrollPosition(this$static.widget, round_int(curScrollPosition.x_0));
    $setVerticalScrollPosition(this$static.widget, round_int(curScrollPosition.y_0));
    trackingTime = touchTime - this$static.recentTouchPosition.time;
    if (trackingTime > 200 && !!this$static.recentTouchPositionOnDeck) {
      $setTemporalPoint(this$static.recentTouchPosition, this$static.recentTouchPositionOnDeck.point, this$static.recentTouchPositionOnDeck.time);
      this$static.recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && !this$static.recentTouchPositionOnDeck && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_0(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch, touches;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = (touches = event_0.nativeEvent.touches , touches.length > 0?touches[0]:null);
  this$static.startTouchPosition = new Point((touch.pageX || 0) | 0, (touch.pageY || 0) | 0);
  startTouchTime = now_1();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if (this$static.momentumCommand) {
    $add_7(this$static.touchPositionsDuringMomentum, new TouchScroller$TemporalPoint_0(this$static.startTouchPosition, startTouchTime));
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumTouchRemovalCommand), 2500);
  }
  this$static.startScrollPosition = new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (this$static.attachHandlerReg) {
    $removeHandler(this$static.attachHandlerReg.real);
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (this$static.bustClickHandlerReg) {
    $removeHandler(this$static.bustClickHandlerReg.real);
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (this$static.widget == widget) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = new ArrayList$1(this$static.handlerRegs); reg$iterator.i < reg$iterator.this$01.array.length;) {
    reg = castTo($next_3(reg$iterator), 536);
    $removeHandler(reg.real);
  }
  this$static.handlerRegs.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  widget.attached && ($removeBustClickHandler(this$static) , this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static)));
  this$static.attachHandlerReg = $addHandler(widget, new TouchScroller$1(this$static), (!TYPE_4 && (TYPE_4 = new GwtEvent$Type) , TYPE_4));
  $add_7(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$2(this$static), ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_3)));
  $add_7(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$3(this$static), ($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_2)));
  $add_7(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$4(this$static), ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_1)));
  $add_7(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$5(this$static), ($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_0)));
}

function $setWidgetScrollPosition(this$static, position){
  $setHorizontalScrollPosition(this$static.widget, round_int(position.x_0));
  $setVerticalScrollPosition(this$static.widget, round_int(position.y_0));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static));
}

function TouchScroller(){
  this.handlerRegs = new ArrayList;
  this.lastTouchPosition = new TouchScroller$TemporalPoint;
  this.recentTouchPosition = new TouchScroller$TemporalPoint;
  this.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint;
  this.touchPositionsDuringMomentum = new ArrayList;
  this.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand(this);
  $setMomentum(this, new DefaultMomentum);
}

defineClass(458, 1, {}, TouchScroller);
_.dragging = false;
_.touching = false;
var isSupported;
var Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller', 458);
function TouchScroller$1(this$0){
  this.this$01 = this$0;
}

defineClass(462, 1, {539:1, 33:1}, TouchScroller$1);
var Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/1', 462);
function TouchScroller$2(this$0){
  this.this$01 = this$0;
}

defineClass(463, 1, {542:1, 33:1}, TouchScroller$2);
var Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/2', 463);
function TouchScroller$3(this$0){
  this.this$01 = this$0;
}

defineClass(464, 1, {543:1, 33:1}, TouchScroller$3);
var Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/3', 464);
function TouchScroller$4(this$0){
  this.this$01 = this$0;
}

defineClass(465, 1, {544:1, 33:1}, TouchScroller$4);
var Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/4', 465);
function TouchScroller$5(this$0){
  this.this$01 = this$0;
}

defineClass(466, 1, {545:1, 33:1}, TouchScroller$5);
var Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/5', 466);
function $onPreviewNativeEvent(this$static, event_0){
  var clickPoint;
  if (1 == $getTypeInt(event_0.nativeEvent)) {
    clickPoint = new Point((event_0.nativeEvent.clientX || 0) | 0, (event_0.nativeEvent.clientY || 0) | 0);
    if ($isClickScrollTriggeringTouch(this$static.this$01, clickPoint) || $isClickTouchPositionDuringMomentum(this$static.this$01, clickPoint)) {
      event_0.isCanceled = true;
      event_0.nativeEvent.stopPropagation();
      event_0.nativeEvent.preventDefault();
    }
  }
}

function TouchScroller$6(this$0){
  this.this$01 = this$0;
}

defineClass(171, 1, {33:1, 537:1}, TouchScroller$6);
var Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/6', 171);
function $finish(this$static){
  if (this$static.windowResizeHandler) {
    $removeHandler(this$static.windowResizeHandler.real);
    this$static.windowResizeHandler = null;
  }
  this$static == this$static.this$01.momentumCommand && (this$static.this$01.momentumCommand = null);
}

function TouchScroller$MomentumCommand(this$0, endVelocity){
  this.this$01 = this$0;
  this.duration = new Duration;
  this.initialPosition = $getWidgetScrollPosition(this.this$01);
  this.state = new Momentum$State(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1(this));
}

defineClass(459, 1, {}, TouchScroller$MomentumCommand);
_.execute_0 = function execute_4(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.this$01.momentumCommand) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = $updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$01, this.state.position_0);
  hPos = round_int(this.state.position_0.x_0);
  hMin = $getMinimumHorizontalScrollPosition_0(this.this$01.widget);
  hMax = $getMaximumHorizontalScrollPosition_0(this.this$01.widget);
  vMax = $getMaximumVerticalScrollPosition(this.this$01.widget);
  vPos = round_int(this.state.position_0.y_0);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand', 459);
function TouchScroller$MomentumCommand$1(this$1){
  this.this$11 = this$1;
}

defineClass(461, 1, $intern_4, TouchScroller$MomentumCommand$1);
_.onResize = function onResize_0(event_0){
  $finish(this.this$11);
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand/1', 461);
function TouchScroller$MomentumTouchRemovalCommand(this$0){
  this.this$01 = this$0;
}

defineClass(460, 1, {}, TouchScroller$MomentumTouchRemovalCommand);
_.execute_0 = function execute_5(){
  var currentTime, iter, point;
  currentTime = now_1();
  iter = new ArrayList$1(this.this$01.touchPositionsDuringMomentum);
  while (iter.i < iter.this$01.array.length) {
    point = castTo($next_3(iter), 69);
    currentTime - point.time >= 2500 && $remove_10(iter);
  }
  return this.this$01.touchPositionsDuringMomentum.array.length != 0;
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumTouchRemovalCommand', 460);
function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint(){
}

function TouchScroller$TemporalPoint_0(point, time){
  this.point = point;
  this.time = time;
}

defineClass(69, 1, {69:1}, TouchScroller$TemporalPoint, TouchScroller$TemporalPoint_0);
_.time = 0;
var Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/TemporalPoint', 69);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw toJs(new IllegalStateException_0('initWidget() is not called yet'));
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw toJs(new IllegalStateException_0('Composite.initWidget() may only be called once.'));
  }
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $isAttached(this$static){
  if (this$static.widget) {
    return this$static.widget.attached;
  }
  return false;
}

defineClass(531, 12, $intern_1);
_.isAttached = function isAttached_0(){
  return $isAttached(this);
}
;
_.onAttach = function onAttach_0(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  $onAttach(this.widget);
  $clinit_DOM();
  this.element.__listener = this;
  this.doAttachChildren();
  fire_0(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    this.onUnload();
    this.doDetachChildren();
    fire_0(this, false);
  }
   finally {
    $onDetach(this.widget);
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return $clinit_DOM() , this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 531);
function $addCellPreviewHandler(this$static, handler){
  return $addCellPreviewHandler_0(this$static.presenter, handler);
}

function $cellConsumesEventType(cell, eventType){
  var consumedEvents;
  consumedEvents = cell.consumedEvents;
  return !!consumedEvents && consumedEvents.coll.contains(eventType);
}

function $checkRowBounds(this$static, row){
  if (!(row >= 0 && row < $getVisibleItemCount(this$static.presenter))) {
    throw toJs(new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + $getRowCount(this$static.presenter)));
  }
}

function $setFocusable(this$static, elem, focusable){
  var focusImpl;
  if (focusable) {
    focusImpl = ($clinit_FocusImpl() , $clinit_FocusImpl() , implWidget);
    $setTabIndex(elem, this$static.tabIndex_0);
    this$static.accessKey_0 != 0 && focusImpl.setAccessKey(elem, this$static.accessKey_0);
  }
   else {
    elem.tabIndex = -1;
    elem.removeAttribute('tabIndex');
    elem.removeAttribute('accessKey');
  }
}

function $setKeyboardSelectionHandler(this$static, keyboardSelectionReg){
  if (this$static.keyboardSelectionReg) {
    $removeHandler(this$static.keyboardSelectionReg.real);
    this$static.keyboardSelectionReg = null;
  }
  this$static.keyboardSelectionReg = $addCellPreviewHandler_0(this$static.presenter, keyboardSelectionReg);
}

function $setRowCount(this$static, size_0){
  $setRowCount_0(this$static.presenter, size_0, true);
}

function $setRowData(this$static, values){
  $setRowData_0(this$static.presenter, values);
}

function $showOrHide(element, show){
  if (!element) {
    return;
  }
  show?(element.style['display'] = '' , undefined):(element.style['display'] = ($clinit_Style$Display() , 'none') , undefined);
}

function AbstractHasData(widget, pageSize){
  var eventTypes;
  $initWidget(this, widget);
  this.presenter = new HasDataPresenter(new AbstractHasData$View(this), pageSize);
  eventTypes = new HashSet;
  $putStringValue(eventTypes.map_0, 'focus', eventTypes);
  $putStringValue(eventTypes.map_0, 'blur', eventTypes);
  $putStringValue(eventTypes.map_0, 'keydown', eventTypes);
  $putStringValue(eventTypes.map_0, 'keyup', eventTypes);
  $putStringValue(eventTypes.map_0, 'click', eventTypes);
  $putStringValue(eventTypes.map_0, 'mousedown', eventTypes);
  $sinkEvents_0((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), this, eventTypes);
  $addCellPreviewHandler(this, new DefaultSelectionEventManager);
  $setKeyboardSelectionHandler(this, new AbstractHasData$DefaultKeyboardSelectionHandler(this));
}

defineClass(164, 531, $intern_1);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  var eventTarget, eventType, target;
  !impl_0 && (impl_0 = new CellBasedWidgetImplStandard);
  if (this.isRefreshing) {
    return;
  }
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  if (!$isOrHasChild(($clinit_DOM() , this.element), eventTarget)) {
    return;
  }
  $onBrowserEvent(this, event_0);
  $onBrowserEvent(this.widget, event_0);
  eventType = event_0.type;
  if ($equals('focus', eventType)) {
    this.isFocused = true;
    $onFocus(this);
  }
   else if ($equals('blur', eventType)) {
    this.isFocused = false;
    $onBlur(this);
  }
   else 
    $equals('keydown', eventType)?(this.isFocused = true):$equals('mousedown', eventType) && $isFocusable((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), target) && (this.isFocused = true);
  $onBrowserEvent2(this, event_0);
}
;
_.onUnload = function onUnload_0(){
  this.isFocused = false;
}
;
_.accessKey_0 = 0;
_.isFocused = false;
_.isRefreshing = false;
_.tabIndex_0 = 0;
var Lcom_google_gwt_user_cellview_client_AbstractHasData_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData', 164);
function $buildRowValues(this$static, values, start_0, isRebuildingAllRows){
  var end, i, length_0, tableSectionBuilder, value_0;
  length_0 = values.size_1();
  end = start_0 + length_0;
  $start(this$static.tableBuilder, isRebuildingAllRows);
  for (i = start_0; i < end; i++) {
    value_0 = values.get_1(i - start_0);
    $buildRow(this$static.tableBuilder, value_0, i);
  }
  $coalesceCellProperties(this$static);
  tableSectionBuilder = $finish_0(this$static.tableBuilder);
  return tableSectionToSafeHtml(tableSectionBuilder);
}

function $checkColumnBounds(this$static, col){
  if (col < 0 || col >= this$static.columns.array.length) {
    throw toJs(new IndexOutOfBoundsException_0('Column index is out of bounds: ' + col));
  }
}

function $coalesceCellProperties(this$static){
  var column, column$iterator, consumedEvents, entry, outerIter;
  this$static.handlesSelection = false;
  this$static.isInteractive = false;
  for (column$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$2(this$static.tableBuilder.idToCellMap)).this$01)).this$01) , new AbstractMap$2$1(outerIter)); column$iterator.val$outerIter2.hasNext;) {
    column = (entry = $next_2(column$iterator.val$outerIter2) , castTo(entry.getValue_0(), 35));
    column.getCell();
    consumedEvents = column.getCell().consumedEvents;
    !!consumedEvents && consumedEvents.coll.size_1() > 0 && (this$static.isInteractive = true);
  }
}

function $createHeaders(this$static, isFooter){
  var section;
  section = isFooter?$buildFooter(this$static.footerBuilder):$buildHeader(this$static.headerBuilder);
  if (section) {
    $replaceAllRows(this$static, isFooter?this$static.tfoot:this$static.thead, tableSectionToSafeHtml(section));
    setVisible(isFooter?this$static.tfoot:this$static.thead, true);
  }
   else {
    setVisible(isFooter?this$static.tfoot:this$static.thead, false);
  }
}

function $fireEventToCell(this$static, event_0, eventType0, rowValue, column){
  var cell, col, consumedEvents, eventType;
  cell = column.getCell();
  consumedEvents = cell.consumedEvents;
  if (!(!!consumedEvents && consumedEvents.coll.contains(eventType0))) {
    return;
  }
  column.getValue(rowValue);
  if (instanceOf(column, 23)) {
    col = castTo(column, 23);
    $onBrowserEvent_0((col.getValue(rowValue) , event_0));
  }
   else {
    column.getFieldUpdater();
    eventType = event_0.type;
    $equals('keydown', eventType) && (event_0.keyCode | 0) == 13 && undefined;
  }
  this$static.cellIsEditing = false;
}

function $getColumn(this$static, col){
  $checkColumnBounds(this$static, col);
  return castTo($get_1(this$static.columns, col), 23);
}

function $getFooter(this$static, index_0){
  return castTo($get_1(this$static.footers, index_0), 86);
}

function $getHeader(this$static, index_0){
  return castTo($get_1(this$static.headers, index_0), 86);
}

function $getKeyboardSelectedElement(td){
  var firstChild;
  if (!td) {
    return null;
  }
  if ($getCellId(td) != null) {
    return td;
  }
  firstChild = $getFirstChildElement(td);
  if (!!firstChild && td.childNodes.length == 1 && $equalsIgnoreCase('div', firstChild.tagName)) {
    return firstChild;
  }
  return td;
}

function $getKeyboardSelectedTableCellElement(this$static){
  var cellCount, colIndex, column, rowIndex, tr;
  colIndex = this$static.keyboardSelectedColumn;
  if (colIndex < 0) {
    return null;
  }
  rowIndex = $getKeyboardSelectedRow(this$static.presenter);
  if (rowIndex < 0 || rowIndex >= this$static.tbody.rows.length) {
    return null;
  }
  tr = $getSubRowElement(this$static, rowIndex + $getVisibleRange(this$static.presenter).start_0, this$static.keyboardSelectedSubrow);
  if (tr) {
    cellCount = tr.cells.length;
    if (cellCount > 0) {
      column = colIndex < cellCount - 1?colIndex:cellCount - 1;
      return tr.cells[column];
    }
  }
  return null;
}

function $getSubRowElement(this$static, absRow, subrow){
  var curRow, domIndex, frameEnd, frameStart, offset, relRow, rowCount, rowValueIndex, rows_0, subrowIndex, subrowValueIndex;
  relRow = absRow - $getVisibleRange(this$static.presenter).start_0;
  $checkRowBounds(this$static, relRow);
  rows_0 = this$static.tbody.rows;
  rowCount = rows_0.length;
  if (rowCount == 0) {
    return null;
  }
  frameStart = 0;
  frameEnd = rowCount - 1;
  domIndex = relRow < frameEnd?relRow:frameEnd;
  while (domIndex >= frameStart && domIndex <= frameEnd) {
    curRow = rows_0[domIndex];
    rowValueIndex = $getRowValueIndex(this$static.tableBuilder, curRow);
    if (rowValueIndex == absRow) {
      subrowValueIndex = $getSubrowValueIndex(curRow);
      if (subrow != subrowValueIndex) {
        offset = subrow - subrowValueIndex;
        subrowIndex = domIndex + offset;
        if (subrowIndex >= rows_0.length) {
          return null;
        }
        curRow = rows_0[subrowIndex];
        if ($getRowValueIndex(this$static.tableBuilder, curRow) != absRow) {
          return null;
        }
      }
      return curRow;
    }
     else 
      rowValueIndex > absRow?(frameEnd = domIndex - 1):(frameStart = domIndex + 1);
    domIndex = (frameStart + frameEnd) / 2 | 0;
  }
  return null;
}

function $insertColumn(this$static, beforeIndex, col, header){
  var cellEvents, consumedEvents, consumedEvents0, consumedEvents1, headerEvents;
  beforeIndex != this$static.columns.array.length && $checkColumnBounds(this$static, beforeIndex);
  $add_6(this$static.headers, beforeIndex, header);
  $add_6(this$static.footers, beforeIndex, null);
  $add_6(this$static.columns, beforeIndex, col);
  beforeIndex <= this$static.keyboardSelectedColumn && (this$static.keyboardSelectedColumn = min_0(this$static.keyboardSelectedColumn + 1, this$static.columns.array.length - 1));
  consumedEvents0 = col.cell.consumedEvents;
  !!consumedEvents0 && consumedEvents0.coll.size_1() > 0 && (this$static.keyboardSelectedColumn >= this$static.columns.array.length || (consumedEvents1 = castTo($get_1(this$static.columns, this$static.keyboardSelectedColumn), 35).getCell().consumedEvents , !(!!consumedEvents1 && consumedEvents1.coll.size_1() > 0))) && (this$static.keyboardSelectedColumn = beforeIndex);
  consumedEvents = new HashSet;
  cellEvents = col.cell.consumedEvents;
  !!cellEvents && $addAll(consumedEvents, cellEvents);
  if (header) {
    headerEvents = header.cell.consumedEvents;
    !!headerEvents && $addAll(consumedEvents, headerEvents);
  }
  $sinkEvents_0((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), this$static, consumedEvents);
  this$static.headersDirty = true;
  this$static.columnWidthsDirty = true;
  $ensurePendingState(this$static.presenter).redrawRequired = true;
}

function $onBlur(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $removeClassName(td, 'GACGBQFCKG');
    $setRowStyleName(tr, 'GACGBQFCLG', 'GACGBQFCMG', false);
  }
}

function $onBrowserEvent2(this$static, event_0){
  var absRow, cellParent, clientX, clientY, col, column, columnParent, context, cur, eventTarget, eventType, eventType0, footerColumnParent, footerParent, header, headerColumnParent, headerIndex, headerParent, isHeader, isSelect, isSelectionHandled, maybeTableCell, previewEvent, relRow, rowBottom, rowHeight, rowLeft, rowRight, rowTop, rowWidth, subrow, tagName, target, targetTableCell, targetTableRow, targetTableSection, tbody, tfoot, thead, unhover, value_0;
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = event_0.target;
  tbody = this$static.tbody;
  tfoot = this$static.tfoot;
  thead = this$static.thead;
  targetTableSection = null;
  targetTableCell = null;
  cellParent = null;
  headerParent = null;
  headerColumnParent = null;
  footerParent = null;
  footerColumnParent = null;
  maybeTableCell = null;
  cur = target;
  $equalsIgnoreCase('td', target.tagName) && $getCellId($getFirstChildElement(target)) != null && (cur = $getFirstChildElement(target));
  while (!!cur && !targetTableSection) {
    if (cur == tbody || cur == tfoot || cur == thead) {
      targetTableSection = cur;
      if (maybeTableCell) {
        targetTableCell = maybeTableCell;
        break;
      }
    }
    tagName = cur.tagName;
    ($equalsIgnoreCase('td', tagName) || $equalsIgnoreCase('th', tagName)) && (maybeTableCell = cur);
    !cellParent && $getCellId(cur) != null && (cellParent = cur);
    !headerParent && $getElementAttribute(cur, '__gwt_header') != null && (headerParent = cur);
    !footerParent && $getElementAttribute(cur, '__gwt_header') != null && (footerParent = cur);
    !headerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (headerColumnParent = cur);
    !footerColumnParent && $getElementAttribute(cur, '__gwt_column') != null && (footerColumnParent = cur);
    cur = $getParentElement(cur);
  }
  if (!targetTableCell) {
    return;
  }
  this$static.legacyRenderRowValues && (cellParent = $getFirstChildElement(targetTableCell));
  targetTableRow = $getParentElement(targetTableCell);
  eventType0 = event_0.type;
  isSelect = $equals('click', eventType0) || $equals('keydown', eventType0) && (event_0.keyCode | 0) == 13;
  col = targetTableCell.cellIndex;
  if (targetTableSection == thead || targetTableSection == tfoot) {
    isHeader = targetTableSection == thead;
    headerParent = isHeader?headerParent:footerParent;
    columnParent = isHeader?headerColumnParent:footerColumnParent;
    if (headerParent) {
      header = isHeader?$getHeader_0(this$static.headerBuilder, headerParent):$getHeader_0(this$static.footerBuilder, footerParent);
      if (header) {
        headerIndex = isHeader?__parseAndValidateInt(targetTableRow.getAttribute('__gwt_header_row') || ''):__parseAndValidateInt(targetTableRow.getAttribute('__gwt_header_row') || '');
        new Cell$Context(headerIndex, col);
        $cellConsumesEventType(header.cell, eventType0) && (eventType = event_0.type , $equals('keydown', eventType) && (event_0.keyCode | 0) == 13 && undefined);
      }
    }
    isSelect && !!columnParent && (isHeader?$getColumn_1(this$static.headerBuilder, columnParent):$getColumn_1(this$static.footerBuilder, columnParent));
  }
   else if (targetTableSection == tbody) {
    absRow = $getRowValueIndex(this$static.tableBuilder, targetTableRow);
    relRow = absRow - $getVisibleRange(this$static.presenter).start_0;
    subrow = $getSubrowValueIndex(targetTableRow);
    if (!this$static.skipRowHoverCheck) {
      if ($equals('mouseover', eventType0)) {
        !!this$static.hoveringRow && $isOrHasChild(this$static.tbody, this$static.hoveringRow) && $setRowHover(this$static, this$static.hoveringRow, false);
        this$static.hoveringRow = targetTableRow;
        $setRowHover(this$static, this$static.hoveringRow, true);
      }
       else if ($equals('mouseout', eventType0) && !!this$static.hoveringRow) {
        unhover = true;
        if (!this$static.skipRowHoverFloatElementCheck) {
          clientX = ((event_0.clientX || 0) | 0) + $getScrollLeft_0($doc);
          clientY = ((event_0.clientY || 0) | 0) + $getScrollTop($doc);
          rowLeft = $getAbsoluteLeft(this$static.hoveringRow);
          rowTop = $getAbsoluteTop(this$static.hoveringRow);
          rowWidth = (this$static.hoveringRow.offsetWidth || 0) | 0;
          rowHeight = (this$static.hoveringRow.offsetHeight || 0) | 0;
          rowBottom = rowTop + rowHeight;
          rowRight = rowLeft + rowWidth;
          unhover = clientX < rowLeft || clientX > rowRight || clientY < rowTop || clientY > rowBottom;
        }
        if (unhover) {
          $setRowHover(this$static, this$static.hoveringRow, false);
          this$static.hoveringRow = null;
        }
      }
    }
    if (!(relRow >= 0 && relRow < $getCurrentState(this$static.presenter).rowData.array.length)) {
      return;
    }
    isSelectionHandled = this$static.handlesSelection;
    value_0 = ($checkRowBounds(this$static, relRow) , $getVisibleItem(this$static.presenter, relRow));
    context = new Cell$Context_0(absRow, col, subrow);
    previewEvent = fire_4(this$static, event_0, this$static, context, value_0, this$static.cellIsEditing, isSelectionHandled);
    if (!!cellParent && !previewEvent.isCanceled) {
      this$static.legacyRenderRowValues?(column = castTo($get_1(this$static.columns, col), 35)):(column = $getColumn_0(this$static.tableBuilder, cellParent));
      !!column && $fireEventToCell(this$static, event_0, eventType0, value_0, column);
    }
  }
}

function $onFocus(this$static){
  var td, tr;
  td = $getKeyboardSelectedTableCellElement(this$static);
  if (td) {
    tr = $getParentElement(td);
    $addClassName(td, 'GACGBQFCKG');
    $setRowStyleName(tr, 'GACGBQFCLG', 'GACGBQFCMG', true);
  }
}

function $refreshColumnWidths(this$static){
  var columnCount, i, width_0;
  columnCount = max_0(this$static.columns.array.length, this$static.maxColumnIndex + 1);
  for (i = 0; i < columnCount; i++) {
    $doSetColumnWidth(this$static, i, (width_0 = null , this$static.columns.array.length > i && (width_0 = castToString($get_0(this$static.columnWidths, $get_1(this$static.columns, i)))) , width_0 == null && (width_0 = castToString($get_0(this$static.columnWidthsByIndex, valueOf(i)))) , width_0));
  }
}

function $refreshHeadersAndColumnsImpl(this$static){
  var wereHeadersDirty;
  if (this$static.columnWidthsDirty) {
    this$static.columnWidthsDirty = false;
    $refreshColumnWidths_0(this$static);
  }
  wereHeadersDirty = this$static.headersDirty;
  this$static.headersDirty = false;
  (wereHeadersDirty || !this$static.headerRefreshDisabled) && $createHeaders(this$static, false);
  (wereHeadersDirty || !this$static.footerRefreshDisabled) && $createHeaders(this$static, true);
}

function $replaceAllChildren(this$static, values, html){
  $refreshHeadersAndColumnsImpl(this$static);
  (!html || !this$static.legacyRenderRowValues) && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start_0, true));
  $replaceAllRows(this$static, this$static.tbody, (!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , html));
}

function $replaceChildren(this$static, values, start_0, html){
  $refreshHeadersAndColumnsImpl(this$static);
  (!html || !this$static.legacyRenderRowValues) && (html = $buildRowValues(this$static, values, $getVisibleRange(this$static.presenter).start_0 + start_0, false));
  $replaceChildren_0(TABLE_IMPL, this$static, this$static.tbody, (!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , html), start_0, values.size_0);
}

function $resetFocusOnCell(this$static){
  var col, column, elem, row, value_0;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static));
  if (!elem) {
    return false;
  }
  row = $getKeyboardSelectedRow(this$static.presenter);
  col = this$static.keyboardSelectedColumn;
  value_0 = ($checkRowBounds(this$static, row) , $getVisibleItem(this$static.presenter, row));
  new Cell$Context(row + $getVisibleRange(this$static.presenter).start_0, col);
  column = $getColumn_0(this$static.tableBuilder, elem);
  if (!column) {
    return false;
  }
  column.getValue(value_0);
  column.getCell();
  return false;
}

function $setColumnWidth(this$static, column, width_0){
  $put_0(this$static.columnWidthsByIndex, valueOf(column), width_0);
  this$static.maxColumnIndex = max_0(this$static.maxColumnIndex, column);
  column < max_0(this$static.columns.array.length, this$static.maxColumnIndex + 1) && this$static.colGroupEnabled && ($ensureTableColElement(this$static, column).style['width'] = width_0 , undefined);
}

function $setKeyboardSelected(this$static, index_0, selected, stealFocus){
  var cells_0, focusable, i, isKeyboardSelected, keyboardColumn, subrow, td, tr, updatedSelection;
  if (!(index_0 >= 0 && index_0 < $getCurrentState(this$static.presenter).rowData.array.length)) {
    return;
  }
  subrow = this$static.lastKeyboardSelectedSubrow;
  if (selected) {
    subrow = this$static.keyboardSelectedSubrow;
    this$static.lastKeyboardSelectedSubrow = this$static.keyboardSelectedSubrow;
  }
  tr = $getSubRowElement(this$static, index_0 + $getVisibleRange(this$static.presenter).start_0, subrow);
  if (!tr) {
    return;
  }
  updatedSelection = !selected || this$static.isFocused || stealFocus;
  $setRowStyleName(tr, 'GACGBQFCLG', 'GACGBQFCMG', selected);
  cells_0 = tr.cells;
  keyboardColumn = min_0(this$static.keyboardSelectedColumn, cells_0.length - 1);
  for (i = 0; i < cells_0.length; i++) {
    td = cells_0[i];
    isKeyboardSelected = i == keyboardColumn;
    setStyleName(td, 'GACGBQFCKG', updatedSelection && selected && isKeyboardSelected);
    focusable = $getKeyboardSelectedElement(td);
    $setFocusable(this$static, focusable, selected && isKeyboardSelected);
    selected && stealFocus && !this$static.cellIsEditing && isKeyboardSelected && (!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , (new AbstractCellTable$2(focusable)).val$focusable2.focus() , undefined);
  }
}

function $setKeyboardSelectedColumn(this$static, column, stealFocus){
  this$static.keyboardSelectedColumn = column;
  $setKeyboardSelectedRow(this$static, $getKeyboardSelectedRow(this$static.presenter), this$static.keyboardSelectedSubrow, stealFocus);
}

function $setKeyboardSelectedRow(this$static, row, subrow, stealFocus){
  this$static.keyboardSelectedSubrow = subrow;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setKeyboardSelectedRow_0(this$static, row, stealFocus){
  this$static.keyboardSelectedSubrow = 0;
  $setKeyboardSelectedRow_2(this$static.presenter, row, stealFocus, true);
}

function $setRowHover(this$static, tr, isHovering){
  this$static.skipRowHoverStyleUpdate || $setRowStyleName(tr, 'GACGBQFCIG', 'GACGBQFCJG', isHovering);
}

function $setRowStyleName(tr, rowStyle, cellStyle, add_0){
  var cells_0, i;
  setStyleName(tr, rowStyle, add_0);
  cells_0 = tr.cells;
  for (i = 0; i < cells_0.length; i++) {
    setStyleName(cells_0[i], cellStyle, add_0);
  }
}

function AbstractCellTable(elem, pageSize){
  var eventTypes;
  AbstractHasData.call(this, new AbstractHasData$1(elem), pageSize);
  this.columns = new ArrayList;
  this.columnWidths = new HashMap;
  this.columnWidthsByIndex = new HashMap;
  this.maxColumnIndex = -1;
  this.footers = new ArrayList;
  this.headers = new ArrayList;
  this.keyboardSelectedColumn = 0;
  this.keyboardSelectedSubrow = 0;
  this.lastKeyboardSelectedSubrow = 0;
  this.legacyRenderRowValues = true;
  this.sortList = new ColumnSortList;
  !TABLE_IMPL && (TABLE_IMPL = new AbstractCellTable$ImplMozilla);
  !template && (template = new AbstractCellTable_TemplateImpl);
  ($clinit_DOM() , this.element).className = 'GACGBQFCIH';
  eventTypes = new HashSet;
  $putStringValue(eventTypes.map_0, 'mouseover', eventTypes);
  $putStringValue(eventTypes.map_0, 'mouseout', eventTypes);
  $sinkEvents_0((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), this, eventTypes);
  this.tableBuilder = new DefaultCellTableBuilder(this);
  this.headerBuilder = new DefaultHeaderOrFooterBuilder(this, false);
  this.footerBuilder = new DefaultHeaderOrFooterBuilder(this, true);
  $setKeyboardSelectionHandler(this, new AbstractCellTable$CellTableKeyboardSelectionHandler(this));
}

function tableSectionToSafeHtml(section){
  var rawHtml;
  if (!section) {
    throw toJs(new IllegalArgumentException_0('Only HtmlTableSectionBuilder is supported at this time'));
  }
  rawHtml = $asSafeHtml(section.delegate).html;
  rawHtml = $substring_0(rawHtml, 7, rawHtml.length - 8);
  return $clinit_SafeHtmlUtils() , new SafeHtmlString(rawHtml);
}

defineClass(422, 164, $intern_1);
_.cellIsEditing = false;
_.columnWidthsDirty = false;
_.footerRefreshDisabled = false;
_.handlesSelection = false;
_.headerRefreshDisabled = false;
_.headersDirty = false;
_.isInteractive = false;
_.keyboardSelectedColumn = 0;
_.keyboardSelectedSubrow = 0;
_.lastKeyboardSelectedSubrow = 0;
_.legacyRenderRowValues = false;
_.maxColumnIndex = 0;
_.skipRowHoverCheck = false;
_.skipRowHoverFloatElementCheck = false;
_.skipRowHoverStyleUpdate = false;
var TABLE_IMPL, template;
var Lcom_google_gwt_user_cellview_client_AbstractCellTable_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable', 422);
function AbstractCellTable$2(val$focusable){
  this.val$focusable2 = val$focusable;
}

defineClass(427, 1, {}, AbstractCellTable$2);
_.execute_1 = function execute_6(){
  this.val$focusable2.focus();
}
;
var Lcom_google_gwt_user_cellview_client_AbstractCellTable$2_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable/2', 427);
function $onCellPreview(this$static, event_0){
  var eventType, isFocusable, keyboardPagingPolicy, keyboardPagingPolicy0, nativeEvent, relRow, target;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals('keydown', eventType) && !event_0.isCellEditing) {
    switch (nativeEvent.keyCode | 0) {
      case 40:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 38:
        $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 34:
        keyboardPagingPolicy0 = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy0?$setKeyboardSelectedRow_1(this$static, $getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy0 && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) + 30);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 33:
        keyboardPagingPolicy = this$static.display_0.presenter.keyboardPagingPolicy;
        ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == keyboardPagingPolicy?$setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).length_0):INCREASE_RANGE == keyboardPagingPolicy && $setKeyboardSelectedRow_1(this$static, $getKeyboardSelectedRow(this$static.display_0.presenter) - 30);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 36:
        $setKeyboardSelectedRow_1(this$static, -$getVisibleRange(this$static.display_0.presenter).start_0);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 35:
        $setKeyboardSelectedRow_1(this$static, $getRowCount(this$static.display_0.presenter) - 1);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      case 32:
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
    }
  }
   else if ($equals('click', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start_0;
    target = event_0.nativeEvent.target;
    isFocusable = $isFocusable((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), target);
    $setKeyboardSelectedRow_0(this$static.display_0, relRow, !isFocusable);
  }
   else if ($equals('focus', eventType)) {
    relRow = event_0.context.index_0 - $getVisibleRange(this$static.display_0.presenter).start_0;
    if ($getKeyboardSelectedRow(this$static.display_0.presenter) != relRow) {
      $setKeyboardSelectedRow_0(this$static.display_0, relRow, false);
      return;
    }
  }
}

function $setKeyboardSelectedRow_1(this$static, row){
  $setKeyboardSelectedRow_0(this$static.display_0, row, true);
}

function AbstractHasData$DefaultKeyboardSelectionHandler(display){
  this.display_0 = display;
}

defineClass(165, 1, $intern_28, AbstractHasData$DefaultKeyboardSelectionHandler);
_.onCellPreview = function onCellPreview(event_0){
  $onCellPreview(this, event_0);
}
;
var Lcom_google_gwt_user_cellview_client_AbstractHasData$DefaultKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/DefaultKeyboardSelectionHandler', 165);
function $findInteractiveColumn(this$static, start_0, reverse){
  var consumedEvents, i, i0;
  if (this$static.table.isInteractive) {
    if (reverse) {
      for (i0 = start_0 - 1; i0 >= 0; i0--) {
        consumedEvents = $getColumn(this$static.table, i0).cell.consumedEvents;
        if (!!consumedEvents && consumedEvents.coll.size_1() > 0) {
          return i0;
        }
      }
      for (i = this$static.table.columns.array.length - 1; i >= start_0; i--) {
        consumedEvents = $getColumn(this$static.table, i).cell.consumedEvents;
        if (!!consumedEvents && consumedEvents.coll.size_1() > 0) {
          return i;
        }
      }
    }
     else {
      for (i0 = start_0 + 1; i0 < this$static.table.columns.array.length; i0++) {
        consumedEvents = $getColumn(this$static.table, i0).cell.consumedEvents;
        if (!!consumedEvents && consumedEvents.coll.size_1() > 0) {
          return i0;
        }
      }
      for (i = 0; i <= start_0; i++) {
        consumedEvents = $getColumn(this$static.table, i).cell.consumedEvents;
        if (!!consumedEvents && consumedEvents.coll.size_1() > 0) {
          return i;
        }
      }
    }
  }
   else {
    return 0;
  }
  return 0;
}

function AbstractCellTable$CellTableKeyboardSelectionHandler(table){
  AbstractHasData$DefaultKeyboardSelectionHandler.call(this, table);
  this.table = table;
}

defineClass(424, 165, $intern_28, AbstractCellTable$CellTableKeyboardSelectionHandler);
_.onCellPreview = function onCellPreview_0(event_0){
  var col, eventType, keyCode, nativeEvent, nextColumn, oldColumn, oldRow, prevColumn, relRow, stealFocus, subrow, target;
  nativeEvent = event_0.nativeEvent;
  eventType = event_0.nativeEvent.type;
  if ($equals('keydown', eventType) && !event_0.isCellEditing) {
    oldRow = $getKeyboardSelectedRow(this.table.presenter);
    oldColumn = this.table.keyboardSelectedColumn;
    keyCode = nativeEvent.keyCode | 0;
    if (keyCode == 39) {
      nextColumn = $findInteractiveColumn(this, oldColumn, false);
      if (nextColumn <= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow + 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, nextColumn, true);
          event_0.isCanceled = true;
          event_0.nativeEvent.preventDefault();
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, nextColumn, true);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      }
    }
     else if (keyCode == 37) {
      prevColumn = $findInteractiveColumn(this, oldColumn, true);
      if (prevColumn >= oldColumn) {
        $setKeyboardSelectedRow_0(this.table, oldRow - 1, true);
        if ($getKeyboardSelectedRow(this.table.presenter) != oldRow) {
          $setKeyboardSelectedColumn(this.table, prevColumn, true);
          event_0.isCanceled = true;
          event_0.nativeEvent.preventDefault();
          return;
        }
      }
       else {
        $setKeyboardSelectedColumn(this.table, prevColumn, true);
        event_0.isCanceled = true;
        event_0.nativeEvent.preventDefault();
        return;
      }
    }
  }
   else if ($equals('click', eventType) || $equals('focus', eventType)) {
    col = event_0.context.column;
    relRow = event_0.context.index_0 - $getVisibleRange(this.table.presenter).start_0;
    subrow = event_0.context.subindex;
    if (this.table.keyboardSelectedColumn != col || $getKeyboardSelectedRow(this.table.presenter) != relRow || this.table.keyboardSelectedSubrow != subrow) {
      stealFocus = false;
      if ($equals('click', eventType)) {
        target = event_0.nativeEvent.target;
        stealFocus = !$isFocusable((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), target);
      }
      $setKeyboardSelectedRow(this.table, relRow, subrow, stealFocus);
      $setKeyboardSelectedColumn(this.table, col, stealFocus);
    }
    return;
  }
  $onCellPreview(this, event_0);
}
;
var Lcom_google_gwt_user_cellview_client_AbstractCellTable$CellTableKeyboardSelectionHandler_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable/CellTableKeyboardSelectionHandler', 424);
function $convertToSectionElement(this$static, table, sectionTag, rowHtml){
  var tableElem, sb, sb_0, sb_1;
  $clinit_DOM();
  setEventListener(this$static.tmpElem, table);
  sectionTag = $toLowerCase(sectionTag, ($clinit_Locale() , ROOT));
  if ($equals('tbody', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb = new StringBuilder , sb.string += '<table><tbody>' , $append_3(sb, rowHtml.html) , sb.string += '<\/tbody><\/table>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html);
  }
   else if ($equals('thead', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_0 = new StringBuilder , sb_0.string += '<table><thead>' , $append_3(sb_0, rowHtml.html) , sb_0.string += '<\/thead><\/table>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html);
  }
   else if ($equals('tfoot', sectionTag)) {
    $setInnerHTML(this$static.tmpElem, (sb_1 = new StringBuilder , sb_1.string += '<table><tfoot>' , $append_3(sb_1, rowHtml.html) , sb_1.string += '<\/tfoot><\/table>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html);
  }
   else {
    throw toJs(new IllegalArgumentException_0('Invalid table section tag: ' + sectionTag));
  }
  tableElem = $getFirstChildElement(this$static.tmpElem);
  this$static.tmpElem.__listener = null;
  if ($equals('tbody', sectionTag)) {
    return tableElem.tBodies[0];
  }
   else if ($equals('thead', sectionTag)) {
    return tableElem.tHead;
  }
   else if ($equals('tfoot', sectionTag)) {
    return tableElem.tFoot;
  }
   else {
    throw toJs(new IllegalArgumentException_0('Invalid table section tag: ' + sectionTag));
  }
}

function $replaceAllRows(table, section, html){
  var nextSection, parent_0;
  $isAttached(table) || ($clinit_DOM() , setEventListener(table.element, table));
  parent_0 = $getParentElement(section);
  nextSection = $getNextSiblingElement(section);
  $detachSectionElement(section);
  $setInnerHTML(section, html.html);
  $reattachSectionElement(parent_0, section, nextSection);
  $isAttached(table) || ($clinit_DOM() , table.element.__listener = null , undefined);
}

function $replaceChildren_0(this$static, table, section, html, startIndex, childCount){
  var absEndIndex, count, insertBefore, newChild, newSection, next, nextSection, parent_0;
  $isAttached(table) || ($clinit_DOM() , setEventListener(table.element, table));
  parent_0 = $getParentElement(section);
  nextSection = $getNextSiblingElement(section);
  $detachSectionElement(section);
  absEndIndex = $getVisibleRange(table.presenter).start_0 + startIndex + childCount;
  insertBefore = $getSubRowElement(table, startIndex + $getVisibleRange(table.presenter).start_0, 0);
  if (table.legacyRenderRowValues) {
    count = 0;
    while (!!insertBefore && count < childCount) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
      ++count;
    }
  }
   else {
    while (!!insertBefore && $getRowValueIndex(table.tableBuilder, insertBefore) < absEndIndex) {
      next = $getNextSiblingElement(insertBefore);
      section.removeChild(insertBefore);
      insertBefore = !next?null:next;
    }
  }
  newSection = $convertToSectionElement(this$static, table, section.tagName, html);
  newChild = $getFirstChildElement(newSection);
  while (newChild) {
    next = $getNextSiblingElement(newChild);
    section.insertBefore(newChild, insertBefore);
    newChild = next;
  }
  $reattachSectionElement(parent_0, section, nextSection);
  $isAttached(table) || ($clinit_DOM() , table.element.__listener = null , undefined);
}

defineClass(425, 1, {});
var Lcom_google_gwt_user_cellview_client_AbstractCellTable$Impl_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable/Impl', 425);
function $detachSectionElement(section){
  var parent_0;
  if (isGecko192OrBefore()) {
    return;
  }
  parent_0 = $getParentElement(section);
  !!parent_0 && parent_0.removeChild(section);
}

function $reattachSectionElement(parent_0, section, nextSection){
  if (isGecko192OrBefore()) {
    return;
  }
  parent_0.insertBefore(section, nextSection);
}

function AbstractCellTable$ImplMozilla(){
  this.tmpElem = $doc.createElement('div');
}

defineClass(426, 425, {}, AbstractCellTable$ImplMozilla);
var Lcom_google_gwt_user_cellview_client_AbstractCellTable$ImplMozilla_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable/ImplMozilla', 426);
function $buildRow(this$static, rowValue, absRowIndex){
  this$static.rowIndex = absRowIndex;
  this$static.subrowIndex = 0;
  $buildRowImpl(this$static, rowValue, absRowIndex);
}

function $finish_0(this$static){
  while (this$static.tbody.delegate_0.stack_0.size_0 > 0) {
    $end_0(this$static.tbody.delegate_0, 'tbody');
  }
  return this$static.tbody;
}

function $getCellId(elem){
  var cellId;
  if (!elem) {
    return null;
  }
  cellId = elem.getAttribute('__gwt_cell') || '';
  return cellId == null || cellId.length == 0?null:cellId;
}

function $getColumn_0(this$static, elem){
  var cellId;
  return cellId = $getCellId(elem) , cellId == null?null:castTo($getStringValue(this$static.idToCellMap, cellId), 35);
}

function $getRowValueIndex(this$static, row){
  try {
    return __parseAndValidateInt(row.getAttribute('__gwt_row') || '');
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 65)) {
      return row.sectionRowIndex + $getVisibleRange(this$static.cellTable.presenter).start_0;
    }
     else 
      throw toJs($e0);
  }
}

function $getSubrowValueIndex(row){
  try {
    return __parseAndValidateInt(row.getAttribute('__gwt_subrow') || '');
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 65)) {
      return 0;
    }
     else 
      throw toJs($e0);
  }
}

function $renderCell(this$static, builder, context, column, rowValue){
  var cellBuilder, cellId;
  cellId = castToString($get_0(this$static.cellToIdMap, column));
  if (cellId == null) {
    cellId = 'cell-' + $createUniqueId($doc);
    $putStringValue(this$static.idToCellMap, cellId, column);
    $put_0(this$static.cellToIdMap, column, cellId);
  }
  $attribute_0(builder.delegate, '__gwt_cell', cellId);
  cellBuilder = new SafeHtmlBuilder;
  column?column.cell.render(context, column.getValue(rowValue), cellBuilder):null.cell.render(context, null.getValue(rowValue), cellBuilder);
  $html(builder, new SafeHtmlString(cellBuilder.sb.string));
}

function $start(this$static, isRebuildingAllRows){
  this$static.tbody = (!instance_1 && (instance_1 = new HtmlBuilderFactory) , $startTableSection(new HtmlBuilderImpl, 'tbody'));
  if (isRebuildingAllRows) {
    $reset(this$static.cellToIdMap);
    $reset(this$static.idToCellMap);
  }
}

function $startRow(this$static){
  var row;
  while (this$static.tbody.delegate_0.stack_0.size_0 > 1) {
    $end(this$static.tbody.delegate_0);
  }
  if (this$static.tbody.delegate_0.stack_0.size_0 < 1) {
    throw toJs(new IllegalStateException_0('Cannot start a row.  Did you call TableRowBuilder.end() too many times?'));
  }
  row = $startTR(this$static.tbody.delegate);
  $attribute_1(row, '__gwt_row', this$static.rowIndex);
  $attribute_1(row, '__gwt_subrow', this$static.subrowIndex);
  ++this$static.subrowIndex;
  return row;
}

defineClass(476, 1, {});
_.rowIndex = 0;
_.subrowIndex = 0;
var Lcom_google_gwt_user_cellview_client_AbstractCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTableBuilder', 476);
function AbstractCellTable_TemplateImpl(){
}

defineClass(475, 1, {}, AbstractCellTable_TemplateImpl);
var Lcom_google_gwt_user_cellview_client_AbstractCellTable_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractCellTable_TemplateImpl', 475);
function AbstractHasData$1(val$elem){
  this.val$elem1 = val$elem;
  $setElement(this, this.val$elem1);
}

defineClass(430, 12, $intern_1, AbstractHasData$1);
var Lcom_google_gwt_user_cellview_client_AbstractHasData$1_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/1', 430);
function $clinit_AbstractHasData$RedrawEvent(){
  $clinit_AbstractHasData$RedrawEvent = emptyMethod;
  TYPE_8 = new GwtEvent$Type;
}

function AbstractHasData$RedrawEvent(){
  $clinit_AbstractHasData$RedrawEvent();
}

defineClass(166, 503, {}, AbstractHasData$RedrawEvent);
_.dispatch = function dispatch_8(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_user_cellview_client_AbstractHasData$RedrawEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/RedrawEvent', 166);
function $addHandler_1(this$static, handler, type_0){
  return $addHandler(this$static.hasData, handler, type_0);
}

function $renderRowValues(this$static){
  var sb;
  try {
    sb = new SafeHtmlBuilder;
    this$static.hasData.legacyRenderRowValues = false;
    return new SafeHtmlString(sb.sb.string);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 20)) {
      return null;
    }
     else 
      throw toJs($e0);
  }
}

function $replaceAllChildren_0(this$static, values, stealFocus){
  var elem, html;
  html = $renderRowValues(($getVisibleRange(this$static.hasData.presenter) , this$static));
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceAllChildren(this$static.hasData, values, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent(this$static.hasData, ($getVisibleItems(this$static.hasData.presenter) , new AbstractHasData$View$2));
  $fireEvent(this$static.hasData, new AbstractHasData$RedrawEvent);
}

function $replaceChildren_1(this$static, values, start_0, stealFocus){
  var elem, html;
  html = $renderRowValues(($getVisibleRange(this$static.hasData.presenter).start_0 + start_0 , this$static));
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  this$static.wasFocused = this$static.hasData.isFocused;
  this$static.hasData.isRefreshing = true;
  $replaceChildren(this$static.hasData, values, start_0, html);
  this$static.hasData.isRefreshing = false;
  elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.hasData));
  if (elem) {
    $setFocusable(this$static.hasData, elem, true);
    this$static.hasData.isFocused && $onFocus(this$static.hasData);
  }
  $fireEvent(this$static.hasData, ($getVisibleItems(this$static.hasData.presenter) , new AbstractHasData$View$2));
  $fireEvent(this$static.hasData, new AbstractHasData$RedrawEvent);
}

function $resetFocus(this$static){
  this$static.wasFocused && (!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , $execute_0(new AbstractHasData$View$1(this$static)));
}

function $setKeyboardSelected_0(this$static, index_0, seleted, stealFocus){
  this$static.hasData.isFocused = this$static.hasData.isFocused || stealFocus;
  $setKeyboardSelected(this$static.hasData, index_0, seleted, stealFocus);
}

function $setLoadingState(this$static, state){
  this$static.hasData.isRefreshing = true;
  $onLoadingStateChanged(this$static.hasData, state);
  this$static.hasData.isRefreshing = false;
}

function AbstractHasData$View(hasData){
  this.hasData = hasData;
}

defineClass(428, 1, {}, AbstractHasData$View);
_.wasFocused = false;
var Lcom_google_gwt_user_cellview_client_AbstractHasData$View_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/View', 428);
function $execute_0(this$static){
  var elem;
  if (!$resetFocusOnCell(this$static.this$11.hasData)) {
    elem = $getKeyboardSelectedElement($getKeyboardSelectedTableCellElement(this$static.this$11.hasData));
    !!elem && (elem.focus() , undefined);
  }
}

function AbstractHasData$View$1(this$1){
  this.this$11 = this$1;
}

defineClass(429, 1, {}, AbstractHasData$View$1);
_.execute_1 = function execute_7(){
  $execute_0(this);
}
;
var Lcom_google_gwt_user_cellview_client_AbstractHasData$View$1_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/View/1', 429);
function AbstractHasData$View$2(){
}

defineClass(167, 532, {}, AbstractHasData$View$2);
var Lcom_google_gwt_user_cellview_client_AbstractHasData$View$2_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHasData/View/2', 167);
function $buildFooter(this$static){
  if (!this$static.isFooter) {
    throw toJs(new UnsupportedOperationException_0('Cannot build footer because this builder is designated to build a header'));
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeader(this$static){
  if (this$static.isFooter) {
    throw toJs(new UnsupportedOperationException_0('Cannot build header because this builder is designated to build a footer'));
  }
  return $buildHeaderOrFooter(this$static);
}

function $buildHeaderOrFooter(this$static){
  this$static.section = this$static.isFooter?(!instance_1 && (instance_1 = new HtmlBuilderFactory) , $startTableSection(new HtmlBuilderImpl, 'tfoot')):(!instance_1 && (instance_1 = new HtmlBuilderFactory) , $startTableSection(new HtmlBuilderImpl, 'thead'));
  $clear_0(this$static.idToHeaderMap);
  $reset(this$static.idToColumnMap);
  this$static.rowIndex = 0;
  if (!$buildHeaderOrFooterImpl(this$static)) {
    return null;
  }
  while (this$static.section.delegate_0.stack_0.size_0 > 0) {
    $end(this$static.section.delegate_0);
  }
  return this$static.section;
}

function $getColumn_1(this$static, elem){
  var cellId;
  cellId = $getElementAttribute(elem, '__gwt_column');
  return cellId == null?null:castTo($getStringValue(this$static.idToColumnMap, cellId), 23);
}

function $getElementAttribute(elem, attribute){
  var value_0;
  if (!elem) {
    return null;
  }
  value_0 = elem.getAttribute(attribute) || '';
  return value_0 == null || value_0.length == 0?null:value_0;
}

function $getHeader_0(this$static, elem){
  var headerId;
  headerId = $getElementAttribute(elem, '__gwt_header');
  return headerId == null?null:castTo($getValue_1(this$static.idToHeaderMap, headerId), 86);
}

function $getSortIcon(this$static){
  var proto;
  if (!this$static.sortDescIconHtml) {
    proto = create_1(($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer() , cellTableSortDescending));
    this$static.sortDescIconHtml = ($clinit_SafeHtmlUtils() , new SafeHtmlString($getSafeHtml(proto.url_0, proto.left_0, proto.top_0, proto.width_0, proto.height_0).html));
  }
  return this$static.sortDescIconHtml;
}

function $renderHeader(this$static, out, context, header){
  var headerId, sb;
  headerId = castToString($getKey(this$static.idToHeaderMap, header));
  if (headerId == null) {
    headerId = 'header-' + $createUniqueId($doc);
    $put(this$static.idToHeaderMap, headerId, header);
  }
  $attribute_0(out.delegate, '__gwt_header', headerId);
  sb = new SafeHtmlBuilder;
  $render(header.text_0, sb);
  out.html_0(new SafeHtmlString(sb.sb.string));
}

function $renderSortableHeader(this$static, out, context, header, isSorted){
  var halfHeight, headerContainer, iconWidth, imageHolder, lastArg, lastArg0, lastArg1, lastArg2, lastArg3, outerDiv, posRight, style;
  headerContainer = out;
  isSorted = isSorted && !this$static.isFooter;
  if (isSorted) {
    posRight = !this$static.isSortIconStartOfLine;
    iconWidth = this$static.sortDescIconWidth;
    halfHeight = this$static.sortDescIconHalfHeight;
    outerDiv = $startDiv(out.delegate);
    style = $trustedProperty($position(outerDiv.delegate_0.stylesBuilder, ($clinit_Style$Position() , RELATIVE)), 'zoom');
    posRight?$paddingRight(style, (lastArg0 = iconWidth , $clinit_Style$Unit() , lastArg0)):$paddingLeft(style, (lastArg1 = iconWidth , $clinit_Style$Unit() , lastArg1));
    $endStyle(style.delegate);
    imageHolder = $startDiv(outerDiv.delegate);
    style = $marginTop($styleProperty((lastArg3 = $styleProperty((lastArg2 = $position(outerDiv.delegate_0.stylesBuilder, ABSOLUTE) , $clinit_Style$Unit() , lastArg2).delegate, new SafeStylesString('top:50.0%;')) , $clinit_Style$Unit() , lastArg3).delegate, new SafeStylesString('line-height:0.0px;')), (lastArg = -halfHeight , lastArg));
    posRight?$styleProperty(style.delegate, new SafeStylesString('right:0.0px;')):$styleProperty(style.delegate, new SafeStylesString('left:0.0px;'));
    $endStyle(style.delegate);
    $html(imageHolder, $getSortIcon(this$static));
    $end_0(imageHolder.delegate_0, 'div');
    headerContainer = $startDiv(outerDiv.delegate);
  }
  $renderHeader(this$static, headerContainer, context, header);
  if (isSorted) {
    $end_0(headerContainer.delegate_0, 'div');
    $end_0(headerContainer.delegate_0, 'div');
  }
}

function $startRow_0(this$static){
  var row;
  while (this$static.section.delegate_0.stack_0.size_0 > 1) {
    $end(this$static.section.delegate_0);
  }
  if (this$static.section.delegate_0.stack_0.size_0 < 1) {
    throw toJs(new IllegalStateException_0('Cannot start a row.  Did you call TableRowBuilder.end() too many times?'));
  }
  row = $startTR(this$static.section.delegate);
  $attribute_1(row, '__gwt_header_row', this$static.rowIndex);
  ++this$static.rowIndex;
  return row;
}

function AbstractHeaderOrFooterBuilder(table, isFooter){
  var asc, desc;
  this.idToColumnMap = new HashMap;
  this.idToHeaderMap = new AbstractHeaderOrFooterBuilder$TwoWayHashMap;
  this.isFooter = isFooter;
  this.table = table;
  asc = ($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer() , cellTableSortAscending);
  desc = ($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer() , cellTableSortDescending);
  !!asc && toInt(fromDouble_0($wnd.Math.round(asc.height_0 / 2)));
  if (desc) {
    this.sortDescIconWidth = desc.width_0 + 6;
    this.sortDescIconHalfHeight = toInt(fromDouble_0($wnd.Math.round(desc.height_0 / 2)));
  }
   else {
    this.sortDescIconWidth = 0;
    this.sortDescIconHalfHeight = 0;
  }
}

defineClass(478, 1, {});
_.isFooter = false;
_.isSortIconStartOfLine = true;
_.rowIndex = 0;
_.sortDescIconHalfHeight = 0;
_.sortDescIconWidth = 0;
var Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHeaderOrFooterBuilder', 478);
function $clear_0(this$static){
  $reset(this$static.keyToValue);
  $reset(this$static.valueToKey);
}

function $getKey(this$static, value_0){
  return $get_0(this$static.valueToKey, value_0);
}

function $getValue_1(this$static, key){
  return $getStringValue(this$static.keyToValue, key);
}

function $put(this$static, key, value_0){
  $putStringValue(this$static.keyToValue, key, value_0);
  $put_0(this$static.valueToKey, value_0, key);
}

function AbstractHeaderOrFooterBuilder$TwoWayHashMap(){
  this.keyToValue = new HashMap;
  this.valueToKey = new HashMap;
}

defineClass(479, 1, {}, AbstractHeaderOrFooterBuilder$TwoWayHashMap);
var Lcom_google_gwt_user_cellview_client_AbstractHeaderOrFooterBuilder$TwoWayHashMap_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'AbstractHeaderOrFooterBuilder/TwoWayHashMap', 479);
function $isFocusable(this$static, elem){
  return $contains_0(this$static.focusableTypes, $toLowerCase(elem.tagName, ($clinit_Locale() , ROOT))) || elem.tabIndex >= 0;
}

function $sinkEvents_0(this$static, widget, typeNames){
  var entry, eventsToSink, outerIter, typeInt, typeName, typeName$iterator;
  eventsToSink = 0;
  for (typeName$iterator = (outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(typeNames.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter)); typeName$iterator.val$outerIter2.hasNext;) {
    typeName = (entry = $next_2(typeName$iterator.val$outerIter2) , castToString(entry.getKey()));
    typeInt = $eventGetTypeInt(($clinit_DOM() , typeName));
    if (typeInt < 0) {
      $sinkBitlessEvent_0(widget.element, typeName);
    }
     else {
      typeInt = $sinkEvent(this$static, widget, typeName);
      typeInt > 0 && (eventsToSink |= typeInt);
    }
  }
  eventsToSink > 0 && (widget.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(widget.element, eventsToSink | (widget.element.__eventBits || 0))):(widget.eventsToSink |= eventsToSink));
}

defineClass(454, 1, {});
var impl_0;
var Lcom_google_gwt_user_cellview_client_CellBasedWidgetImpl_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellBasedWidgetImpl', 454);
function $initEventSystem(){
  dispatchNonBubblingEvent = $entry(function(evt){
    handleNonBubblingEvent(evt);
  }
  );
}

function $sinkEvent(this$static, widget, typeName){
  var elem;
  if ($contains_0(this$static.nonBubblingEvents, typeName)) {
    !dispatchNonBubblingEvent && $initEventSystem();
    elem = ($clinit_DOM() , widget.element);
    if (!$equals('true', elem.getAttribute('__gwtCellBasedWidgetImplDispatching' + typeName) || '')) {
      elem.setAttribute('__gwtCellBasedWidgetImplDispatching' + typeName, 'true');
      elem.addEventListener(typeName, dispatchNonBubblingEvent, true);
    }
    return -1;
  }
   else {
    return $eventGetTypeInt(($clinit_DOM() , typeName));
  }
}

function CellBasedWidgetImplStandard(){
  this.focusableTypes = new HashSet;
  $add_8(this.focusableTypes, 'select');
  $add_8(this.focusableTypes, 'input');
  $add_8(this.focusableTypes, 'textarea');
  $add_8(this.focusableTypes, 'option');
  $add_8(this.focusableTypes, 'button');
  $add_8(this.focusableTypes, 'label');
  this.nonBubblingEvents = new HashSet;
  $add_8(this.nonBubblingEvents, 'focus');
  $add_8(this.nonBubblingEvents, 'blur');
  $add_8(this.nonBubblingEvents, 'load');
  $add_8(this.nonBubblingEvents, 'error');
}

function handleNonBubblingEvent(event_0){
  var eventTarget, listener, target, typeName;
  eventTarget = event_0.target;
  if (!is_0(eventTarget)) {
    return;
  }
  target = eventTarget;
  typeName = event_0.type;
  listener = ($clinit_DOM() , getEventListener(target));
  while (!!target && !listener) {
    target = $getParentElement(target);
    !!target && $equals('true', target.getAttribute('__gwtCellBasedWidgetImplDispatching' + typeName) || '') && (listener = getEventListener(target));
  }
  !!listener && dispatchEvent_0(event_0, target, listener);
}

defineClass(47, 454, {}, CellBasedWidgetImplStandard);
var dispatchNonBubblingEvent;
var Lcom_google_gwt_user_cellview_client_CellBasedWidgetImplStandard_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellBasedWidgetImplStandard', 47);
function $doSetColumnWidth(this$static, column, width_0){
  this$static.colGroupEnabled && (width_0 == null?($ensureTableColElement(this$static, column).style['width'] = '' , undefined):($ensureTableColElement(this$static, column).style['width'] = width_0 , undefined));
}

function $ensureTableColElement(this$static, index_0){
  var i;
  for (i = this$static.colgroup.childNodes.length; i <= index_0; i++) {
    $appendChild(this$static.colgroup, $doc.createElement('col'));
  }
  return $getChild(this$static.colgroup, index_0);
}

function $onLoadingStateChanged(this$static, state){
  var message;
  message = null;
  state == ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)?(message = this$static.loadingIndicatorContainer):state == LOADED && $isEmpty(this$static.presenter) && (message = this$static.emptyTableWidgetContainer);
  !!message && $showWidget(this$static.messagesPanel, $getWidgetIndex(this$static.messagesPanel, message));
  $setColSpan(this$static.tbodyLoadingCell, max_0(1, max_0(this$static.columns.array.length, this$static.maxColumnIndex + 1)));
  $showOrHide(this$static.tbody, !message);
  $showOrHide(this$static.tbodyLoading, !!message);
  $fireEvent(this$static, new LoadingStateChangeEvent);
}

function $refreshColumnWidths_0(this$static){
  var colCount, i, i0, lastColumn;
  $refreshColumnWidths(this$static);
  if (this$static.colGroupEnabled) {
    colCount = this$static.colgroup.childNodes.length;
    lastColumn = max_0(this$static.columns.array.length, this$static.maxColumnIndex + 1);
    for (i0 = 0; i0 < lastColumn; i0++) {
      $ensureTableColElement(this$static, i0).style['display'] = '';
    }
    for (i = colCount - 1; i >= lastColumn; i--) {
      this$static.colGroupEnabled && ($ensureTableColElement(this$static, i).style['width'] = '0px' , undefined);
      $ensureTableColElement(this$static, i).style['display'] = ($clinit_Style$Display() , 'none');
    }
  }
}

function $setTableLayoutFixed(this$static){
  if (!this$static.colGroupEnabled) {
    throw toJs(new IllegalStateException_0('Cannot set table to fixed layout when colgroup is disabled'));
  }
  this$static.table.style['tableLayout'] = ($clinit_Style$TableLayout() , 'fixed');
}

function CellTable(){
  var loadingImg;
  !DEFAULT_RESOURCES && (DEFAULT_RESOURCES = new CellTable_Resources_default_InlineClientBundleGenerator);
  CellTable_0.call(this, (loadingImg = ($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableLoadingInitializer() , cellTableLoading) , !loadingImg?null:new Image_0(loadingImg)));
}

function CellTable_0(loadingIndicator){
  CellTable_1.call(this, loadingIndicator);
}

function CellTable_1(loadingIndicator){
  var eventTypes, tr;
  AbstractCellTable.call(this, $doc.createElement('table'), (new CellTable$ResourcesAdapter , 15));
  this.emptyTableWidgetContainer = new SimplePanel;
  this.loadingIndicatorContainer = new SimplePanel;
  this.messagesPanel = new DeckPanel;
  this.colGroupEnabled = true;
  this.style_0 = ($clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableStyleInitializer() , cellTableStyle);
  $ensureInjected(this.style_0);
  this.colGroupEnabled = true;
  this.table = ($clinit_DOM() , this.element);
  this.table.cellSpacing = 0;
  this.colgroup = $doc.createElement('colgroup');
  $appendChild(this.table, this.colgroup);
  this.thead = this.table.createTHead();
  if (this.table.tBodies.length > 0) {
    this.tbody = this.table.tBodies[0];
  }
   else {
    this.tbody = $doc.createElement('tbody');
    $appendChild(this.table, this.tbody);
  }
  this.tbodyLoading = $doc.createElement('tbody');
  $appendChild(this.table, this.tbodyLoading);
  this.tfoot = this.table.createTFoot();
  this.tbodyLoadingCell = $doc.createElement('td');
  tr = $doc.createElement('tr');
  $appendChild(this.tbodyLoading, tr);
  $appendChild(tr, this.tbodyLoadingCell);
  this.tbodyLoadingCell.align = 'center';
  $appendChild(this.tbodyLoadingCell, $getElement(this.messagesPanel));
  this.messagesPanel.setParent(this);
  $add_3(this.messagesPanel, this.emptyTableWidgetContainer);
  $add_3(this.messagesPanel, this.loadingIndicatorContainer);
  $setStyleName(this.loadingIndicatorContainer, 'GACGBQFCAH');
  $setWidget(this.loadingIndicatorContainer, loadingIndicator);
  eventTypes = new HashSet;
  $putStringValue(eventTypes.map_0, 'mouseover', eventTypes);
  $putStringValue(eventTypes.map_0, 'mouseout', eventTypes);
  $sinkEvents_0((!impl_0 && (impl_0 = new CellBasedWidgetImplStandard) , impl_0), this, eventTypes);
}

defineClass(70, 422, $intern_1, CellTable);
_.doAttachChildren = function doAttachChildren_2(){
  this.messagesPanel.onAttach();
}
;
_.doDetachChildren = function doDetachChildren_2(){
  this.messagesPanel.onDetach();
}
;
_.colGroupEnabled = false;
var DEFAULT_RESOURCES;
var Lcom_google_gwt_user_cellview_client_CellTable_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellTable', 70);
function CellTable$ResourcesAdapter(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableStyleInitializer();
}

defineClass(423, 1, {}, CellTable$ResourcesAdapter);
var Lcom_google_gwt_user_cellview_client_CellTable$ResourcesAdapter_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellTable/ResourcesAdapter', 423);
function CellTable_Resources_default_InlineClientBundleGenerator(){
}

defineClass(452, 1, {}, CellTable_Resources_default_InlineClientBundleGenerator);
var cellTableLoading, cellTableSortAscending, cellTableSortDescending, cellTableStyle;
var Lcom_google_gwt_user_cellview_client_CellTable_1Resources_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellTable_Resources_default_InlineClientBundleGenerator', 452);
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GACGBQFCGG{border-top:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;}.GACGBQFCHG{border-bottom:2px solid #6f7277;padding:3px 15px;text-align:left;color:#4b4a4a;text-shadow:#ddf 1px 1px 0;overflow:hidden;}.GACGBQFCAG{padding:2px 15px;overflow:hidden;}.GACGBQFCFH{cursor:pointer;cursor:hand;}.GACGBQFCFH:hover{color:#6c6b6b;}.GACGBQFCBG{background:#fff;}.GACGBQFCCG{border:2px solid #fff;}.GACGBQFCBH{background:#f3f7fb;}.GACGBQFCCH{border:2px solid #f3f7fb;}.GACGBQFCIG{background:#eee;}.GACGBQFCJG{border:2px solid #eee;}.GACGBQFCLG{background:#ffc;}.GACGBQFCMG{border:2px solid #ffc;}.GACGBQFCDH{background:#628cd5;color:white;height:auto;overflow:auto;}.GACGBQFCEH{border:2px solid #628cd5;}.GACGBQFCKG{border:2px solid #d7dde8;}.GACGBQFCAH{margin:30px;}');
    schedule();
    return true;
  }
  return false;
}

function CellTable_Resources_default_InlineClientBundleGenerator$1(){
}

defineClass(453, 1, {}, CellTable_Resources_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lcom_google_gwt_user_cellview_client_CellTable_1Resources_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'CellTable_Resources_default_InlineClientBundleGenerator/1', 453);
function $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableLoadingInitializer(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableLoadingInitializer = emptyMethod;
  cellTableLoading = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/gif;base64,R0lGODlhKwALAPEAAP///0tKSqampktKSiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAKwALAAACMoSOCMuW2diD88UKG95W88uF4DaGWFmhZid93pq+pwxnLUnXh8ou+sSz+T64oCAyTBUAACH5BAkKAAAALAAAAAArAAsAAAI9xI4IyyAPYWOxmoTHrHzzmGHe94xkmJifyqFKQ0pwLLgHa82xrekkDrIBZRQab1jyfY7KTtPimixiUsevAAAh+QQJCgAAACwAAAAAKwALAAACPYSOCMswD2FjqZpqW9xv4g8KE7d54XmMpNSgqLoOpgvC60xjNonnyc7p+VKamKw1zDCMR8rp8pksYlKorgAAIfkECQoAAAAsAAAAACsACwAAAkCEjgjLltnYmJS6Bxt+sfq5ZUyoNJ9HHlEqdCfFrqn7DrE2m7Wdj/2y45FkQ13t5itKdshFExC8YCLOEBX6AhQAADsAAAAAAAAAAAA=')), 43, 11);
}

function $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortAscendingInitializer = emptyMethod;
  cellTableSortAscending = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAiklEQVR42mNgwALyKrumFRf3iDAQAvmVXVVAxf/zKjq341WYV95hk1fZ+R+MK8C4HqtCkLW5FZ2PQYpyK6AaKjv/5VV1OmIozq3s3AFR0AXFUNMrO5/lV7WKI6yv6mxCksSGDyTU13Mw5JV2qeaWd54FWn0BRAMlLgPZl/NAuBKMz+dWdF0H2hwCAPwcZIjfOFLHAAAAAElFTkSuQmCC')), 11, 7);
}

function $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableSortDescendingInitializer = emptyMethod;
  cellTableSortDescending = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAiklEQVR42mPIrewMya3oup5X2XkeiC/nVXRezgViEDu3vPMskH0BROeVdqkyJNTXcwAlDgDxfwxcAaWrOpsYYCC/qlUcKPgMLlnZBcWd/4E272BAB0DdjkDJf2AFFRBTgfTj4uIeEQZsAKigHmE6EJd32DDgA0DF20FOyK/sqmIgBEDWAhVPwyYHAJAqZIiNwsHKAAAAAElFTkSuQmCC')), 11, 7);
}

function $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableStyleInitializer(){
  $clinit_CellTable_Resources_default_InlineClientBundleGenerator$cellTableStyleInitializer = emptyMethod;
  cellTableStyle = new CellTable_Resources_default_InlineClientBundleGenerator$1;
}

function ColumnSortList(){
  this.infos = new ArrayList;
}

defineClass(105, 1, {105:1}, ColumnSortList);
_.equals_0 = function equals_8(obj){
  var other;
  if (obj === this) {
    return true;
  }
   else if (!instanceOf(obj, 105)) {
    return false;
  }
  other = castTo(obj, 105);
  return $equals_1(this.infos, other.infos);
}
;
_.hashCode_0 = function hashCode_9(){
  return 31 * hashCode_19(this.infos) + 13;
}
;
var Lcom_google_gwt_user_cellview_client_ColumnSortList_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'ColumnSortList', 105);
function $buildRowImpl(this$static, rowValue, absRowIndex){
  var cellStyles, column, columnCount, context, curColumn, div, isEven, isSelected, lastArg, selectionModel, td, tdClasses, tr, trClasses;
  selectionModel = this$static.cellTable.presenter.selectionModel;
  isSelected = !(!selectionModel || rowValue == null) && $isSelected(selectionModel, rowValue);
  isEven = absRowIndex % 2 == 0;
  trClasses = new StringBuilder_0(isEven?this$static.evenRowStyle:this$static.oddRowStyle);
  isSelected && $append_3(trClasses, this$static.selectedRowStyle);
  tr = $startRow(this$static);
  $className(tr, trClasses.string);
  columnCount = this$static.cellTable.columns.array.length;
  for (curColumn = 0; curColumn < columnCount; curColumn++) {
    column = $getColumn(this$static.cellTable, curColumn);
    tdClasses = new StringBuilder_0(this$static.cellStyle);
    $append_3(tdClasses, isEven?this$static.evenCellStyle:this$static.oddCellStyle);
    curColumn == 0 && $append_3(tdClasses, this$static.firstColumnStyle);
    isSelected && $append_3(tdClasses, this$static.selectedCellStyle);
    curColumn == columnCount - 1 && $append_3(tdClasses, this$static.lastColumnStyle);
    context = new Cell$Context(absRowIndex, curColumn);
    cellStyles = column.cellStyleNames;
    cellStyles != null && (tdClasses.string += ' ' + cellStyles , tdClasses);
    td = $startTD(tr.delegate);
    $className(td, tdClasses.string);
    div = $startDiv(td.delegate);
    $endStyle($styleProperty((lastArg = div.delegate_0.stylesBuilder , $clinit_Style$OutlineStyle() , lastArg).delegate, new SafeStylesString('outline-style:none;')).delegate);
    $renderCell(this$static, div, context, column, rowValue);
    $end_0(div.delegate_0, 'div');
    $end_0(td.delegate_0, 'td');
  }
  $end_0(tr.delegate_0, 'tr');
}

function DefaultCellTableBuilder(cellTable){
  this.idToCellMap = new HashMap;
  this.cellToIdMap = new HashMap;
  this.cellTable = cellTable;
  this.evenRowStyle = 'GACGBQFCBG';
  this.oddRowStyle = 'GACGBQFCBH';
  this.selectedRowStyle = ' GACGBQFCDH';
  this.cellStyle = 'GACGBQFCAG';
  this.evenCellStyle = ' GACGBQFCCG';
  this.oddCellStyle = ' GACGBQFCCH';
  this.firstColumnStyle = ' GACGBQFCDG';
  this.lastColumnStyle = ' GACGBQFCNG';
  this.selectedCellStyle = ' GACGBQFCEH';
}

defineClass(477, 476, {}, DefaultCellTableBuilder);
var Lcom_google_gwt_user_cellview_client_DefaultCellTableBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'DefaultCellTableBuilder', 477);
function $appendExtraStyles(header){
  if (!header) {
    return;
  }
}

function $buildHeaderOrFooterImpl(this$static){
  var className, classesBuilder, column, columnCount, curColumn, hasHeader, header, i, isFooter, prevColspan, prevHeader, sortList, table, tr;
  table = this$static.table;
  isFooter = this$static.isFooter;
  columnCount = table.columns.array.length;
  if (columnCount == 0) {
    return false;
  }
  hasHeader = false;
  for (i = 0; i < columnCount; i++) {
    if (this$static.isFooter?$getFooter(this$static.table, i):$getHeader(this$static.table, i)) {
      hasHeader = true;
      break;
    }
  }
  if (!hasHeader) {
    return false;
  }
  sortList = table.sortList;
  sortList.infos.array.length == 0?null:throwClassCastExceptionUnlessNull($get_1(sortList.infos, 0));
  className = this$static.isFooter?'GACGBQFCGG':'GACGBQFCHG';
  prevHeader = this$static.isFooter?$getFooter(this$static.table, 0):$getHeader(this$static.table, 0);
  column = $getColumn(this$static.table, 0);
  prevColspan = 1;
  classesBuilder = new StringBuilder_0(className);
  classesBuilder.string += ' ' + (isFooter?'GACGBQFCEG':'GACGBQFCFG');
  tr = $startRow_0(this$static);
  for (curColumn = 1; curColumn < columnCount; curColumn++) {
    header = this$static.isFooter?$getFooter(this$static.table, curColumn):$getHeader(this$static.table, curColumn);
    if (header != prevHeader) {
      $buildTableHeader(this$static, tr, column, prevHeader, false, false, classesBuilder, prevColspan, curColumn);
      prevHeader = header;
      prevColspan = 1;
      classesBuilder = new StringBuilder_0(className);
    }
     else {
      ++prevColspan;
    }
    column = ($checkColumnBounds(table, curColumn) , castTo($get_1(table.columns, curColumn), 23));
  }
  $append_3((classesBuilder.string += ' ' , classesBuilder), isFooter?'GACGBQFCOG':'GACGBQFCPG');
  $buildTableHeader(this$static, tr, column, prevHeader, false, false, classesBuilder, prevColspan, curColumn);
  $end_0(tr.delegate_0, 'tr');
  return true;
}

function $buildTableHeader(this$static, tr, column, header, isSortable, isSorted, classesBuilder, prevColspan, curColumn){
  var context, lastArg, th, columnId;
  isSortable && (classesBuilder.string += ' GACGBQFCFH' , classesBuilder);
  isSorted && (classesBuilder.string += ' GACGBQFCHH' , classesBuilder);
  $appendExtraStyles(header);
  th = castTo($className($colSpan($startTH(tr.delegate), prevColspan), classesBuilder.string), 499);
  columnId = 'column-' + $createUniqueId($doc);
  $putStringValue(this$static.idToColumnMap, columnId, column);
  $attribute_0(th.delegate, '__gwt_column', columnId);
  if (header) {
    context = new Cell$Context(0, (lastArg = curColumn - prevColspan , lastArg));
    if (isSortable) {
      $attribute_0(th.delegate, 'role', 'button');
      $trustedAttribute(th.delegate, 'tabIndex', -1);
    }
    $renderSortableHeader(this$static, th, context, header, isSorted);
  }
  $end_0(th.delegate_0, 'th');
}

function DefaultHeaderOrFooterBuilder(table, isFooter){
  AbstractHeaderOrFooterBuilder.call(this, table, isFooter);
}

defineClass(172, 478, {}, DefaultHeaderOrFooterBuilder);
var Lcom_google_gwt_user_cellview_client_DefaultHeaderOrFooterBuilder_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'DefaultHeaderOrFooterBuilder', 172);
function $addCellPreviewHandler_0(this$static, handler){
  return $addHandler_1(this$static.view, handler, (!TYPE_12 && (TYPE_12 = new GwtEvent$Type) , TYPE_12));
}

function $calculateModifiedRanges(modifiedRows, pageStart, pageEnd){
  var diff, i, index_0, maxDiff, rangeEnd0, rangeEnd1, rangeLength0, rangeLength1, rangeStart0, rangeStart1, toRet;
  sortJsArrayInteger(modifiedRows);
  rangeStart0 = -1;
  rangeEnd0 = -1;
  rangeStart1 = -1;
  rangeEnd1 = -1;
  maxDiff = 0;
  for (i = 0; i < modifiedRows.length; i++) {
    index_0 = modifiedRows[i];
    if (index_0 < pageStart || index_0 >= pageEnd) {
      continue;
    }
     else if (rangeStart0 == -1) {
      rangeStart0 = index_0;
      rangeEnd0 = index_0;
    }
     else if (rangeStart1 == -1) {
      maxDiff = index_0 - rangeEnd0;
      rangeStart1 = index_0;
      rangeEnd1 = index_0;
    }
     else {
      diff = index_0 - rangeEnd1;
      if (diff > maxDiff) {
        rangeEnd0 = rangeEnd1;
        rangeStart1 = index_0;
        rangeEnd1 = index_0;
        maxDiff = diff;
      }
       else {
        rangeEnd1 = index_0;
      }
    }
  }
  rangeEnd0 += 1;
  rangeEnd1 += 1;
  if (rangeStart1 == rangeEnd0) {
    rangeEnd0 = rangeEnd1;
    rangeStart1 = -1;
    rangeEnd1 = -1;
  }
  toRet = new ArrayList;
  if (rangeStart0 != -1) {
    rangeLength0 = rangeEnd0 - rangeStart0;
    $add_7(toRet, new Range_0(rangeStart0, rangeLength0));
  }
  if (rangeStart1 != -1) {
    rangeLength1 = rangeEnd1 - rangeStart1;
    $add_7(toRet, new Range_0(rangeStart1, rangeLength1));
  }
  return toRet;
}

function $clearSelectionModel(this$static){
  if (this$static.selectionHandler) {
    $removeHandler(this$static.selectionHandler.real);
    this$static.selectionHandler = null;
  }
  this$static.selectionModel = null;
}

function $ensurePendingState(this$static){
  !this$static.pendingState && (this$static.pendingState = new HasDataPresenter$PendingState(this$static.state));
  this$static.pendingStateCommand = new HasDataPresenter$2(this$static);
  $scheduleFinally_0(this$static.pendingStateCommand);
  return this$static.pendingState;
}

function $findIndexOfBestMatch(state, value_0, initialIndex){
  var bestMatchDiff, bestMatchIndex, curValue, diff, i, rowDataCount;
  if (value_0 == null) {
    return -1;
  }
  bestMatchIndex = -1;
  bestMatchDiff = $intern_0;
  rowDataCount = state.rowData.array.length;
  for (i = 0; i < rowDataCount; i++) {
    curValue = $get_1(state.rowData, i);
    if (equals_Ljava_lang_Object__Z__devirtual$(value_0, curValue)) {
      diff = initialIndex - i < 0?-(initialIndex - i):initialIndex - i;
      if (diff < bestMatchDiff) {
        bestMatchIndex = i;
        bestMatchDiff = diff;
      }
    }
  }
  return bestMatchIndex;
}

function $getCurrentState(this$static){
  return !this$static.pendingState?this$static.state:this$static.pendingState;
}

function $getKeyboardSelectedRow(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRow;
}

function $getRowCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
}

function $getVisibleItem(this$static, indexOnPage){
  return $getRowDataValue(!this$static.pendingState?this$static.state:this$static.pendingState, indexOnPage);
}

function $getVisibleItemCount(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length;
}

function $getVisibleItems(this$static){
  return $getRowDataValues(!this$static.pendingState?this$static.state:this$static.pendingState);
}

function $getVisibleRange(this$static){
  return new Range_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize);
}

function $isEmpty(this$static){
  return (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact && (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount == 0;
}

function $resolvePendingState(this$static, modifiedRows){
  var absStart, bestMatchIndex, e, i, isSelected, keyboardRowChanged, length_0, modifiedRanges, newSelectedRow, newState, newlySelectedRows, oldPageSize, oldPageStart, oldRowDataCount, oldSelectedRow, oldState, pageEnd, pageSize, pageStart, range, range$iterator, range0, range1, redrawRequired, relStart, replaceDiff, replaceValues, replacedEmptyRange, replacedRange, replacedRange$iterator, rowDataCount, rowValue, start_0, wasSelected, cacheSize, curPageSize;
  this$static.pendingStateCommand = null;
  if (this$static.isResolvingState) {
    return false;
  }
  this$static.isResolvingState = true;
  if (!this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    return false;
  }
  ++this$static.pendingStateLoop;
  if (this$static.pendingStateLoop > 10) {
    this$static.isResolvingState = false;
    this$static.pendingStateLoop = 0;
    throw toJs(new IllegalStateException_0('A possible infinite loop has been detected in a Cell Widget. This usually happens when your SelectionModel triggers a SelectionChangeEvent when SelectionModel.isSelection() is called, which causes the table to redraw continuously.'));
  }
  oldState = this$static.state;
  newState = this$static.pendingState;
  this$static.state = this$static.pendingState;
  this$static.pendingState = null;
  !modifiedRows && (modifiedRows = []);
  pageStart = newState.pageStart;
  pageSize = newState.pageSize;
  pageEnd = pageStart + pageSize;
  rowDataCount = newState.rowData.array.length;
  newState.keyboardSelectedRow = max_0(0, min_0(newState.keyboardSelectedRow, rowDataCount - 1));
  if (newState.keyboardSelectedRowChanged) {
    newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
  }
   else if (newState.keyboardSelectedRowValue != null) {
    bestMatchIndex = $findIndexOfBestMatch(newState, newState.keyboardSelectedRowValue, newState.keyboardSelectedRow);
    if (bestMatchIndex >= 0) {
      newState.keyboardSelectedRow = bestMatchIndex;
      newState.keyboardSelectedRowValue = rowDataCount > 0?$getRowDataValue(newState, newState.keyboardSelectedRow):null;
    }
     else {
      newState.keyboardSelectedRow = 0;
      newState.keyboardSelectedRowValue = null;
    }
  }
  keyboardRowChanged = newState.keyboardSelectedRowChanged || oldState.keyboardSelectedRow != newState.keyboardSelectedRow || oldState.keyboardSelectedRowValue == null && newState.keyboardSelectedRowValue != null;
  newlySelectedRows = new HashSet;
  try {
    for (i = pageStart; i < pageStart + rowDataCount; i++) {
      rowValue = $get_1(newState.rowData, i - pageStart);
      isSelected = rowValue != null && !!this$static.selectionModel && $isSelected(this$static.selectionModel, rowValue);
      wasSelected = $contains_0(oldState.selectedRows, valueOf(i));
      if (isSelected) {
        $add_8(newState.selectedRows, valueOf(i));
        $add_8(newlySelectedRows, valueOf(i));
        wasSelected || (modifiedRows[modifiedRows.length] = i , undefined);
      }
       else 
        wasSelected && (modifiedRows[modifiedRows.length] = i , undefined);
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      this$static.isResolvingState = false;
      this$static.pendingStateLoop = 0;
      throw toJs(e);
    }
     else 
      throw toJs($e0);
  }
  replacedEmptyRange = false;
  for (replacedRange$iterator = new ArrayList$1(newState.replacedRanges); replacedRange$iterator.i < replacedRange$iterator.this$01.array.length;) {
    replacedRange = castTo($next_3(replacedRange$iterator), 41);
    start_0 = replacedRange.start_0;
    length_0 = replacedRange.length_0;
    length_0 == 0 && (replacedEmptyRange = true);
    for (i = start_0; i < start_0 + length_0; i++) {
      modifiedRows[modifiedRows.length] = i;
    }
  }
  if (modifiedRows.length > 0 && keyboardRowChanged) {
    $push(modifiedRows, oldState.keyboardSelectedRow);
    $push(modifiedRows, newState.keyboardSelectedRow);
  }
  if (this$static.pendingState) {
    this$static.isResolvingState = false;
    this$static.pendingState.selectedValue = newState.selectedValue;
    $addAll(this$static.pendingState.selectedRows, newlySelectedRows);
    keyboardRowChanged && (this$static.pendingState.keyboardSelectedRowChanged = true);
    newState.keyboardStealFocus && (this$static.pendingState.keyboardStealFocus = true);
    $push(modifiedRows, oldState.keyboardSelectedRow);
    $push(modifiedRows, newState.keyboardSelectedRow);
    if ($resolvePendingState(this$static, modifiedRows)) {
      return true;
    }
  }
  modifiedRanges = $calculateModifiedRanges(modifiedRows, pageStart, pageEnd);
  range0 = modifiedRanges.array.length > 0?(checkCriticalElementIndex(0, modifiedRanges.array.length) , castTo(modifiedRanges.array[0], 41)):null;
  range1 = modifiedRanges.array.length > 1?(checkCriticalElementIndex(1, modifiedRanges.array.length) , castTo(modifiedRanges.array[1], 41)):null;
  replaceDiff = 0;
  for (range$iterator = new ArrayList$1(modifiedRanges); range$iterator.i < range$iterator.this$01.array.length;) {
    range = castTo($next_3(range$iterator), 41);
    replaceDiff += range.length_0;
  }
  oldPageStart = oldState.pageStart;
  oldPageSize = oldState.pageSize;
  oldRowDataCount = oldState.rowData.array.length;
  redrawRequired = newState.redrawRequired;
  pageStart != oldPageStart?(redrawRequired = true):rowDataCount < oldRowDataCount?(redrawRequired = true):!range1 && !!range0 && range0.start_0 == pageStart && (replaceDiff >= oldRowDataCount || replaceDiff > oldPageSize)?(redrawRequired = true):replaceDiff >= 5 && replaceDiff > 0.3 * oldRowDataCount?(redrawRequired = true):replacedEmptyRange && oldRowDataCount == 0 && (redrawRequired = true);
  cacheSize = (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length;
  curPageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact?min_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount - (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart):(!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  cacheSize >= curPageSize?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADED)):cacheSize == 0?$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , LOADING)):$setLoadingState(this$static.view, ($clinit_LoadingStateChangeEvent$LoadingState() , PARTIALLY_LOADED));
  try {
    if (redrawRequired) {
      new SafeHtmlBuilder;
      $replaceAllChildren_0(this$static.view, newState.rowData, newState.keyboardStealFocus);
      $resetFocus(this$static.view);
    }
     else if (range0) {
      absStart = range0.start_0;
      relStart = absStart - pageStart;
      new SafeHtmlBuilder;
      replaceValues = new AbstractList$SubList(newState.rowData, relStart, relStart + range0.length_0);
      $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      if (range1) {
        absStart = range1.start_0;
        relStart = absStart - pageStart;
        new SafeHtmlBuilder;
        replaceValues = new AbstractList$SubList(newState.rowData, relStart, relStart + range1.length_0);
        $replaceChildren_1(this$static.view, replaceValues, relStart, newState.keyboardStealFocus);
      }
      $resetFocus(this$static.view);
    }
     else if (keyboardRowChanged) {
      oldSelectedRow = oldState.keyboardSelectedRow;
      oldSelectedRow >= 0 && oldSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, oldSelectedRow, false, false);
      newSelectedRow = newState.keyboardSelectedRow;
      newSelectedRow >= 0 && newSelectedRow < rowDataCount && $setKeyboardSelected_0(this$static.view, newSelectedRow, true, newState.keyboardStealFocus);
    }
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 60)) {
      e = $e1;
      throw toJs(new RuntimeException_2(e));
    }
     else 
      throw toJs($e1);
  }
   finally {
    this$static.isResolvingState = false;
  }
  $resolvePendingState(this$static, null);
  return true;
}

function $scheduleFinally_0(command){
  $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), command);
}

function $setKeyboardSelectedRow_2(this$static, index_0, stealFocus, forceUpdate){
  var absIndex, newPageSize, newPageStart, pageSize, pageStart, pending, rowCount, shift_0;
  this$static.keyboardPagingPolicy.isLimitedToRange && (index_0 = max_0(0, min_0(index_0, (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length - 1)));
  $ensurePendingState(this$static).viewTouched = true;
  if (!forceUpdate && (!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRow == index_0 && (!this$static.pendingState?this$static.state:this$static.pendingState).keyboardSelectedRowValue != null) {
    return;
  }
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  rowCount = (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount;
  absIndex = pageStart + index_0;
  absIndex >= rowCount && (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact && (absIndex = rowCount - 1);
  index_0 = (0 > absIndex?0:absIndex) - pageStart;
  this$static.keyboardPagingPolicy.isLimitedToRange && (index_0 = 0 > (index_0 < pageSize - 1?index_0:pageSize - 1)?0:index_0 < pageSize - 1?index_0:pageSize - 1);
  newPageStart = pageStart;
  newPageSize = pageSize;
  pending = $ensurePendingState(this$static);
  pending.keyboardSelectedRow = 0;
  pending.keyboardSelectedRowValue = null;
  pending.keyboardSelectedRowChanged = true;
  if (index_0 >= 0 && index_0 < pageSize) {
    pending.keyboardSelectedRow = index_0;
    pending.keyboardSelectedRowValue = index_0 < pending.rowData.array.length?$getRowDataValue($ensurePendingState(this$static), index_0):null;
    pending.keyboardStealFocus = stealFocus;
    return;
  }
   else if (($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE) == this$static.keyboardPagingPolicy) {
    while (index_0 < 0) {
      shift_0 = pageSize < newPageStart?pageSize:newPageStart;
      newPageStart -= shift_0;
      index_0 += shift_0;
    }
    while (index_0 >= pageSize) {
      newPageStart += pageSize;
      index_0 -= pageSize;
    }
  }
   else if (INCREASE_RANGE == this$static.keyboardPagingPolicy) {
    while (index_0 < 0) {
      shift_0 = 30 < newPageStart?30:newPageStart;
      newPageSize += shift_0;
      newPageStart -= shift_0;
      index_0 += shift_0;
    }
    while (index_0 >= newPageSize) {
      newPageSize += 30;
    }
    if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact) {
      newPageSize = newPageSize < rowCount - newPageStart?newPageSize:rowCount - newPageStart;
      index_0 >= rowCount && (index_0 = rowCount - 1);
    }
  }
  if (newPageStart != pageStart || newPageSize != pageSize) {
    pending.keyboardSelectedRow = index_0;
    $setVisibleRange(this$static, new Range_0(newPageStart, newPageSize), false);
  }
}

function $setRowCount_0(this$static, count, isExact){
  if (count == (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount && isExact == (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact) {
    return;
  }
  $ensurePendingState(this$static).rowCount = count;
  $ensurePendingState(this$static).rowCountIsExact = isExact;
  $updateCachedData(this$static);
}

function $setRowData_0(this$static, values){
  var boundedEnd, boundedStart, cacheOffset, dataIndex, i, i0, pageEnd, pageStart, pending, value_0, valuesLength;
  valuesLength = values.size_1();
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageEnd = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart + (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  boundedStart = 0 > pageStart?0:pageStart;
  boundedEnd = valuesLength < pageEnd?valuesLength:pageEnd;
  if (0 != pageStart && boundedStart >= boundedEnd) {
    return;
  }
  pending = $ensurePendingState(this$static);
  cacheOffset = max_0(0, boundedStart - pageStart - (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length);
  for (i0 = 0; i0 < cacheOffset; i0++) {
    $add_7(pending.rowData, null);
  }
  for (i = boundedStart; i < boundedEnd; i++) {
    value_0 = values.get_1(i);
    dataIndex = i - pageStart;
    dataIndex < (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length?$set_1(pending.rowData, dataIndex, value_0):$add_7(pending.rowData, value_0);
  }
  $add_7(pending.replacedRanges, new Range_0(boundedStart - cacheOffset, boundedEnd - (boundedStart - cacheOffset)));
  valuesLength > (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount && $setRowCount_0(this$static, valuesLength, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCountIsExact);
}

function $setSelectionModel(this$static, selectionModel){
  $clearSelectionModel(this$static);
  this$static.selectionModel = selectionModel;
  this$static.selectionHandler = $addSelectionChangeHandler(selectionModel, new HasDataPresenter$1(this$static));
  $ensurePendingState(this$static);
}

function $setVisibleRange(this$static, range, clearData){
  var decrease, i, increase, length_0, pageSize, pageSizeChanged, pageStart, pageStartChanged, pending, start_0;
  start_0 = range.start_0;
  length_0 = range.length_0;
  if (start_0 < 0) {
    throw toJs(new IllegalArgumentException_0('Range start cannot be less than 0'));
  }
  if (length_0 < 0) {
    throw toJs(new IllegalArgumentException_0('Range length cannot be less than 0'));
  }
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  pageSize = (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize;
  pageStartChanged = pageStart != start_0;
  if (pageStartChanged) {
    pending = $ensurePendingState(this$static);
    if (!clearData) {
      if (start_0 > pageStart) {
        increase = start_0 - pageStart;
        if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length > increase) {
          for (i = 0; i < increase; i++) {
            $remove_8(pending.rowData, 0);
          }
        }
         else {
          pending.rowData.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
        }
      }
       else {
        decrease = pageStart - start_0;
        if ((!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length > 0 && decrease < pageSize) {
          for (i = 0; i < decrease; i++) {
            $add_6(pending.rowData, 0, null);
          }
          $add_7(pending.replacedRanges, new Range_0(start_0, start_0 + decrease - start_0));
        }
         else {
          pending.rowData.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
        }
      }
    }
    pending.pageStart = start_0;
  }
  pageSizeChanged = pageSize != length_0;
  pageSizeChanged && ($ensurePendingState(this$static).pageSize = length_0);
  clearData && ($ensurePendingState(this$static).rowData.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1));
  $updateCachedData(this$static);
  (pageStartChanged || pageSizeChanged) && new Range_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageStart, (!this$static.pendingState?this$static.state:this$static.pendingState).pageSize);
}

function $updateCachedData(this$static){
  var expectedLastIndex, lastIndex, pageStart;
  pageStart = (!this$static.pendingState?this$static.state:this$static.pendingState).pageStart;
  expectedLastIndex = max_0(0, min_0((!this$static.pendingState?this$static.state:this$static.pendingState).pageSize, (!this$static.pendingState?this$static.state:this$static.pendingState).rowCount - pageStart));
  lastIndex = (!this$static.pendingState?this$static.state:this$static.pendingState).rowData.array.length - 1;
  while (lastIndex >= expectedLastIndex) {
    $remove_8($ensurePendingState(this$static).rowData, lastIndex);
    --lastIndex;
  }
}

function HasDataPresenter(view, pageSize){
  this.keyboardPagingPolicy = ($clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy() , CHANGE_PAGE);
  this.view = view;
  this.state = new HasDataPresenter$DefaultState(pageSize);
}

function sortJsArrayInteger(array){
  array.sort(function(x_0, y_0){
    return x_0 - y_0;
  }
  );
}

defineClass(432, 1, $intern_17, HasDataPresenter);
_.fireEvent = function fireEvent_1(event_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.isResolvingState = false;
_.pendingStateLoop = 0;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter', 432);
function HasDataPresenter$1(this$0){
  this.this$01 = this$0;
}

defineClass(434, 1, $intern_6, HasDataPresenter$1);
_.onSelectionChange = function onSelectionChange_1(event_0){
  $ensurePendingState(this.this$01);
}
;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter$1_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter/1', 434);
function HasDataPresenter$2(this$0){
  this.this$01 = this$0;
}

defineClass(435, 1, {}, HasDataPresenter$2);
_.execute_1 = function execute_8(){
  this.this$01.pendingStateCommand == this && $resolvePendingState(this.this$01, null);
}
;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter$2_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter/2', 435);
function $getRowDataValue(this$static, index_0){
  return $get_1(this$static.rowData, index_0);
}

function $getRowDataValues(this$static){
  return $clinit_Collections() , new Collections$UnmodifiableRandomAccessList(this$static.rowData);
}

function HasDataPresenter$DefaultState(pageSize){
  this.rowData = new ArrayList;
  this.selectedRows = new HashSet;
  this.pageSize = pageSize;
}

defineClass(168, 1, {}, HasDataPresenter$DefaultState);
_.keyboardSelectedRow = 0;
_.keyboardSelectedRowValue = null;
_.pageSize = 0;
_.pageStart = 0;
_.rowCount = 0;
_.rowCountIsExact = false;
_.selectedValue = null;
_.viewTouched = false;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter$DefaultState_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter/DefaultState', 168);
function HasDataPresenter$PendingState(state){
  var i, rowDataSize;
  HasDataPresenter$DefaultState.call(this, state.pageSize);
  this.replacedRanges = new ArrayList;
  this.keyboardSelectedRow = state.keyboardSelectedRow;
  this.keyboardSelectedRowValue = state.keyboardSelectedRowValue;
  this.pageSize = state.pageSize;
  this.pageStart = state.pageStart;
  this.rowCount = state.rowCount;
  this.rowCountIsExact = state.rowCountIsExact;
  this.selectedValue = state.selectedValue;
  this.viewTouched = state.viewTouched;
  rowDataSize = state.rowData.array.length;
  for (i = 0; i < rowDataSize; i++) {
    $add_7(this.rowData, $get_1(state.rowData, i));
  }
}

defineClass(433, 168, {}, HasDataPresenter$PendingState);
_.keyboardSelectedRowChanged = false;
_.keyboardStealFocus = false;
_.redrawRequired = false;
var Lcom_google_gwt_user_cellview_client_HasDataPresenter$PendingState_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'HasDataPresenter/PendingState', 433);
function $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy = emptyMethod;
  CURRENT_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy('CURRENT_PAGE', 0, true);
  CHANGE_PAGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy('CHANGE_PAGE', 1, false);
  INCREASE_RANGE = new HasKeyboardPagingPolicy$KeyboardPagingPolicy('INCREASE_RANGE', 2, false);
}

function HasKeyboardPagingPolicy$KeyboardPagingPolicy(enum$name, enum$ordinal, isLimitedToRange){
  Enum.call(this, enum$name, enum$ordinal);
  this.isLimitedToRange = isLimitedToRange;
}

function values_10(){
  $clinit_HasKeyboardPagingPolicy$KeyboardPagingPolicy();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit, 1), $intern_3, 94, 0, [CURRENT_PAGE, CHANGE_PAGE, INCREASE_RANGE]);
}

defineClass(94, 4, {94:1, 3:1, 5:1, 4:1}, HasKeyboardPagingPolicy$KeyboardPagingPolicy);
_.isLimitedToRange = false;
var CHANGE_PAGE, CURRENT_PAGE, INCREASE_RANGE;
var Lcom_google_gwt_user_cellview_client_HasKeyboardPagingPolicy$KeyboardPagingPolicy_2_classLit = createForEnum('com.google.gwt.user.cellview.client', 'HasKeyboardPagingPolicy/KeyboardPagingPolicy', 94, Ljava_lang_Enum_2_classLit, values_10);
function Header(cell){
  this.cell = cell;
}

defineClass(86, 1, {86:1});
var Lcom_google_gwt_user_cellview_client_Header_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'Header', 86);
function $clinit_LoadingStateChangeEvent(){
  $clinit_LoadingStateChangeEvent = emptyMethod;
  TYPE_9 = new GwtEvent$Type;
}

function LoadingStateChangeEvent(){
  $clinit_LoadingStateChangeEvent();
}

defineClass(467, 503, {}, LoadingStateChangeEvent);
_.dispatch = function dispatch_9(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
var TYPE_9;
var Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'LoadingStateChangeEvent', 467);
function $clinit_LoadingStateChangeEvent$LoadingState(){
  $clinit_LoadingStateChangeEvent$LoadingState = emptyMethod;
  LOADING = new LoadingStateChangeEvent$DefaultLoadingState;
  PARTIALLY_LOADED = new LoadingStateChangeEvent$DefaultLoadingState;
  LOADED = new LoadingStateChangeEvent$DefaultLoadingState;
}

var LOADED, LOADING, PARTIALLY_LOADED;
function LoadingStateChangeEvent$DefaultLoadingState(){
}

defineClass(127, 1, {}, LoadingStateChangeEvent$DefaultLoadingState);
var Lcom_google_gwt_user_cellview_client_LoadingStateChangeEvent$DefaultLoadingState_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'LoadingStateChangeEvent/DefaultLoadingState', 127);
function TextHeader(text_0){
  Header.call(this, new TextCell);
  this.text_0 = text_0;
}

defineClass(48, 86, {86:1}, TextHeader);
var Lcom_google_gwt_user_cellview_client_TextHeader_2_classLit = createForClass('com.google.gwt.user.cellview.client', 'TextHeader', 48);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplMozilla();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent_0(evt){
  $clinit_DOM();
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }
  return ret;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setIntStyleAttribute(elem, attr, value_0){
  $clinit_DOM();
  elem.style[attr] = '' + value_0;
}

function sinkBitlessEvent(elem, eventTypeName){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE_10 && (TYPE_10 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler_0(handlers_0, TYPE_10, handler);
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function sinkEvents(elem){
  $clinit_DOM();
  $sinkEvents_1(elem, 32768);
}

var handlers_0;
function $dispatch_2(this$static, handler){
  $onPreviewNativeEvent(handler, this$static);
  singleton.isFirstHandler = false;
}

function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_10 && !!handlers && $isEventHandled(handlers, TYPE_10)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent_0(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(238, 503, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_10(handler){
  $dispatch_2(this, castTo(handler, 537));
}
;
_.getAssociatedType = function getAssociatedType_11(){
  return TYPE_10;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_10, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 238);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_5?TYPE_5:(TYPE_5 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_6 && (TYPE_6 = new GwtEvent$Type) , TYPE_6), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent_0(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize_1(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_2((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_11 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(224, 503, {}, Window$ClosingEvent);
_.dispatch = function dispatch_11(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_12(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 224);
function assign(newURL){
  $wnd.location.assign(newURL);
}

function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(115, 80, $intern_17, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 115);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return $intern_29;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return $intern_30;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_24;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_25;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_31;
    case 'gesturechange':
      return $intern_32;
    case 'gestureend':
      return $intern_33;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem_0();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 19)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $getChildIndex(parent_0, toFind){
  var count = 0, child = parent_0.firstChild;
  while (child) {
    if (child === toFind) {
      return count;
    }
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return -1;
}

function $initEventSystem_0(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $insertChild(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkBitlessEvent_0(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & $intern_29 && (elem.onscroll = bits & $intern_29?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & $intern_30 && (elem.onmousewheel = bits & $intern_30?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_24 && (elem.onpaste = bits & $intern_24?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_25 && (elem.ontouchend = bits & $intern_25?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_31 && (elem.ongesturestart = bits & $intern_31?dispatchEvent_1:null);
  chMask & $intern_32 && (elem.ongesturechange = bits & $intern_32?dispatchEvent_1:null);
  chMask & $intern_33 && (elem.ongestureend = bits & $intern_33?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  previewEvent_0(evt);
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  !previewEvent_0(evt);
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function $clinit_DOMImplMozilla(){
  $clinit_DOMImplMozilla = emptyMethod;
  $clinit_DOMImplStandard();
  captureEventDispatchers['DOMMouseScroll'] = dispatchCapturedMouseEvent;
}

function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = ($clinit_DOMImplStandard() , captureElem);
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
}

function $sinkEvents_1(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & $intern_30 && elem.addEventListener('DOMMouseScroll', ($clinit_DOMImplStandard() , dispatchEvent_1), false);
}

function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize_1();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_0(msg){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function IncompatibleRemoteServiceException_1(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

defineClass(103, 8, $intern_9, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 103);
function deserialize_14(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_14(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize_10(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause){
  RuntimeException_1.call(this, s, cause);
}

defineClass(90, 8, $intern_9, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 90);
function $create(this$static, serviceEntryPoint){
  this$static.builder = new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', ($clinit_Impl() , $strongName));
  $setHeader(rb, 'X-GWT-Module-Base', getModuleBaseURL());
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0){
  rb.requestData = data_0;
}

function $finish_1(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static){
  $setHeader(this$static.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function $setRequestData(this$static, data_0){
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder(){
}

defineClass(408, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 408);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(310, 8, $intern_9, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 310);
function deserialize_15(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_15(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception.call(this, msg);
}

defineClass(68, 73, {68:1, 3:1, 7:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 68);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(236, 90, $intern_9, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 236);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(420, 90, $intern_9, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 420);
function serialize_11(streamWriter, instance){
  $writeString(streamWriter, instance.$_nullField);
}

function deserialize_16(streamReader, instance){
}

function instantiate_16(streamReader){
  return Number(streamReader.results[--streamReader.index_0]);
}

function serialize_12(streamWriter, instance){
  $writeDouble(streamWriter, (checkCriticalNotNull(instance) , instance));
}

function deserialize_17(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_17(streamReader){
  return new IllegalArgumentException;
}

function deserialize_18(streamReader, instance){
}

function instantiate_18(streamReader){
  return valueOf(streamReader.results[--streamReader.index_0]);
}

function serialize_13(streamWriter, instance){
  $writeInt(streamWriter, instance.value_0);
}

function deserialize_19(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_19(streamReader){
  return new NumberFormatException;
}

function deserialize_20(streamReader, instance){
  var itemIndex;
  for (itemIndex = 0; itemIndex < instance.length; ++itemIndex) {
    setCheck(instance, itemIndex, $readObject(streamReader));
  }
}

function serialize_14(streamWriter, instance){
  var itemCount, itemIndex;
  itemCount = instance.length;
  append(streamWriter.encodeBuffer, '' + itemCount);
  for (itemIndex = 0; itemIndex < itemCount; ++itemIndex) {
    $writeObject(streamWriter, instance[itemIndex]);
  }
}

function deserialize_21(streamReader, instance){
}

function instantiate_20(streamReader){
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
}

function serialize_15(streamWriter, instance){
  $append_0(streamWriter, '' + $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function deserialize_22(streamReader, instance){
}

function instantiate_21(streamReader){
  return new Date_2($readLong(streamReader));
}

function serialize_16(streamWriter, instance){
  $append_0(streamWriter, longToBase64(fromDouble_0(instance.jsdate.getTime())));
}

function deserialize_23(streamReader, instance){
}

function instantiate_22(streamReader){
  return new Time($readLong(streamReader));
}

function serialize_17(streamWriter, instance){
  $append_0(streamWriter, longToBase64(fromDouble_0(instance.jsdate.getTime())));
}

function deserialize_24(streamReader, instance){
  $setNanos(instance, streamReader.results[--streamReader.index_0]);
}

function instantiate_23(streamReader){
  return new Timestamp($readLong(streamReader));
}

function serialize_18(streamWriter, instance){
  $append_0(streamWriter, longToBase64(fromDouble_0(instance.jsdate.getTime())));
  $writeInt(streamWriter, instance.nanos);
}

function deserialize_25(streamReader, instance){
  deserialize_27(streamReader, instance);
}

function serialize_19(streamWriter, instance){
  serialize_21(streamWriter, instance);
}

function instantiate_24(streamReader){
  return new ArrayList;
}

function deserialize_26(streamReader, instance){
}

function instantiate_25(streamReader){
  var array, i, size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, size_0, 5, 1);
  for (i = 0; i < size_0; ++i) {
    array[i] = $readObject(streamReader);
  }
  return new Arrays$ArrayList(array);
}

function serialize_20(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = instance.iterator(); obj$iterator.hasNext_0();) {
    obj = obj$iterator.next_1();
    $writeObject(streamWriter, obj);
  }
}

function deserialize_27(streamReader, instance){
  var i, obj, size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  for (i = 0; i < size_0; ++i) {
    obj = $readObject(streamReader);
    instance.add_0(obj);
  }
}

function serialize_21(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = instance.iterator(); obj$iterator.hasNext_0();) {
    obj = obj$iterator.next_1();
    $writeObject(streamWriter, obj);
  }
}

function deserialize_28(streamReader, instance){
}

function instantiate_26(streamReader){
  return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
}

function serialize_22(streamWriter, instance){
}

function deserialize_29(streamReader, instance){
}

function instantiate_27(streamReader){
  return $clinit_Collections() , new Collections$SingletonList($readObject(streamReader));
}

function serialize_23(streamWriter, instance){
  $writeObject(streamWriter, instance.get_1(0));
}

function deserialize_30(streamReader, instance){
}

function instantiate_28(streamReader){
  return new Date_1($readLong(streamReader));
}

function serialize_24(streamWriter, instance){
  $append_0(streamWriter, longToBase64(instance.getTime_0()));
}

function deserialize_31(streamReader, instance){
  deserialize_27(streamReader, instance);
}

function serialize_25(streamWriter, instance){
  serialize_21(streamWriter, instance);
}

function instantiate_29(streamReader){
  return new LinkedList;
}

function deserialize_32(streamReader, instance){
  deserialize_27(streamReader, instance);
}

function instantiate_30(streamReader){
  return new Stack;
}

function serialize_26(streamWriter, instance){
  serialize_21(streamWriter, instance);
}

function deserialize_33(streamReader, instance){
  deserialize_27(streamReader, instance);
}

function serialize_27(streamWriter, instance){
  serialize_21(streamWriter, instance);
}

function instantiate_31(streamReader){
  return new Vector;
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

function base64Append(sb, digit, haveNonZero){
  var c;
  digit > 0 && (haveNonZero = true);
  if (haveNonZero) {
    digit < 26?(c = 65 + digit):digit < 52?(c = 97 + digit - 26):digit < 62?(c = 48 + digit - 52):digit == 62?(c = 36):(c = 95);
    sb.string += String.fromCharCode(c & 65535);
  }
  return haveNonZero;
}

function base64Value(digit){
  if (digit >= 65 && digit <= 90) {
    return digit - 65;
  }
  if (digit >= 97) {
    return digit - 97 + 26;
  }
  if (digit >= 48 && digit <= 57) {
    return digit - 48 + 52;
  }
  if (digit == 36) {
    return 62;
  }
  return 63;
}

function longFromBase64(value_0){
  var len, longVal, pos;
  pos = 0;
  longVal = base64Value($charAt(value_0, pos++));
  len = value_0.length;
  while (pos < len) {
    longVal = createLongEmul(shl(isSmallLong0(longVal)?toBigLong(longVal):longVal, 6));
    longVal = or_0(longVal, base64Value($charAt(value_0, pos++)));
  }
  return longVal;
}

function longToBase64(value_0){
  var haveNonZero, high, low, sb, v;
  low = toInt(createLongEmul(and(isSmallLong0(value_0)?toBigLong(value_0):value_0, isSmallLong0(-1)?toBigLong(-1):-1)));
  high = toInt(createLongEmul(shr(isSmallLong0(value_0)?toBigLong(value_0):value_0, 32)));
  sb = new StringBuilder;
  haveNonZero = base64Append(sb, high >> 28 & 15, false);
  haveNonZero = base64Append(sb, high >> 22 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 16 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 10 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 4 & 63, haveNonZero);
  v = (high & 15) << 2 | low >> 30 & 3;
  haveNonZero = base64Append(sb, v, haveNonZero);
  haveNonZero = base64Append(sb, low >> 24 & 63, haveNonZero);
  haveNonZero = base64Append(sb, low >> 18 & 63, haveNonZero);
  haveNonZero = base64Append(sb, low >> 12 & 63, haveNonZero);
  base64Append(sb, low >> 6 & 63, haveNonZero);
  base64Append(sb, low & 63, true);
  return sb.string;
}

defineClass(160, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 160);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = this$static.results[--this$static.index_0];
  if (token < 0) {
    return $get_1(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_7(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set_1(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(438, 160, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 438);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = castTo($getStringValue(this$static.stringMap, string), 36);
  if (o) {
    return o.value_0;
  }
  $add_7(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  $putStringValue(this$static.stringMap, string, valueOf(index_0));
  return index_0;
}

function $writeBoolean(this$static, fieldValue){
  append(this$static.encodeBuffer, fieldValue?'1':'0');
}

function $writeDouble(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeObject(this$static, instance){
  var objIndex, typeSignature;
  if (instance == null) {
    $append_0(this$static, '' + $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)?castTo($get_0(this$static.objectMap, instance), 36).value_0:-1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, '' + -(objIndex + 1));
    return;
  }
  $put_0(this$static.objectMap, instance, valueOf(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw toJs(new SerializationException('could not get type signature for ' + getClass__Ljava_lang_Class___devirtual$(instance)));
  }
  $append_0(this$static, '' + $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0){
  $append_0(this$static, '' + $addString(this$static, value_0));
}

defineClass(343, 160, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 343);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  var versionStr;
  versionStr = $substring_0(encoded, encoded.lastIndexOf(',') + 1, encoded.lastIndexOf(']'));
  __parseAndValidateInt($trim(versionStr)) < 8?(this$static.results = eval(encoded)):(this$static.results = safeEval(encoded));
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
  $setVersion(this$static, this$static.results[--this$static.index_0]);
  $setFlags(this$static, this$static.results[--this$static.index_0]);
  if (this$static.version < 5 || this$static.version > 8) {
    throw toJs(new IncompatibleRemoteServiceException_0('Got version ' + this$static.version + ', expected version between ' + 5 + ' and ' + 8));
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw toJs(new IncompatibleRemoteServiceException_0('Got an unknown flag from server: ' + this$static.flags));
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readBoolean(this$static){
  return !!this$static.results[--this$static.index_0];
}

function $readLong(this$static){
  var s = this$static.results[--this$static.index_0];
  return longFromBase64(s);
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(439, 438, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 439);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $append_0(this$static, token){
  append(this$static.encodeBuffer, token);
}

function $getObjectTypeSignature(this$static, o){
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 4)) {
    e = castTo(o, 4);
    clazz = (clazz_0 = e.___clazz , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString_2(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_3(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new ArrayList$1(stringTable); s$iterator.i < s$iterator.this$01.array.length;) {
    s = castToString($next_3(s$iterator));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(serializer, moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap;
  this.stringMap = new HashMap;
  this.stringTable = new ArrayList;
  this.serializer = serializer;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  sb.string += '' + token;
  sb.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(344, 343, {}, ClientSerializationStreamWriter);
_.toString_0 = function toString_12(){
  return $toString_2(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 344);
function $finish_2(this$static, callback){
  var payload;
  payload = $toString_2(this$static.streamWriter);
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function $start_0(this$static){
  var toReturn;
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'begin'));
  this$static.streamWriter = (toReturn = $createStreamWriter(this$static.this$01) , toReturn);
  $writeString(this$static.streamWriter, 'com.elektrimasinad.aho.client.DeviceTreeService');
  $writeString(this$static.streamWriter, this$static.methodName);
  $writeInt(this$static.streamWriter, 1);
  return this$static.streamWriter;
}

function RemoteServiceProxy$ServiceHelper(this$0, methodName){
  this.this$01 = this$0;
  this.fullServiceName = 'DeviceTreeService_Proxy.' + methodName;
  this.methodName = methodName;
  this.statsContext = new RpcStatsContext;
}

defineClass(101, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 101);
function $onError(this$static, exception){
  this$static.callback.onFailure(exception);
}

function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = response.xmlHttpRequest.status;
    !!$stats && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals(encodedResponse.substr(0, 4), '//OK')?(result = $readObject($createStreamReader(this$static.streamFactory, encodedResponse))):$equals(encodedResponse.substr(0, 4), '//EX')?(caught = castTo($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 7)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 68)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 7)) {
      e = $e0;
      caught = e;
    }
     else 
      throw toJs($e0);
  }
   finally {
    !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?this$static.callback.onSuccess(result):this$static.callback.onFailure(caught);
  }
   finally {
    !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter(streamFactory, methodName, statsContext, callback){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
}

defineClass(316, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 316);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE_0 = new RequestCallbackAdapter$ResponseReader$4;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5;
  INT = new RequestCallbackAdapter$ResponseReader$6;
  LONG = new RequestCallbackAdapter$ResponseReader$7;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8;
  SHORT = new RequestCallbackAdapter$ResponseReader$9;
  STRING = new RequestCallbackAdapter$ResponseReader$10;
  VOID = new RequestCallbackAdapter$ResponseReader$11;
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_3, 18, 0, [BOOLEAN, BYTE, CHAR, DOUBLE_0, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(18, 4, $intern_34);
var BOOLEAN, BYTE, CHAR, DOUBLE_0, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 18, Ljava_lang_Enum_2_classLit, values_11);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(317, 18, $intern_34, RequestCallbackAdapter$ResponseReader$1);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 317, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(326, 18, $intern_34, RequestCallbackAdapter$ResponseReader$10);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 326, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(327, 18, $intern_34, RequestCallbackAdapter$ResponseReader$11);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 327, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(318, 18, $intern_34, RequestCallbackAdapter$ResponseReader$2);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 318, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(319, 18, $intern_34, RequestCallbackAdapter$ResponseReader$3);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 319, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(320, 18, $intern_34, RequestCallbackAdapter$ResponseReader$4);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 320, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(321, 18, $intern_34, RequestCallbackAdapter$ResponseReader$5);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 321, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(322, 18, $intern_34, RequestCallbackAdapter$ResponseReader$6);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 322, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(323, 18, $intern_34, RequestCallbackAdapter$ResponseReader$7);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 323, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(324, 18, $intern_34, RequestCallbackAdapter$ResponseReader$8);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 324, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(325, 18, $intern_34, RequestCallbackAdapter$ResponseReader$9);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 325, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $stats_0(data_0){
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:($clinit_Impl() , $moduleName), sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext(){
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId){
  this.requestId = requestId;
}

defineClass(159, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 159);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature){
  this$static[signature][2](stream, instance);
}

function $add_1(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function $add_2(this$static, w, left, top_0){
  var beforeIndex;
  $removeFromParent(w);
  beforeIndex = this$static.children.size_0;
  $setWidgetPositionImpl(w, left, top_0);
  $insert(this$static, w, ($clinit_DOM() , this$static.element), beforeIndex);
}

function $setWidgetPositionImpl(w, left, top_0){
  var h;
  h = ($clinit_DOM() , w.element);
  if (left == -1 && top_0 == -1) {
    changeToStaticPositioning(h);
  }
   else {
    h.style['position'] = 'absolute';
    h.style['left'] = left + 'px';
    h.style['top'] = top_0 + 'px';
  }
}

function AbsolutePanel(){
  AbsolutePanel_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
  this.element.style['position'] = 'relative';
  this.element.style['overflow'] = 'hidden';
}

function AbsolutePanel_0(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(97, 114, $intern_2, AbsolutePanel);
_.remove = function remove_3(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 97);
function create_1(resource){
  return new ClippedImagePrototype(resource.url_0, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
}

defineClass(529, 1, {});
var Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbstractImagePrototype', 529);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = castTo(w$iterator.next_1(), 12);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put_0(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(216, 145, $intern_18, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 216);
function AttachDetachException$1(){
}

defineClass(217, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_9(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 217);
function AttachDetachException$2(){
}

defineClass(218, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_10(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 218);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

defineClass(418, 12, $intern_1);
_.onAttach = function onAttach_1(){
  var tabIndex;
  $onAttach(this);
  tabIndex = ($clinit_DOM() , this.element).tabIndex;
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 418);
function ButtonBase(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(419, 418, $intern_1);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 419);
function Button(handler){
  var e;
  $clinit_FocusWidget();
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.type = 'button' , e));
  ($clinit_DOM() , this.element).className = 'gwt-Button';
  this.element.innerHTML = 'Logi v\xE4lja';
  $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(109, 419, $intern_1, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 109);
function $add_3(this$static, w){
  var container, container_0, element;
  container = (container_0 = ($clinit_DOM() , $doc.createElement('div')) , container_0.style['width'] = '100%' , undefined , container_0.style['height'] = '0px' , undefined , container_0.style['padding'] = '0px' , undefined , container_0.style['margin'] = '0px' , undefined , container_0);
  $appendChild(this$static.element, resolve(container));
  $add(this$static, w, container);
  setVisible(container, false);
  container.style['height'] = '100%';
  element = w.element;
  $equals(element.style['width'], '') && w.setWidth('100%');
  $equals(element.style['height'], '') && w.setHeight('100%');
  setVisible(w.element, false);
}

function $showWidget(this$static, index_0){
  var oldWidget;
  $checkIndexBoundsForAccess(this$static, index_0);
  oldWidget = this$static.visibleWidget;
  this$static.visibleWidget = $get(this$static.children, index_0);
  if (this$static.visibleWidget != oldWidget) {
    !slideAnimation && (slideAnimation = new DeckPanel$SlideAnimation);
    $showWidget_0(slideAnimation, oldWidget, this$static.visibleWidget);
  }
}

function DeckPanel(){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , $doc.createElement('div')));
}

defineClass(107, 114, $intern_2, DeckPanel);
_.remove = function remove_4(w){
  var container, removed;
  container = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  if (removed) {
    w.setSize('', '');
    setVisible(w.element, true);
    $removeChild(this.element, container);
    this.visibleWidget == w && (this.visibleWidget = null);
  }
  return removed;
}
;
var slideAnimation;
var Lcom_google_gwt_user_client_ui_DeckPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckPanel', 107);
function $onUpdate(this$static, progress){
  var height1, height2;
  this$static.growing || (progress = 1 - progress);
  if (this$static.fixedHeight == -1) {
    height1 = round_int(progress * $getPropertyInt(this$static.container1, 'scrollHeight'));
    height2 = round_int((1 - progress) * $getPropertyInt(this$static.container2, 'scrollHeight'));
  }
   else {
    height1 = round_int(progress * this$static.fixedHeight);
    height2 = this$static.fixedHeight - height1;
  }
  if (height1 == 0) {
    height1 = 1;
    height2 = 1 > height2 - 1?1:height2 - 1;
  }
   else if (height2 == 0) {
    height2 = 1;
    height1 = 1 > height1 - 1?1:height1 - 1;
  }
  this$static.container1.style['height'] = height1 + 'px';
  this$static.container2.style['height'] = height2 + 'px';
}

function $showWidget_0(this$static, oldWidget, newWidget){
  var newContainer, newIndex, oldContainer, oldIndex;
  $cancel(this$static);
  newContainer = ($clinit_DOM() , $clinit_DOM() , $getParentElement(newWidget.element));
  newIndex = $getChildIndex($getParentElement(newContainer), newContainer);
  if (!oldWidget) {
    setVisible(newContainer, true);
    setVisible(newWidget.element, true);
    return;
  }
  this$static.oldWidget = oldWidget;
  oldContainer = (null , $getParentElement(oldWidget.element));
  oldIndex = $getChildIndex($getParentElement(oldContainer), oldContainer);
  if (newIndex > oldIndex) {
    this$static.container1 = oldContainer;
    this$static.container2 = newContainer;
    this$static.growing = false;
  }
   else {
    this$static.container1 = newContainer;
    this$static.container2 = oldContainer;
    this$static.growing = true;
  }
  setVisible(this$static.container1, this$static.growing);
  setVisible(this$static.container2, !this$static.growing);
  this$static.container1 = null;
  this$static.container2 = null;
  $setVisible(this$static.oldWidget);
  this$static.oldWidget = null;
  setVisible(newWidget.element, true);
}

function DeckPanel$SlideAnimation(){
  Animation.call(this);
}

defineClass(230, 116, {}, DeckPanel$SlideAnimation);
_.onComplete = function onComplete_0(){
  if (this.growing) {
    this.container1.style['height'] = '100%';
    setVisible(this.container1, true);
    setVisible(this.container2, false);
    this.container2.style['height'] = '100%';
  }
   else {
    setVisible(this.container1, false);
    this.container1.style['height'] = '100%';
    this.container2.style['height'] = '100%';
    setVisible(this.container2, true);
  }
  this.container1.style['overflow'] = 'visible';
  this.container2.style['overflow'] = 'visible';
  this.container1 = null;
  this.container2 = null;
  $setVisible(this.oldWidget);
  this.oldWidget = null;
}
;
_.onStart = function onStart_0(){
  this.container1.style['overflow'] = 'hidden';
  this.container2.style['overflow'] = 'hidden';
  $onUpdate(this, 0);
  setVisible(this.container1, true);
  setVisible(this.container2, true);
}
;
_.onUpdate = function onUpdate(progress){
  $onUpdate(this, progress);
}
;
_.container1 = null;
_.container2 = null;
_.fixedHeight = -1;
_.growing = false;
_.oldWidget = null;
var Lcom_google_gwt_user_client_ui_DeckPanel$SlideAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckPanel/SlideAnimation', 230);
function $setTextOrHtml(this$static, content_0){
  $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(421, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 421);
function $remove_2(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM() , w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && $remove_2(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(this$static.getContainerElement(), resolve($getElement(this$static.widget)));
    $setParent(w, this$static);
  }
}

function SimplePanel(){
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
}

function SimplePanel_0(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(104, 519, $intern_2, SimplePanel);
_.getContainerElement = function getContainerElement(){
  return $clinit_DOM() , this.element;
}
;
_.iterator = function iterator_2(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_5(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 104);
function $clinit_FocusPanel(){
  $clinit_FocusPanel = emptyMethod;
  $clinit_FocusImpl();
}

defineClass(502, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 502);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(98, 502, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 98);
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(110, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 110);
function $add_4(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_DOM() , $doc.createElement('td')) , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = ($clinit_DOM() , $doc.createElement('tr'));
  $appendChild(this.body_0, resolve(this.tableRow));
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

defineClass(179, 144, $intern_2, HorizontalPanel);
_.remove = function remove_6(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 179);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $setAltText(this$static, altText){
  $setAlt(this$static.state.getImageElement(this$static), altText);
}

function Image_0(resource){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState_0(this, resource.url_0, resource.width_0, resource.height_0));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

function Image_1(url_0){
  $changeState(this, new Image$UnclippedState(this, url_0));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

function Image_2(url_0, left, top_0, width_0, height){
  $clinit_Image();
  $changeState(this, new Image$ClippedState(this, url_0, left, top_0, width_0, height));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

function Image_3(url_0){
  $clinit_Image();
  Image_1.call(this, ($clinit_UriUtils() , new SafeUriString(url_0)));
}

defineClass(77, 12, $intern_1, Image_0, Image_2, Image_3);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  $clinit_DOM();
  if ($eventGetTypeInt(event_0.type) == 32768) {
    !!this.state && (this.state.getImageElement(this)['__gwtLastUnhandledEvent'] = '' , undefined);
    this.state.onLoadEvent(this);
  }
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 77);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(this$static.getImageElement(image), '__gwtLastUnhandledEvent');
  $equals('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(146, 1, {});
_.onLoadEvent = function onLoadEvent(image){
}
;
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 146);
function $clinit_Image$ClippedState(){
  $clinit_Image$ClippedState = emptyMethod;
  $clinit_ClippedImageImpl();
}

function Image$ClippedState(image, url_0, left, top_0, width_0, height){
  $clinit_Image$ClippedState();
  this.width_0 = width_0;
  $replaceElement(image, $createStructure(url_0, left, top_0, width_0, height));
  image.eventsToSink == -1?($clinit_DOM() , $sinkEvents_1(image.element, 133333119 | (image.element.__eventBits || 0))):(image.eventsToSink |= 133333119);
}

defineClass(222, 146, {}, Image$ClippedState);
_.getImageElement = function getImageElement(image){
  return $clinit_DOM() , image.element;
}
;
_.getWidth = function getWidth(image){
  return this.width_0;
}
;
_.onLoadEvent = function onLoadEvent_0(image){
}
;
_.width_0 = 0;
var Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/ClippedState', 222);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(223, 1, {}, Image$State$1);
_.execute_1 = function execute_11(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    this.this$11.getImageElement(this.val$image2)['__gwtLastUnhandledEvent'] = 'load';
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent(this.this$11.getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 223);
function Image$UnclippedState(image, url_0){
  $replaceElement(image, $doc.createElement('img'));
  sinkEvents(($clinit_DOM() , image.element));
  image.eventsToSink == -1?$sinkEvents_1(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
  !!image.state && (image.state.getImageElement(image)['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(image.element, url_0.uri_0);
}

function Image$UnclippedState_0(image, url_0, width_0, height){
  Image$UnclippedState.call(this, image, url_0);
  $setWidth_0(($clinit_DOM() , image.element), width_0);
  $setHeight_0(image.element, height);
}

defineClass(100, 146, {}, Image$UnclippedState, Image$UnclippedState_0);
_.getImageElement = function getImageElement_0(image){
  return $clinit_DOM() , image.element;
}
;
_.getWidth = function getWidth_0(image){
  return ($clinit_DOM() , image.element).width;
}
;
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 100);
function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(162, 12, $intern_1);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 162);
function Label(text_0){
  LabelBase.call(this, $doc.createElement('div'));
  ($clinit_DOM() , this.element).className = 'gwt-Label';
  $setTextOrHtml(this.directionalTextHelper, text_0);
}

defineClass(78, 162, $intern_1, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 78);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  AbsolutePanel_0.call(this, elem);
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_12(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(){
  $clinit_RootPanel();
  var rp;
  rp = castTo($get_0(rootPanels, null), 99);
  if (rp) {
    return rp;
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_0(rootPanels, null, rp);
  $add_8(widgetsToDetach, rp);
  return rp;
}

defineClass(99, 97, $intern_35);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 99);
function RootPanel$1(){
}

defineClass(220, 1, {}, RootPanel$1);
_.execute_2 = function execute_12(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 220);
function RootPanel$2(){
}

defineClass(221, 1, {535:1, 33:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 221);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(219, 99, $intern_35, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 219);
function $getMaximumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?0:((scrollable.scrollWidth || 0) | 0) - (scrollable.clientWidth | 0);
}

function $getMinimumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?(scrollable.clientWidth | 0) - ((scrollable.scrollWidth || 0) | 0):0;
}

function $isRtl(scrollable){
  var computedStyle = $doc.defaultView.getComputedStyle(scrollable, null);
  return computedStyle.getPropertyValue('direction') == 'rtl';
}

function ScrollImpl(){
}

defineClass(126, 1, {}, ScrollImpl);
var impl_1;
var Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollImpl', 126);
function $getHorizontalScrollPosition(this$static){
  return $getScrollLeft(($clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumHorizontalScrollPosition_0(this$static){
  return $getMaximumHorizontalScrollPosition((!impl_1 && (impl_1 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumVerticalScrollPosition(this$static){
  return ((($clinit_DOM() , this$static.scrollableElem).scrollHeight || 0) | 0) - (this$static.scrollableElem.clientHeight | 0);
}

function $getMinimumHorizontalScrollPosition_0(this$static){
  return $getMinimumHorizontalScrollPosition((!impl_1 && (impl_1 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getVerticalScrollPosition(this$static){
  return (($clinit_DOM() , this$static.scrollableElem).scrollTop || 0) | 0;
}

function $setHorizontalScrollPosition(this$static, position){
  $setScrollLeft(($clinit_DOM() , this$static.scrollableElem), position);
}

function $setTouchScrollingDisabled(this$static){
  var scroller, ua;
  if (this$static.touchScroller) {
    return false;
  }
  this$static.touchScroller = (scroller = (isSupported == null && (isSupported = ($clinit_Boolean() , !impl && (impl = new TouchEvent$TouchSupportDetector) , impl.isSupported && !(ua = navigator.userAgent.toLowerCase() , /android ([3-9]+)\.([0-9]+)/.exec(ua) != null)?true:false)) , checkNotNull(isSupported)?new TouchScroller:null) , !!scroller && $setTargetWidget(scroller, this$static) , scroller);
  return !this$static.touchScroller;
}

function $setVerticalScrollPosition(this$static, position){
  $setScrollTop(($clinit_DOM() , this$static.scrollableElem), position);
}

function ScrollPanel(child){
  SimplePanel.call(this);
  this.scrollableElem = ($clinit_DOM() , this.element);
  this.containerElem = $doc.createElement('div');
  $appendChild(this.scrollableElem, this.containerElem);
  this.scrollableElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  this.scrollableElem.style['position'] = ($clinit_Style$Position() , 'relative');
  this.containerElem.style['position'] = 'relative';
  this.scrollableElem.style['zoom'] = '1';
  this.containerElem.style['zoom'] = '1';
  $setTouchScrollingDisabled(this);
  !impl_1 && (impl_1 = new ScrollImpl);
  $setWidget(this, child);
}

defineClass(108, 104, $intern_2, ScrollPanel);
_.getContainerElement = function getContainerElement_0(){
  return $clinit_DOM() , this.containerElem;
}
;
_.onAttach = function onAttach_2(){
  $onAttach(this);
  $clinit_DOM();
  this.scrollableElem.__listener = this;
}
;
_.onDetach = function onDetach_1(){
  $clinit_DOM();
  this.scrollableElem.__listener = null;
  $onDetach(this);
}
;
_.setHeight = function setHeight_0(height){
  ($clinit_DOM() , this.element).style['height'] = height;
}
;
_.setSize = function setSize_0(width_0, height){
  ($clinit_DOM() , this.element).style['width'] = width_0;
  this.element.style['height'] = height;
}
;
_.setWidth = function setWidth_0(width_0){
  ($clinit_DOM() , this.element).style['width'] = width_0;
}
;
var Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollPanel', 108);
function $forEachRemaining(this$static, consumer){
  checkCriticalNotNull(consumer);
  while (this$static.hasNext_0()) {
    $accept_0(consumer, this$static.next_1());
  }
}

function $next(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw toJs(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(342, 1, {}, SimplePanel$1);
_.forEachRemaining = function forEachRemaining(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.hasElement;
}
;
_.remove_0 = function remove_7(){
  !!this.returned && $remove_2(this.this$01, this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 342);
function Tree$ImageAdapter(){
  this.treeClosed = create_1(($clinit_Tree_Resources_default_InlineClientBundleGenerator$treeClosedInitializer() , treeClosed));
  this.treeLeaf = create_1(($clinit_Tree_Resources_default_InlineClientBundleGenerator$treeLeafInitializer() , treeLeaf));
  this.treeOpen = create_1(($clinit_Tree_Resources_default_InlineClientBundleGenerator$treeOpenInitializer() , treeOpen));
}

defineClass(150, 1, {}, Tree$ImageAdapter);
var Lcom_google_gwt_user_client_ui_Tree$ImageAdapter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Tree/ImageAdapter', 150);
function $clinit_TreeItem(){
  $clinit_TreeItem = emptyMethod;
  itemAnimation = new TreeItem$TreeItemAnimation;
  new TreeItem$TreeItemImpl;
}

function $addItem(this$static, item_0){
  (!!item_0.parent_0 || !!item_0.tree) && (item_0.parent_0?$removeItem_0(item_0.parent_0, item_0):!!item_0.tree && $removeItem(item_0.tree, item_0));
  $insertItem(this$static, $getChildCount(this$static), item_0);
}

function $getChild_0(this$static, index_0){
  if (index_0 < 0 || index_0 >= $getChildCount(this$static)) {
    return null;
  }
  return castTo($get_1(this$static.children, index_0), 58);
}

function $getChildCount(this$static){
  if (!this$static.children) {
    return 0;
  }
  return this$static.children.array.length;
}

function $getChildIndex_0(this$static, child){
  if (!this$static.children) {
    return -1;
  }
  return $indexOf_1(this$static.children, child, 0);
}

function $initChildren(this$static){
  $convertToFullNode(this$static);
  this$static.childSpanElem = ($clinit_DOM() , $doc.createElement('div'));
  $appendChild(this$static.element, resolve(this$static.childSpanElem));
  this$static.childSpanElem.style['whiteSpace'] = 'nowrap';
  this$static.children = new ArrayList;
}

function $insertItem(this$static, beforeIndex, item_0){
  var beforeElem, childContainer, childCount, margin;
  (!!item_0.parent_0 || !!item_0.tree) && (item_0.parent_0?$removeItem_0(item_0.parent_0, item_0):!!item_0.tree && $removeItem(item_0.tree, item_0));
  childCount = $getChildCount(this$static);
  if (beforeIndex < 0 || beforeIndex > childCount) {
    throw toJs(new IndexOutOfBoundsException);
  }
  !this$static.children && $initChildren(this$static);
  margin = this$static.isRoot?0:16;
  ($clinit_DOM() , item_0.element).style['marginLeft'] = margin + ($clinit_Style$Unit() , 'px');
  childContainer = this$static.isRoot?$getElement(this$static.tree):this$static.childSpanElem;
  if (beforeIndex == childCount) {
    $appendChild(childContainer, item_0.element);
  }
   else {
    beforeElem = $getElement($getChild_0(this$static, beforeIndex));
    $insertBefore(childContainer, item_0.element, beforeElem);
  }
  $setParentItem(item_0, this$static.isRoot?null:this$static);
  $add_6(this$static.children, beforeIndex, item_0);
  $setTree(item_0, this$static.tree);
  !this$static.isRoot && this$static.children.array.length == 1 && $updateState_0(this$static, false, false);
}

function $removeItem_0(this$static, item_0){
  var oldTree;
  if (!this$static.children || $indexOf_1(this$static.children, item_0, 0) == -1) {
    return;
  }
  oldTree = this$static.tree;
  $setTree(item_0, null);
  this$static.isRoot?$removeChild(($clinit_DOM() , oldTree.element), item_0.element):$removeChild(this$static.childSpanElem, ($clinit_DOM() , item_0.element));
  item_0.parent_0 = null;
  $remove_9(this$static.children, item_0);
  !this$static.isRoot && this$static.children.array.length == 0 && $updateState_0(this$static, false, false);
}

function $removeItems(this$static){
  while ($getChildCount(this$static) > 0) {
    $removeItem_0(this$static, $getChild_0(this$static, 0));
  }
}

function $setParentItem(this$static, parent_0){
  this$static.parent_0 = parent_0;
}

function $setSelected(this$static, selected){
  if (this$static.selected == selected) {
    return;
  }
  this$static.selected = selected;
  setStyleName(this$static.contentElem, 'gwt-TreeItem-selected', selected);
}

function $setState(this$static, open_0, fireEvents){
  if (open_0 && $getChildCount(this$static) == 0) {
    return;
  }
  if (this$static.open_0 != open_0) {
    this$static.open_0 = open_0;
    $updateState_0(this$static, true, true);
    fireEvents && !!this$static.tree && $fireStateChanged(this$static.tree, open_0);
  }
}

function $setText(this$static, text_0){
  this$static.contentElem.innerHTML = '';
  $setInnerText(this$static.contentElem, text_0);
}

function $setTree(this$static, newTree){
  var i, n;
  if (this$static.tree == newTree) {
    return;
  }
  !!this$static.tree && this$static.tree.curSelection == this$static && $setSelectedItem(this$static.tree, null);
  this$static.tree = newTree;
  for (i = 0 , n = $getChildCount(this$static); i < n; ++i) {
    $setTree(castTo($get_1(this$static.children, i), 58), newTree);
  }
  $updateState_0(this$static, false, true);
}

function $updateState_0(this$static, animate, updateTreeSelection){
  if (!this$static.tree || !this$static.tree.attached) {
    return;
  }
  if ($getChildCount(this$static) == 0) {
    !!this$static.childSpanElem && setVisible(this$static.childSpanElem, false);
    $showLeafImage(this$static.tree, this$static);
    return;
  }
  animate && !!this$static.tree && this$static.tree.attached?$setItemState(itemAnimation, this$static):$setItemState(itemAnimation, this$static);
  this$static.open_0?$showOpenImage(this$static.tree, this$static):$showClosedImage(this$static.tree, this$static);
  updateTreeSelection && $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
}

function $updateStateRecursive(this$static){
  $updateStateRecursiveHelper(this$static);
  $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
}

function $updateStateRecursiveHelper(this$static){
  var i, n;
  $updateState_0(this$static, false, false);
  for (i = 0 , n = $getChildCount(this$static); i < n; ++i) {
    $updateStateRecursiveHelper(castTo($get_1(this$static.children, i), 58));
  }
}

function TreeItem(){
  $clinit_TreeItem();
  TreeItem_0.call(this, false);
}

function TreeItem_0(isRoot){
  $clinit_TreeItem();
  var elem;
  this.isRoot = isRoot;
  elem = ($clinit_DOM() , BASE_BARE_ELEM.cloneNode(true));
  $setElement_0(this, elem);
  this.contentElem = $getFirstChildElement(elem);
  $setAttribute(this.contentElem, 'id', $createUniqueId($doc));
  isRoot && $initChildren(this);
}

defineClass(58, 15, {16:1, 58:1, 15:1}, TreeItem, TreeItem_0);
_.isRoot = false;
_.open_0 = false;
_.selected = false;
var BASE_BARE_ELEM, BASE_INTERNAL_ELEM, itemAnimation;
var Lcom_google_gwt_user_client_ui_TreeItem_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeItem', 58);
function $onUpdate_0(this$static, progress){
  var height, scrollWidth;
  height = round_int(progress * this$static.scrollHeight_0);
  this$static.opening || (height = this$static.scrollHeight_0 - height);
  height = height > 1?height:1;
  this$static.curItem.childSpanElem.style['height'] = height + 'px';
  scrollWidth = $getPropertyInt(this$static.curItem.childSpanElem, 'scrollWidth');
  this$static.curItem.childSpanElem.style['width'] = scrollWidth + 'px';
}

function $setItemState(this$static, item_0){
  $cancel(this$static);
  setVisible(item_0.childSpanElem, item_0.open_0);
}

function TreeItem$TreeItemAnimation(){
  Animation.call(this);
}

defineClass(337, 116, {}, TreeItem$TreeItemAnimation);
_.onComplete = function onComplete_1(){
  if (this.curItem) {
    if (this.opening) {
      setVisible(this.curItem.childSpanElem, true);
      $onUpdate_0(this, 1);
      this.curItem.childSpanElem.style['height'] = 'auto';
    }
     else {
      setVisible(this.curItem.childSpanElem, false);
    }
    this.curItem.childSpanElem.style['overflow'] = 'visible';
    this.curItem.childSpanElem.style['width'] = 'auto';
    this.curItem = null;
  }
}
;
_.onStart = function onStart_1(){
  this.scrollHeight_0 = 0;
  this.opening || (this.scrollHeight_0 = (this.curItem.childSpanElem.scrollHeight || 0) | 0);
  this.curItem.childSpanElem.style['overflow'] = 'hidden';
  $onUpdate_0(this, (1 + $wnd.Math.cos($intern_8)) / 2);
  if (this.opening) {
    setVisible(this.curItem.childSpanElem, true);
    this.scrollHeight_0 = (this.curItem.childSpanElem.scrollHeight || 0) | 0;
  }
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate_0(this, progress);
}
;
_.curItem = null;
_.opening = true;
_.scrollHeight_0 = 0;
var Lcom_google_gwt_user_client_ui_TreeItem$TreeItemAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeItem/TreeItemAnimation', 337);
function $convertToFullNode(item_0){
  var itemTable, tdContent, tdImg, tr;
  if (!item_0.imageHolder) {
    itemTable = ($clinit_DOM() , ($clinit_TreeItem() , BASE_INTERNAL_ELEM).cloneNode(true));
    $appendChild(item_0.element, resolve(itemTable));
    tr = (null , $getFirstChildElement((null , $getFirstChildElement(itemTable))));
    tdImg = (null , $getFirstChildElement(tr));
    tdContent = tdImg.nextSibling;
    item_0.element.style['padding'] = '0px';
    $appendChild(tdContent, resolve(item_0.contentElem));
    item_0.imageHolder = tdImg;
  }
}

function $initializeClonableElements(){
  var contentElem, tbody, tdContent, tdImg, tr;
  $clinit_TreeItem();
  BASE_INTERNAL_ELEM = ($clinit_DOM() , $doc.createElement('table'));
  contentElem = $doc.createElement('div');
  tbody = $doc.createElement('tbody');
  tr = $doc.createElement('tr');
  tdImg = $doc.createElement('td');
  tdContent = $doc.createElement('td');
  $appendChild(BASE_INTERNAL_ELEM, resolve(tbody));
  $appendChild(tbody, resolve(tr));
  $appendChild(tr, resolve(tdImg));
  $appendChild(tr, resolve(tdContent));
  tdImg.style['verticalAlign'] = 'middle';
  tdContent.style['verticalAlign'] = 'middle';
  $appendChild(tdContent, resolve(contentElem));
  contentElem.style['display'] = 'inline';
  contentElem.className = 'gwt-TreeItem';
  BASE_INTERNAL_ELEM.style['whiteSpace'] = 'nowrap';
  BASE_BARE_ELEM = $doc.createElement('div');
  BASE_BARE_ELEM.style['padding'] = '3px';
  $appendChild(BASE_BARE_ELEM, resolve(contentElem));
  $clinit_Roles();
  $set(TREEITEM, contentElem);
}

function TreeItem$TreeItemImpl(){
  $initializeClonableElements();
}

defineClass(336, 1, {}, TreeItem$TreeItemImpl);
var Lcom_google_gwt_user_client_ui_TreeItem$TreeItemImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TreeItem/TreeItemImpl', 336);
var treeClosed, treeLeaf, treeOpen;
function $clinit_Tree_Resources_default_InlineClientBundleGenerator$treeClosedInitializer(){
  $clinit_Tree_Resources_default_InlineClientBundleGenerator$treeClosedInitializer = emptyMethod;
  treeClosed = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/gif;base64,R0lGODlhEAAQAIQaAFhorldnrquz1mFxsvz9/vr6/M3Q2ZGbw5mixvb3+Gp5t2Nys77F4GRzs9ze4mt6uGV1s8/R2VZnrl5usFdortPV2/P09+3u8eXm6lZnrf///wAAzP///////////////yH5BAEAAB8ALAAAAAAQABAAAAVE4CeOZGmeaKquo5K974MuTKHdhDCcgOVvvoTkRLkYN8bL0ETBbJ5PTIaIqW6q0lPAYcVOTRNEpEI2HCYoCOzVYLnf7hAAOw==')), 16, 16);
}

function $clinit_Tree_Resources_default_InlineClientBundleGenerator$treeLeafInitializer(){
  $clinit_Tree_Resources_default_InlineClientBundleGenerator$treeLeafInitializer = emptyMethod;
  treeLeaf = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/gif;base64,R0lGODlhEAAQAJEAAP///wAAAP///wAAACH5BAEAAAIALAAAAAAQABAAAAIOlI+py+0Po5y02ouzPgUAOw==')), 16, 16);
}

function $clinit_Tree_Resources_default_InlineClientBundleGenerator$treeOpenInitializer(){
  $clinit_Tree_Resources_default_InlineClientBundleGenerator$treeOpenInitializer = emptyMethod;
  treeOpen = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/gif;base64,R0lGODlhEAAQAIQaAFhorldnrquz1mFxsvz9/vr6/M3Q2ZGbw5mixvb3+Gp5t2Nys77F4GRzs9ze4mt6uGV1s8/R2VZnrl5usFdortPV2/P09+3u8eXm6lZnrf///wAAzP///////////////yH5BAEAAB8ALAAAAAAQABAAAAVD4CeOZGmeaKquo5K974MuTKHdhDCcgOVfvoTkRLkYj5ehiYLZOJ2YDBFDvVCjp4CjepWaJohIZWw4TFAQ2KvBarvbIQA7')), 16, 16);
}

function $add_5(this$static, w){
  $insert_0(this$static, w, this$static.size_0);
}

function $get(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  return this$static.array[index_0];
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_0(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 12, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_3(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_4(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_3(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 12, 4, 0, 1);
}

defineClass(306, 1, {}, WidgetCollection);
_.iterator = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 306);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(154, 1, {}, WidgetCollection$WidgetIterator);
_.forEachRemaining = function forEachRemaining_0(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.remove_0 = function remove_8(){
  if (!this.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this.this$01.parent_0.remove(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 154);
function copyWidgetArray(widgets){
  var clone, i;
  clone = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 12, widgets.length, 0, 1);
  for (i = 0; i < widgets.length; i++) {
    clone[i] = widgets[i];
  }
  return clone;
}

function $gotoNextIndex(this$static){
  ++this$static.index_0;
  while (this$static.index_0 < this$static.val$contained1.length) {
    if (this$static.val$contained1[this$static.index_0]) {
      return;
    }
    ++this$static.index_0;
  }
}

function $next_1(this$static){
  var w;
  if (this$static.index_0 >= this$static.val$contained1.length) {
    throw toJs(new NoSuchElementException);
  }
  this$static.last = this$static.index_0;
  w = this$static.val$contained1[this$static.index_0];
  $gotoNextIndex(this$static);
  return w;
}

function WidgetIterators$1(val$contained, val$container){
  this.val$contained1 = val$contained;
  this.val$container2 = val$container;
  this.widgets = this.val$contained1;
  $gotoNextIndex(this);
}

defineClass(338, 1, {}, WidgetIterators$1);
_.forEachRemaining = function forEachRemaining_1(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_2(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.index_0 < this.val$contained1.length;
}
;
_.remove_0 = function remove_9(){
  if (this.last < 0) {
    throw toJs(new IllegalStateException);
  }
  if (!this.widgetsWasCopied) {
    this.widgets = copyWidgetArray(this.widgets);
    this.widgetsWasCopied = true;
  }
  $remove_0(this.val$container2, this.val$contained1[this.last]);
  this.last = -1;
}
;
_.index_0 = -1;
_.last = -1;
_.widgetsWasCopied = false;
var Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetIterators/1', 338);
function $clinit_ClippedImageImpl(){
  $clinit_ClippedImageImpl = emptyMethod;
  clearImage = ($clinit_UriUtils() , new SafeUriString(getModuleBaseURL() + 'clear.cache.gif'));
}

function $adjust(img, url_0, left, top_0, width_0, height){
  var style;
  style = 'url("' + url_0.uri_0 + '") no-repeat ' + (-left + 'px ') + (-top_0 + 'px');
  img.style['background'] = style;
  img.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  img.style['height'] = height + 'px';
}

function $createStructure(url_0, left, top_0, width_0, height){
  var tmp;
  tmp = $doc.createElement('span');
  $setInnerHTML(tmp, $getSafeHtml(url_0, left, top_0, width_0, height).html);
  return $getFirstChildElement(tmp);
}

function $getSafeHtml(url_0, left, top_0, width_0, height){
  var builder;
  builder = new SafeStylesBuilder;
  $append($append($append(builder, new SafeStylesString('width:' + width_0 + ($clinit_Style$Unit() , 'px') + ';')), new SafeStylesString('height:' + height + 'px' + ';')), new SafeStylesString('background:' + ('url(' + url_0.uri_0 + ') ' + 'no-repeat ' + (-left + 'px ') + (-top_0 + 'px')) + ';'));
  return !template_0 && (template_0 = new ClippedImageImpl_TemplateImpl) , $image(clearImage, new SafeStylesString((new SafeStylesString(builder.sb.string)).css));
}

var clearImage, template_0;
function $image(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<img onload='this.__gwtLastUnhandledEvent=\"load\";' src='";
  $append_3(sb, htmlEscape(arg0.uri_0));
  sb.string += "' style='";
  $append_3(sb, htmlEscape(arg1.css));
  sb.string += "' border='0'>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function ClippedImageImpl_TemplateImpl(){
}

defineClass(442, 1, {}, ClippedImageImpl_TemplateImpl);
var Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImageImpl_TemplateImpl', 442);
function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = emptyMethod;
  $clinit_ClippedImageImpl();
}

function $createImage(this$static){
  return new Image_2(this$static.url_0, this$static.left_0, this$static.top_0, this$static.width_0, this$static.height_0);
}

function ClippedImagePrototype(url_0, left, top_0, width_0, height){
  $clinit_ClippedImagePrototype();
  this.url_0 = url_0;
  this.left_0 = left;
  this.top_0 = top_0;
  this.width_0 = width_0;
  this.height_0 = height;
}

defineClass(409, 529, {}, ClippedImagePrototype);
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url_0 = null;
_.width_0 = 0;
var Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImagePrototype', 409);
function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplStandard;
  implWidget = implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(341, 1, {}, FocusImpl);
_.setAccessKey = function setAccessKey(elem, key){
  elem.accessKey = String.fromCharCode(key);
}
;
var implPanel, implWidget;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImpl', 341);
function $createFocusHandler(){
  return function(evt){
    var div = this.parentNode;
    div.onfocus && $wnd.setTimeout(function(){
      div.focus();
    }
    , 0);
  }
  ;
}

function FocusImplStandard(){
}

function createFocusable0(focusHandler){
  $clinit_FocusImpl();
  var div = $doc.createElement('div');
  div.tabIndex = 0;
  var input_0 = $doc.createElement('input');
  input_0.type = 'text';
  input_0.tabIndex = -1;
  input_0.setAttribute('role', 'presentation');
  var style = input_0.style;
  style.opacity = 0;
  style.height = '1px';
  style.width = '1px';
  style.zIndex = -1;
  style.overflow = 'hidden';
  style.position = 'absolute';
  input_0.addEventListener('focus', focusHandler, false);
  div.appendChild(input_0);
  return div;
}

defineClass(410, 341, {}, FocusImplStandard);
_.setAccessKey = function setAccessKey_0(elem, key){
  elem.firstChild.accessKey = String.fromCharCode(key);
}
;
var focusHandler_0;
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplStandard', 410);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('gecko1_8', runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(60, 7, $intern_36);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 60);
defineClass(38, 60, $intern_36);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 38);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_8('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7):null);
}

defineClass(176, 38, $intern_36, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 176);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function CellPreviewEvent(nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled){
  this.nativeEvent = nativeEvent;
  this.display_0 = display;
  this.context = context;
  this.value_0 = value_0;
  this.isCellEditing = isCellEditing;
  this.isSelectionHandled = isSelectionHandled;
}

function fire_4(source, nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled){
  var event_0;
  event_0 = new CellPreviewEvent(nativeEvent, display, context, value_0, isCellEditing, isSelectionHandled);
  !!TYPE_12 && !!source.handlerManager && $fireEvent_0(source.handlerManager, event_0);
  return event_0;
}

defineClass(431, 503, {}, CellPreviewEvent);
_.dispatch = function dispatch_12(handler){
  castTo(handler, 174).onCellPreview(this);
}
;
_.getAssociatedType = function getAssociatedType_13(){
  return TYPE_12;
}
;
_.isCanceled = false;
_.isCellEditing = false;
_.isSelectionHandled = false;
var TYPE_12;
var Lcom_google_gwt_view_client_CellPreviewEvent_2_classLit = createForClass('com.google.gwt.view.client', 'CellPreviewEvent', 431);
function $handleSelectionEvent(event_0, action, selectionModel){
  var keyCode, nativeEvent, type_0, value_0;
  value_0 = event_0.value_0;
  if (action) {
    switch (action.ordinal) {
      case 4:
        return;
      case 1:
        $setSelected_0(selectionModel, value_0, true);
        return;
      case 2:
        $setSelected_0(selectionModel, value_0, false);
        return;
      case 3:
        $setSelected_0(selectionModel, value_0, !$isSelected(selectionModel, value_0));
        return;
    }
  }
  nativeEvent = event_0.nativeEvent;
  type_0 = nativeEvent.type;
  if ($equals('click', type_0)) {
    !!nativeEvent.ctrlKey || !!nativeEvent.metaKey?$setSelected_0(selectionModel, value_0, !$isSelected(selectionModel, value_0)):$setSelected_0(selectionModel, value_0, true);
  }
   else if ($equals('keyup', type_0)) {
    keyCode = nativeEvent.keyCode | 0;
    keyCode == 32 && $setSelected_0(selectionModel, value_0, !$isSelected(selectionModel, value_0));
  }
}

function DefaultSelectionEventManager(){
}

defineClass(480, 1, $intern_28, DefaultSelectionEventManager);
_.onCellPreview = function onCellPreview_1(event_0){
  var action, display, selectionModel;
  if (event_0.isCellEditing || event_0.isSelectionHandled) {
    return;
  }
  display = event_0.display_0;
  selectionModel = display.presenter.selectionModel;
  if (!selectionModel) {
    return;
  }
  action = ($clinit_DefaultSelectionEventManager$SelectAction() , DEFAULT_0);
  $handleSelectionEvent(event_0, action, selectionModel);
}
;
var Lcom_google_gwt_view_client_DefaultSelectionEventManager_2_classLit = createForClass('com.google.gwt.view.client', 'DefaultSelectionEventManager', 480);
function $clinit_DefaultSelectionEventManager$SelectAction(){
  $clinit_DefaultSelectionEventManager$SelectAction = emptyMethod;
  DEFAULT_0 = new DefaultSelectionEventManager$SelectAction('DEFAULT', 0);
  SELECT = new DefaultSelectionEventManager$SelectAction('SELECT', 1);
  DESELECT = new DefaultSelectionEventManager$SelectAction('DESELECT', 2);
  TOGGLE = new DefaultSelectionEventManager$SelectAction('TOGGLE', 3);
  IGNORE = new DefaultSelectionEventManager$SelectAction('IGNORE', 4);
}

function DefaultSelectionEventManager$SelectAction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_DefaultSelectionEventManager$SelectAction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit, 1), $intern_3, 76, 0, [DEFAULT_0, SELECT, DESELECT, TOGGLE, IGNORE]);
}

defineClass(76, 4, {76:1, 3:1, 5:1, 4:1}, DefaultSelectionEventManager$SelectAction);
var DEFAULT_0, DESELECT, IGNORE, SELECT, TOGGLE;
var Lcom_google_gwt_view_client_DefaultSelectionEventManager$SelectAction_2_classLit = createForEnum('com.google.gwt.view.client', 'DefaultSelectionEventManager/SelectAction', 76, Ljava_lang_Enum_2_classLit, values_12);
function Range_0(start_0, length_0){
  this.start_0 = start_0;
  this.length_0 = length_0;
}

defineClass(41, 1, {41:1, 3:1}, Range_0);
_.equals_0 = function equals_9(o){
  var r;
  if (!instanceOf(o, 41)) {
    return false;
  }
  r = castTo(o, 41);
  return this.start_0 == r.start_0 && this.length_0 == r.length_0;
}
;
_.hashCode_0 = function hashCode_10(){
  return this.length_0 * 31 ^ this.start_0;
}
;
_.toString_0 = function toString_13(){
  return 'Range(' + this.start_0 + ',' + this.length_0 + ')';
}
;
_.length_0 = 0;
_.start_0 = 0;
var Lcom_google_gwt_view_client_Range_2_classLit = createForClass('com.google.gwt.view.client', 'Range', 41);
function SelectionChangeEvent(){
}

function fire_5(source){
  var event_0;
  if (TYPE_13) {
    event_0 = new SelectionChangeEvent;
    $fireEvent_0(source.handlerManager, event_0);
  }
}

defineClass(206, 503, {}, SelectionChangeEvent);
_.dispatch = function dispatch_13(handler){
  castTo(handler, 138).onSelectionChange(this);
}
;
_.getAssociatedType = function getAssociatedType_14(){
  return TYPE_13;
}
;
var TYPE_13;
var Lcom_google_gwt_view_client_SelectionChangeEvent_2_classLit = createForClass('com.google.gwt.view.client', 'SelectionChangeEvent', 206);
function $addSelectionChangeHandler(this$static, handler){
  return $addHandler_0(this$static.handlerManager, (!TYPE_13 && (TYPE_13 = new GwtEvent$Type) , TYPE_13), handler);
}

function $scheduleSelectionChangeEvent(this$static){
  this$static.isEventCancelled = false;
  if (!this$static.isEventScheduled) {
    this$static.isEventScheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new SelectionModel$AbstractSelectionModel$1(this$static));
  }
}

defineClass(436, 1, $intern_17);
_.fireEvent = function fireEvent_2(event_0){
  $fireEvent_0(this.handlerManager, event_0);
}
;
_.isEventCancelled = false;
_.isEventScheduled = false;
var Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel_2_classLit = createForClass('com.google.gwt.view.client', 'SelectionModel/AbstractSelectionModel', 436);
function SelectionModel$AbstractSelectionModel$1(this$1){
  this.this$11 = this$1;
}

defineClass(437, 1, {}, SelectionModel$AbstractSelectionModel$1);
_.execute_1 = function execute_13(){
  this.this$11.isEventScheduled = false;
  if (this.this$11.isEventCancelled) {
    this.this$11.isEventCancelled = false;
    return;
  }
  $fireSelectionChangeEvent(this.this$11);
}
;
var Lcom_google_gwt_view_client_SelectionModel$AbstractSelectionModel$1_2_classLit = createForClass('com.google.gwt.view.client', 'SelectionModel/AbstractSelectionModel/1', 437);
function $equalsOrBothNull(a, b){
  return a == null?b == null:equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function $fireSelectionChangeEvent(this$static){
  this$static.isEventScheduled && (this$static.isEventCancelled = true);
  $resolveChanges(this$static);
}

function $getSelectedObject(this$static){
  $resolveChanges(this$static);
  return this$static.curSelection;
}

function $isSelected(this$static, item_0){
  $resolveChanges(this$static);
  if (this$static.curSelection == null || this$static.curKey == null || item_0 == null) {
    return false;
  }
  return equals_Ljava_lang_Object__Z__devirtual$(this$static.curKey, item_0);
}

function $resolveChanges(this$static){
  var changed, key, sameKey;
  if (!this$static.newSelectedPending) {
    return;
  }
  key = this$static.newSelectedItem;
  sameKey = $equalsOrBothNull(this$static.curKey, key);
  changed = false;
  if (this$static.newSelected) {
    changed = !sameKey;
    this$static.curSelection = this$static.newSelectedItem;
    this$static.curKey = key;
  }
   else if (sameKey) {
    changed = true;
    this$static.curSelection = null;
    this$static.curKey = null;
  }
  this$static.newSelectedItem = null;
  this$static.newSelectedPending = false;
  changed && fire_5(this$static);
}

function $setSelected_0(this$static, item_0, selected){
  var oldKey;
  if (!selected) {
    oldKey = this$static.newSelectedPending?this$static.newSelectedItem:this$static.curKey;
    if (!(oldKey == null?item_0 == null:equals_Ljava_lang_Object__Z__devirtual$(oldKey, item_0))) {
      return;
    }
  }
  this$static.newSelectedItem = item_0;
  this$static.newSelected = selected;
  this$static.newSelectedPending = true;
  $scheduleSelectionChangeEvent(this$static);
}

function SingleSelectionModel(){
  this.handlerManager = new HandlerManager(this);
}

defineClass(132, 436, $intern_17, SingleSelectionModel);
_.newSelected = false;
_.newSelectedItem = null;
_.newSelectedPending = false;
var Lcom_google_gwt_view_client_SingleSelectionModel_2_classLit = createForClass('com.google.gwt.view.client', 'SingleSelectionModel', 132);
function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(227, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 227);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(228, 1, {497:1}, SimpleEventBus$2);
_.execute_1 = function execute_14(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 228);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(229, 1, {497:1}, SimpleEventBus$3);
_.execute_1 = function execute_15(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 229);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(140, 1, {177:1});
_.toString_0 = function toString_14(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 140);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(233, 8, $intern_9, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 233);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(37, 8, $intern_9, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 37);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

function ArrayIndexOutOfBoundsException_0(msg){
  IndexOutOfBoundsException_0.call(this, msg);
}

defineClass(163, 37, $intern_9, ArrayIndexOutOfBoundsException, ArrayIndexOutOfBoundsException_0);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 163);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(232, 8, $intern_9, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 232);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  $clinit_Boolean();
}

function $compareTo_0(this$static, b){
  return compare_2((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_2(x_0, y_0){
  $clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  $clinit_Boolean();
  return instanceOfString(this$static)?$compareTo_3(this$static, castToString(other)):instanceOfDouble(this$static)?$compareTo_1(this$static, castToDouble(other)):instanceOfBoolean(this$static)?$compareTo_0(this$static, (checkCriticalType(other == null || instanceOfBoolean(other)) , other)):this$static.compareTo(other);
}

booleanCastMap = {3:1, 208:1, 5:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 208);
function digit_0(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(210, 8, $intern_9, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 210);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException_0('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit_0(s.charCodeAt(i)) == -1) {
      throw toJs(new NumberFormatException_0('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_21;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException_0('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(new NumberFormatException_0('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(111, 1, {3:1, 111:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 111);
function $compareTo_1(this$static, b){
  return compare_3((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(b) , b));
}

function compare_3(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

doubleCastMap = {3:1, 5:1, 209:1, 111:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 209);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(24, 8, $intern_9, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 24);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(17, 8, $intern_9, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 17);
function $compareTo_2(this$static, b){
  return compare_4(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_4(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - $intern_29;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(36, 111, {3:1, 5:1, 36:1, 111:1}, Integer);
_.compareTo = function compareTo_2(b){
  return $compareTo_2(this, castTo(b, 36));
}
;
_.equals_0 = function equals_10(o){
  return instanceOf(o, 36) && castTo(o, 36).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_11(){
  return this.value_0;
}
;
_.toString_0 = function toString_16(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 36);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_3, 36, 256, 0, 1);
}

var boxedValues;
function compare_5(x_0, y_0){
  return compare_1(x_0, y_0) < 0?-1:compare_1(x_0, y_0) > 0?1:0;
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(54, 112, $intern_9, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 54);
function NumberFormatException(){
  IllegalArgumentException.call(this);
}

function NumberFormatException_0(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(65, 24, {3:1, 65:1, 8:1, 7:1}, NumberFormatException, NumberFormatException_0);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 65);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $compareTo_3(this$static, other){
  return compare_7((checkCriticalNotNull(this$static) , this$static), (checkCriticalNotNull(other) , other));
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  checkCriticalNotNull(this$static);
  if (other == null) {
    return false;
  }
  if ($equals(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && $equals(this$static.toLowerCase(), other.toLowerCase());
}

function $replace_0(this$static, to){
  var replacement;
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, 'index', replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toLowerCase(this$static, locale){
  return locale == ($clinit_Locale() , $clinit_Locale() , defaultLocale)?this$static.toLocaleLowerCase():this$static.toLowerCase();
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

stringCastMap = {3:1, 177:1, 5:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_1(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $replace_1(this$static, start_0, toInsert){
  this$static.string = $substring_0(this$static.string, 0, start_0) + toInsert + this$static.string.substr(9);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(29, 140, {177:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 29);
defineClass(570, 1, {});
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(20, 8, {3:1, 8:1, 7:1, 20:1}, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 20);
function Date_2(date){
  Date_1.call(this, date);
}

defineClass(311, 39, $intern_20, Date_2);
_.toString_0 = function toString_17(){
  return '' + (1900 + (this.jsdate.getFullYear() - 1900)) + '-' + padTwo(this.jsdate.getMonth() + 1) + '-' + padTwo(this.jsdate.getDate());
}
;
var Ljava_sql_Date_2_classLit = createForClass('java.sql', 'Date', 311);
function Time(time){
  Date_1.call(this, time);
}

defineClass(312, 39, $intern_20, Time);
_.getDate_0 = function getDate_0(){
  throw toJs(new IllegalArgumentException);
}
;
_.getMonth_0 = function getMonth_0(){
  throw toJs(new IllegalArgumentException);
}
;
_.getYear = function getYear_0(){
  throw toJs(new IllegalArgumentException);
}
;
_.toString_0 = function toString_18(){
  return padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds());
}
;
var Ljava_sql_Time_2_classLit = createForClass('java.sql', 'Time', 312);
function $compareTo_4(this$static, o){
  var cmp;
  cmp = compare_5(fromDouble_0(this$static.jsdate.getTime()), fromDouble_0(o.jsdate.getTime()));
  return cmp == 0?compare_4(this$static.nanos, o.nanos):cmp;
}

function $equals_0(this$static, ts){
  return !!ts && eq(fromDouble_0(this$static.jsdate.getTime()), fromDouble_0(ts.jsdate.getTime())) && this$static.nanos == ts.nanos;
}

function $setNanos(this$static, n){
  if (n < 0 || n > 999999999) {
    throw toJs(new IllegalArgumentException_0('nanos out of range ' + n));
  }
  this$static.nanos = n;
  $setTime(this$static, add_2(mul_0(div_0(fromDouble_0(this$static.jsdate.getTime()), 1000), 1000), this$static.nanos / 1000000 | 0));
}

function Timestamp(time){
  Date_1.call(this, time);
  this.nanos = toInt(mod(time, 1000)) * 1000000;
}

function padNine(value_0){
  var asString, toReturn;
  toReturn = new StringBuilder_0('000000000');
  asString = '' + value_0;
  toReturn = $replace_1(toReturn, 9 - asString.length, asString);
  return toReturn.string;
}

defineClass(75, 39, {3:1, 5:1, 75:1, 39:1}, Timestamp);
_.compareTo_0 = function compareTo_3(o){
  return instanceOf(o, 75)?$compareTo_4(this, castTo(o, 75)):$compareTo_4(this, new Timestamp(o.getTime_0()));
}
;
_.equals_0 = function equals_11(ts){
  return instanceOf(ts, 75) && $equals_0(this, castTo(ts, 75));
}
;
_.getTime_0 = function getTime_0(){
  return fromDouble_0(this.jsdate.getTime());
}
;
_.hashCode_0 = function hashCode_12(){
  var time;
  return time = fromDouble_0(this.jsdate.getTime()) , toInt(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_19(){
  return '' + (1900 + (this.jsdate.getFullYear() - 1900)) + '-' + padTwo(1 + this.jsdate.getMonth()) + '-' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + '.' + padNine(this.nanos);
}
;
_.nanos = 0;
var Ljava_sql_Timestamp_2_classLit = createForClass('java.sql', 'Timestamp', 75);
function $addAll(this$static, c){
  var changed, e, e$iterator, old;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    changed = changed | (old = $put_0(this$static.map_0, e, this$static) , old == null);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $toArray(this$static, a){
  var i, it, result, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = (result = new Array(size_0) , stampJavaTypeInfo_0(result, a)));
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_1());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

function $toString_3(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_9(joiner, e === this$static?'(this Collection)':e == null?'null':toString_8(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(517, 1, {28:1});
_.spliterator_0 = function spliterator_0(){
  return new Spliterators$IteratorSpliterator(this, 0);
}
;
_.stream = function stream_0(){
  return new StreamImpl(null, this.spliterator_0());
}
;
_.add_0 = function add_3(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty_0 = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_10(o){
  return $advanceToFind(this, o, true);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_0(a){
  return $toArray(this, a);
}
;
_.toString_0 = function toString_20(){
  return $toString_3(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 517);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue_0();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator(this$static.entrySet().this$01); iter.hasNext;) {
    entry = $next_2(iter);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue_0());
        $remove_6(iter);
      }
      return entry;
    }
  }
  return null;
}

function $toString_4(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_8(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue_0();
}

defineClass(521, 1, {64:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals_0 = function equals_12(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 64)) {
    return false;
  }
  otherMap = castTo(obj, 64);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_2(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_18(this.entrySet());
}
;
_.isEmpty_0 = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_2 = function remove_11(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_1(){
  return $size(this.entrySet().this$01);
}
;
_.toString_0 = function toString_21(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(this.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_2(entry$iterator);
    $add_9(joiner, $toString_4(this, entry.getKey()) + '=' + $toString_4(this, entry.getValue_0()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 521);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0){
  return $containsValue_0(this$static, value_0, this$static.stringMap) || $containsValue_0(this$static, value_0, this$static.hashCodeMap);
}

function $containsValue_0(this$static, value_0, entries){
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_1(), 51);
    if (this$static.equals_1(value_0, entry.getValue_0())) {
      return true;
    }
  }
  return false;
}

function $get_0(this$static, key){
  return instanceOfString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_2(this$static.stringMap, key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_1(this$static.stringMap, key);
}

function $put_0(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):$put_2(this$static.stringMap, key, value_0);
}

function $remove_5(this$static, key){
  return instanceOfString(key)?key == null?$remove_13(this$static.hashCodeMap, null):$remove_14(this$static.stringMap, key):$remove_13(this$static.hashCodeMap, key);
}

function $reset(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

function AbstractHashMap(){
  $reset(this);
}

defineClass(147, 521, {64:1});
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put_0(this, key, value_0);
}
;
_.remove_2 = function remove_12(key){
  return $remove_5(this, key);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 147);
defineClass(522, 517, $intern_37);
_.spliterator_0 = function spliterator_1(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_13(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 95)) {
    return false;
  }
  other = castTo(o, 95);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_18(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 522);
function $contains(this$static, o){
  if (instanceOf(o, 51)) {
    return $containsEntry(this$static.this$01, castTo(o, 51));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(67, 522, $intern_37, AbstractHashMap$EntrySet);
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_4(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_1 = function remove_13(entry){
  var key;
  if ($contains(this, entry)) {
    key = castTo(entry, 51).getKey();
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 67);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_2(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = castTo(this$static.current.next_1(), 51);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_6(this$static){
  var modCount;
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  modCount = this$static.this$01['_gwt_modCount'];
  this$static['_gwt_modCount'] = modCount;
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(45, 1, {}, AbstractHashMap$EntrySetIterator);
_.forEachRemaining = function forEachRemaining_2(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_3(){
  return $next_2(this);
}
;
_.hasNext_0 = function hasNext_2(){
  return this.hasNext;
}
;
_.remove_0 = function remove_14(){
  $remove_6(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 45);
function $sort_0(this$static, c){
  var a, i;
  a = this$static.toArray();
  mergeSort(a, 0, a.length, c);
  for (i = 0; i < a.length; i++) {
    this$static.set_0(i, a[i]);
  }
}

function $equals_1(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 14)) {
    return false;
  }
  other = castTo(o, 14);
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_23(toFind, this$static.get_1(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(518, 517, $intern_38);
_.sort_0 = function sort_0(c){
  $sort_0(this, c);
}
;
_.spliterator_0 = function spliterator_2(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.add_1 = function add_4(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_5(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_14(o){
  return $equals_1(this, o);
}
;
_.hashCode_0 = function hashCode_15(){
  return hashCode_19(this);
}
;
_.iterator = function iterator_5(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_3 = function remove_15(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
_.set_0 = function set_1(index_0, o){
  throw toJs(new UnsupportedOperationException_0('Set not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 518);
function $remove_7(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_3(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(142, 1, {}, AbstractList$IteratorImpl);
_.forEachRemaining = function forEachRemaining_3(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_3(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_4(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_1(this.last = this.i++);
}
;
_.remove_0 = function remove_16(){
  $remove_7(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 142);
function $previous(this$static){
  checkCriticalElement(this$static.i > 0);
  return this$static.this$01.get_1(this$static.last = --this$static.i);
}

function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(113, 142, {}, AbstractList$ListIteratorImpl);
_.remove_0 = function remove_17(){
  $remove_7(this);
}
;
_.add_2 = function add_6(o){
  this.this$01.add_1(this.i, o);
  ++this.i;
  this.last = -1;
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  return $previous(this);
}
;
_.set_1 = function set_2(o){
  checkCriticalState(this.last != -1);
  this.this$01.set_0(this.last, o);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 113);
function AbstractList$SubList(wrapped, fromIndex, toIndex){
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.array.length);
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(143, 518, $intern_38, AbstractList$SubList);
_.add_1 = function add_7(index_0, element){
  checkCriticalPositionIndex(index_0, this.size_0);
  $add_6(this.wrapped, this.fromIndex + index_0, element);
  ++this.size_0;
}
;
_.get_1 = function get_3(index_0){
  checkCriticalElementIndex(index_0, this.size_0);
  return $get_1(this.wrapped, this.fromIndex + index_0);
}
;
_.remove_3 = function remove_18(index_0){
  var result;
  checkCriticalElementIndex(index_0, this.size_0);
  result = $remove_8(this.wrapped, this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.set_0 = function set_3(index_0, element){
  checkCriticalElementIndex(index_0, this.size_0);
  return $set_1(this.wrapped, this.fromIndex + index_0, element);
}
;
_.size_1 = function size_4(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
var Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 143);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(117, 522, $intern_37, AbstractMap$1);
_.contains = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove_1 = function remove_19(key){
  if ($containsKey(this.this$01, key)) {
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_5(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 117);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(118, 1, {}, AbstractMap$1$1);
_.forEachRemaining = function forEachRemaining_4(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_4(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_5(){
  var entry;
  return entry = $next_2(this.val$outerIter2) , entry.getKey();
}
;
_.remove_0 = function remove_20(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 118);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(240, 517, {28:1}, AbstractMap$2);
_.contains = function contains_2(value_0){
  return $containsValue(this.this$01, value_0);
}
;
_.iterator = function iterator_7(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 240);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(149, 1, {}, AbstractMap$2$1);
_.forEachRemaining = function forEachRemaining_5(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_5(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_6(){
  var entry;
  return entry = $next_2(this.val$outerIter2) , entry.getValue_0();
}
;
_.remove_0 = function remove_21(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 149);
defineClass(239, 1, $intern_39);
_.equals_0 = function equals_15(other){
  var entry;
  if (!instanceOf(other, 51)) {
    return false;
  }
  entry = castTo(other, 51);
  return equals_23(this.key, entry.getKey()) && equals_23(this.value_0, entry.getValue_0());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue_0 = function getValue_11(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_16(){
  return hashCode_23(this.key) ^ hashCode_23(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_22(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 239);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(148, 239, $intern_39, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 148);
defineClass(528, 1, $intern_39);
_.equals_0 = function equals_16(other){
  var entry;
  if (!instanceOf(other, 51)) {
    return false;
  }
  entry = castTo(other, 51);
  return equals_23(this.val$entry2.value[0], entry.getKey()) && equals_23($getValue_2(this), entry.getValue_0());
}
;
_.hashCode_0 = function hashCode_17(){
  return hashCode_23(this.val$entry2.value[0]) ^ hashCode_23($getValue_2(this));
}
;
_.toString_0 = function toString_23(){
  return this.val$entry2.value[0] + '=' + $getValue_2(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 528);
defineClass(526, 518, $intern_38);
_.add_1 = function add_8(index_0, element){
  var iter;
  iter = this.listIterator_0(index_0);
  iter.add_2(element);
}
;
_.get_1 = function get_4(index_0){
  var iter;
  iter = this.listIterator_0(index_0);
  try {
    return iter.next_1();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 50)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
_.iterator = function iterator_8(){
  return this.listIterator_0(0);
}
;
_.remove_3 = function remove_22(index_0){
  var iter, old;
  iter = this.listIterator_0(index_0);
  try {
    old = iter.next_1();
    iter.remove_0();
    return old;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 50)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't remove element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
_.set_0 = function set_4(index_0, element){
  var iter, old;
  iter = this.listIterator_0(index_0);
  try {
    old = iter.next_1();
    iter.set_1(element);
    return old;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 50)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't set element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 526);
function $add_6(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_7(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get_1(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_23(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_8(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function $remove_9(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i, 1);
  return true;
}

function $set_1(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $sort(this$static, c){
  sort_2(this$static.array, this$static.array.length, c);
}

function $toArray_0(this$static){
  return clone_0(this$static.array, this$static.array.length);
}

function $toArray_1(this$static, out){
  var i, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , stampJavaTypeInfo_0(result, out)));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
}

defineClass(11, 518, $intern_40, ArrayList);
_.add_1 = function add_9(index_0, o){
  $add_6(this, index_0, o);
}
;
_.add_0 = function add_10(o){
  return $add_7(this, o);
}
;
_.contains = function contains_3(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_5(index_0){
  return $get_1(this, index_0);
}
;
_.isEmpty_0 = function isEmpty_1(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_9(){
  return new ArrayList$1(this);
}
;
_.remove_3 = function remove_23(index_0){
  return $remove_8(this, index_0);
}
;
_.remove_1 = function remove_24(o){
  return $remove_9(this, o);
}
;
_.set_0 = function set_5(index_0, o){
  return $set_1(this, index_0, o);
}
;
_.size_1 = function size_7(){
  return this.array.length;
}
;
_.sort_0 = function sort_1(c){
  $sort(this, c);
}
;
_.toArray = function toArray_1(){
  return $toArray_0(this);
}
;
_.toArray_0 = function toArray_2(out){
  return $toArray_1(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 11);
function $next_3(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function $remove_10(this$static){
  checkCriticalState(this$static.last != -1);
  $remove_8(this$static.this$01, this$static.i = this$static.last);
  this$static.last = -1;
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(61, 1, {}, ArrayList$1);
_.forEachRemaining = function forEachRemaining_6(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_6(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_7(){
  return $next_3(this);
}
;
_.remove_0 = function remove_25(){
  $remove_10(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 61);
function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp;
  comp = ($clinit_Comparators() , !comp?INTERNAL_NATURAL_ORDER:comp);
  temp = x_0.slice(fromIndex, toIndex);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function sort_2(x_0, toIndex, c){
  checkCriticalArrayBounds(toIndex, x_0.length);
  mergeSort(x_0, 0, toIndex, c);
}

function $toArray_2(this$static, out){
  var i, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , stampJavaTypeInfo_0(result, out)));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(313, 518, $intern_40, Arrays$ArrayList);
_.contains = function contains_4(o){
  return $indexOf_0(this, o) != -1;
}
;
_.get_1 = function get_6(index_0){
  return checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.set_0 = function set_6(index_0, value_0){
  var was;
  was = (checkCriticalElementIndex(index_0, this.array.length) , this.array[index_0]);
  this.array[index_0] = value_0;
  return was;
}
;
_.size_1 = function size_8(){
  return this.array.length;
}
;
_.sort_0 = function sort_3(c){
  sort_2(this.array, this.array.length, c);
}
;
_.toArray = function toArray_3(){
  return $toArray_2(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, this.array.length, 5, 1));
}
;
_.toArray_0 = function toArray_4(out){
  return $toArray_2(this, out);
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 313);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_18(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_19(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(300, 518, $intern_40, Collections$EmptyList);
_.contains = function contains_5(object){
  return false;
}
;
_.get_1 = function get_7(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_10(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_9(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 300);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(301, 1, {}, Collections$EmptyListIterator);
_.forEachRemaining = function forEachRemaining_7(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_2 = function add_11(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.hasNext_0 = function hasNext_7(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_8(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_0 = function remove_26(){
  throw toJs(new IllegalStateException);
}
;
_.set_1 = function set_7(o){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 301);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(302, 518, $intern_40, Collections$SingletonList);
_.contains = function contains_6(item_0){
  return equals_23(this.element, item_0);
}
;
_.get_1 = function get_8(index_0){
  checkCriticalElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_10(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 302);
defineClass(151, 1, {28:1});
_.spliterator_0 = function spliterator_3(){
  return new Spliterators$IteratorSpliterator(this, 0);
}
;
_.stream = function stream_1(){
  return new StreamImpl(null, this.spliterator_0());
}
;
_.add_0 = function add_12(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty_0 = function isEmpty_2(){
  return this.coll.isEmpty_0();
}
;
_.iterator = function iterator_11(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.remove_1 = function remove_27(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_11(){
  return this.coll.size_1();
}
;
_.toArray = function toArray_5(){
  return this.coll.toArray();
}
;
_.toString_0 = function toString_24(){
  return this.coll.toString_0();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 151);
function $remove_11(){
  throw toJs(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(152, 1, {}, Collections$UnmodifiableCollectionIterator);
_.forEachRemaining = function forEachRemaining_8(consumer){
  $forEachRemaining(this, consumer);
}
;
_.hasNext_0 = function hasNext_8(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_9(){
  return this.it.next_1();
}
;
_.remove_0 = function remove_28(){
  $remove_11();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 152);
defineClass(303, 151, $intern_38);
_.sort_0 = function sort_4(c){
  $sort_0(this, c);
}
;
_.spliterator_0 = function spliterator_4(){
  return new Spliterators$IteratorSpliterator(this, 16);
}
;
_.equals_0 = function equals_17(o){
  return $equals_1(this.list, o);
}
;
_.get_1 = function get_9(index_0){
  return $get_1(this.list, index_0);
}
;
_.hashCode_0 = function hashCode_20(){
  return hashCode_19(this.list);
}
;
_.isEmpty_0 = function isEmpty_3(){
  return this.list.array.length == 0;
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(new AbstractList$ListIteratorImpl(this.list, 0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(new AbstractList$ListIteratorImpl(this.list, from));
}
;
_.set_0 = function set_8(index_0, element){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 303);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(153, 152, {}, Collections$UnmodifiableListIterator);
_.remove_0 = function remove_29(){
  $remove_11();
}
;
_.add_2 = function add_13(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.lit.i > 0;
}
;
_.previous = function previous_2(){
  return $previous(this.lit);
}
;
_.set_1 = function set_9(o){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 153);
function Collections$UnmodifiableRandomAccessList(list){
  this.coll = list;
  this.list = list;
}

defineClass(304, 303, $intern_38, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 304);
function Collections$UnmodifiableSet(set_0){
  this.coll = set_0;
}

defineClass(305, 151, $intern_37, Collections$UnmodifiableSet);
_.spliterator_0 = function spliterator_5(){
  return new Spliterators$IteratorSpliterator(this, 1);
}
;
_.equals_0 = function equals_18(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_21(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 305);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  INTERNAL_NATURAL_ORDER = new Comparators$NaturalOrderComparator;
}

var INTERNAL_NATURAL_ORDER;
function $compare_0(a, b){
  return checkCriticalNotNull(a) , compareTo_Ljava_lang_Object__I__devirtual$(a, (checkCriticalNotNull(b) , b));
}

function Comparators$NaturalOrderComparator(){
}

defineClass(457, 1, $intern_3, Comparators$NaturalOrderComparator);
_.compare = function compare_6(a, b){
  return $compare_0(castTo(a, 5), castTo(b, 5));
}
;
_.equals_0 = function equals_19(other){
  return this === other;
}
;
var Ljava_util_Comparators$NaturalOrderComparator_2_classLit = createForClass('java.util', 'Comparators/NaturalOrderComparator', 457);
function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(413, 8, $intern_9, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 413);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(30, 147, {3:1, 64:1}, HashMap);
_.equals_1 = function equals_20(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 30);
function $add_8(this$static, o){
  var old;
  old = $put_0(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_12(this$static, o){
  return $remove_5(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(46, 522, {3:1, 28:1, 95:1}, HashSet);
_.add_0 = function add_14(o){
  return $add_8(this, o);
}
;
_.contains = function contains_7(o){
  return $contains_0(this, o);
}
;
_.isEmpty_0 = function isEmpty_4(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_12(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove_1 = function remove_30(o){
  return $remove_12(this, o);
}
;
_.size_1 = function size_12(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 46);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(412, 147, {3:1, 64:1}, IdentityHashMap);
_.equals_0 = function equals_21(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 64)) {
    return false;
  }
  otherMap = castTo(obj, 64);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_2(entry$iterator);
    otherKey = entry.getKey();
    otherValue = entry.getValue_0();
    if (!(instanceOfString(otherKey)?$hasStringValue(this, otherKey):!!$getEntry(this.hashCodeMap, otherKey))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(instanceOfString(otherKey)?$getStringValue(this, otherKey):getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals_1 = function equals_22(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_0(key){
  return getHashCode_1(key);
}
;
_.hashCode_0 = function hashCode_22(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_2(entry$iterator);
    hashCode += getIdentityHashCode(entry.getKey());
    hashCode += getIdentityHashCode(entry.getValue_0());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 412);
function $findEntryInChain(this$static, key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  return $findEntryInChain(this$static, key, $getChainOrEmpty(this$static, key == null?0:this$static.host.getHashCode(key)));
}

function $put_1(this$static, key, value_0){
  var chain, chain0, entry, hashCode;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  }
   else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain0, chain0.length, new AbstractMap$SimpleEntry(key, value_0));
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_13(this$static, key){
  var chain, chain0, entry, hashCode, i;
  hashCode = key == null?0:this$static.host.getHashCode(key);
  chain0 = (chain = this$static.backingMap.get(hashCode) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue_0();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(332, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_13(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 332);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(157, 1, {}, InternalHashCodeMap$1);
_.forEachRemaining = function forEachRemaining_9(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_10(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_9(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_0 = function remove_31(){
  $remove_13(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 157);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_1(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_2(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_14(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(333, 1, {}, InternalStringMap);
_.iterator = function iterator_14(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 333);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(158, 1, {}, InternalStringMap$1);
_.forEachRemaining = function forEachRemaining_10(consumer){
  $forEachRemaining(this, consumer);
}
;
_.next_1 = function next_11(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_10(){
  return !this.current.done;
}
;
_.remove_0 = function remove_32(){
  $remove_14(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 158);
function $getValue_2(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_2(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(334, 528, $intern_39, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue_0 = function getValue_12(){
  return $getValue_2(this);
}
;
_.setValue = function setValue_0(object){
  return $put_2(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 334);
function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next_0.prev = node.prev;
  node.prev.next_0 = node.next_0;
  node.next_0 = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next_0 = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next_0 = null;
  this.size_0 = 0;
}

defineClass(314, 526, $intern_40, LinkedList);
_.add_0 = function add_15(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator_0 = function listIterator_4(index_0){
  var i, node;
  checkCriticalPositionIndex(index_0, this.size_0);
  if (index_0 >= this.size_0 >> 1) {
    node = this.tail;
    for (i = this.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this.header.next_0;
    for (i = 0; i < index_0; ++i) {
      node = node.next_0;
    }
  }
  return new LinkedList$ListIteratorImpl(this, index_0, node);
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 314);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(407, 1, {}, LinkedList$ListIteratorImpl);
_.forEachRemaining = function forEachRemaining_11(consumer){
  $forEachRemaining(this, consumer);
}
;
_.add_2 = function add_16(o){
  $addNode(this.this$01, o, this.currentNode.prev, this.currentNode);
  ++this.currentIndex;
  this.lastNode = null;
}
;
_.hasNext_0 = function hasNext_11(){
  return this.currentNode != this.this$01.tail;
}
;
_.hasPrevious = function hasPrevious_2(){
  return this.currentNode.prev != this.this$01.header;
}
;
_.next_1 = function next_12(){
  checkCriticalElement(this.currentNode != this.this$01.tail);
  this.lastNode = this.currentNode;
  this.currentNode = this.currentNode.next_0;
  ++this.currentIndex;
  return this.lastNode.value_0;
}
;
_.previous = function previous_3(){
  checkCriticalElement(this.currentNode.prev != this.this$01.header);
  this.lastNode = this.currentNode = this.currentNode.prev;
  --this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_0 = function remove_33(){
  var nextNode;
  checkCriticalState(!!this.lastNode);
  nextNode = this.lastNode.next_0;
  $removeNode(this.this$01, this.lastNode);
  this.currentNode == this.lastNode?(this.currentNode = nextNode):--this.currentIndex;
  this.lastNode = null;
}
;
_.set_1 = function set_10(o){
  checkCriticalState(!!this.lastNode);
  this.lastNode.value_0 = o;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 407);
function LinkedList$Node(){
}

defineClass(123, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 123);
function $clinit_Locale(){
  $clinit_Locale = emptyMethod;
  ROOT = new Locale$1;
  defaultLocale = new Locale$4;
}

defineClass(514, 1, {});
var ROOT, defaultLocale;
var Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 514);
function Locale$1(){
}

defineClass(211, 514, {}, Locale$1);
_.toString_0 = function toString_25(){
  return '';
}
;
var Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 211);
function Locale$4(){
}

defineClass(212, 514, {}, Locale$4);
_.toString_0 = function toString_26(){
  return 'unknown';
}
;
var Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 212);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(50, 8, {3:1, 8:1, 7:1, 50:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 50);
function equals_23(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_23(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $forEachRemaining_0(this$static, consumer){
  while (this$static.tryAdvance(consumer))
  ;
}

defineClass(445, 1, {});
_.forEachRemaining = function forEachRemaining_12(consumer){
  $forEachRemaining_0(this, consumer);
}
;
_.characteristics_0 = function characteristics_0(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize(){
  return this.sizeEstimate;
}
;
_.characteristics = 0;
_.sizeEstimate = 0;
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 445);
function Spliterators$AbstractSpliterator(size_0, characteristics){
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0?characteristics | $intern_29:characteristics;
}

defineClass(446, 445, {});
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 446);
function $initIterator(this$static){
  if (!this$static.it) {
    this$static.it = this$static.collection.iterator();
    this$static.estimateSize = this$static.collection.size_1();
  }
}

function Spliterators$IteratorSpliterator(collection, characteristics){
  this.collection = (checkCriticalNotNull(collection) , collection);
  this.characteristics = (characteristics & 4096) == 0?characteristics | 64 | $intern_29:characteristics;
}

defineClass(62, 1, {}, Spliterators$IteratorSpliterator);
_.characteristics_0 = function characteristics_1(){
  return this.characteristics;
}
;
_.estimateSize_0 = function estimateSize_0(){
  $initIterator(this);
  return this.estimateSize;
}
;
_.forEachRemaining = function forEachRemaining_13(consumer){
  $initIterator(this);
  this.it.forEachRemaining(consumer);
}
;
_.tryAdvance = function tryAdvance(consumer){
  checkCriticalNotNull(consumer);
  $initIterator(this);
  if (this.it.hasNext_0()) {
    consumer.accept(this.it.next_1());
    return true;
  }
  return false;
}
;
_.characteristics = 0;
_.estimateSize = 0;
var Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 62);
function Vector(){
  this.arrayList = new ArrayList;
}

function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new ArrayIndexOutOfBoundsException);
  }
}

defineClass(155, 518, $intern_40, Vector);
_.add_1 = function add_17(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_6(this.arrayList, index_0, o);
}
;
_.add_0 = function add_18(o){
  return $add_7(this.arrayList, o);
}
;
_.contains = function contains_8(elem){
  return $indexOf_1(this.arrayList, elem, 0) != -1;
}
;
_.get_1 = function get_10(index_0){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $get_1(this.arrayList, index_0);
}
;
_.isEmpty_0 = function isEmpty_5(){
  return this.arrayList.array.length == 0;
}
;
_.iterator = function iterator_15(){
  return new ArrayList$1(this.arrayList);
}
;
_.remove_3 = function remove_34(index_0){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $remove_8(this.arrayList, index_0);
}
;
_.set_0 = function set_11(index_0, elem){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $set_1(this.arrayList, index_0, elem);
}
;
_.size_1 = function size_14(){
  return this.arrayList.array.length;
}
;
_.sort_0 = function sort_5(c){
  $sort(this.arrayList, c);
}
;
_.toArray = function toArray_6(){
  return $toArray_0(this.arrayList);
}
;
_.toArray_0 = function toArray_7(a){
  return $toArray_1(this.arrayList, a);
}
;
_.toString_0 = function toString_27(){
  return $toString_3(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 155);
function Stack(){
  Vector.call(this);
}

defineClass(315, 155, $intern_40, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 315);
function $add_9(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_3(this$static.builder, this$static.delimiter);
  $append_2(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(141, 1, {}, StringJoiner);
_.toString_0 = function toString_28(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 141);
function of(supplier, accumulator, combiner, characteristics){
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl;
}

function $clinit_Collector$Characteristics(){
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics('CONCURRENT', 0);
  IDENTITY_FINISH = new Collector$Characteristics('IDENTITY_FINISH', 1);
  UNORDERED = new Collector$Characteristics('UNORDERED', 2);
}

function Collector$Characteristics(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1), $intern_3, 71, 0, [CONCURRENT, IDENTITY_FINISH, UNORDERED]);
}

defineClass(71, 4, {3:1, 5:1, 4:1, 71:1}, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum('java.util.stream', 'Collector/Characteristics', 71, Ljava_lang_Enum_2_classLit, values_13);
function CollectorImpl(){
  $clinit_Collections();
}

defineClass(456, 1, {}, CollectorImpl);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass('java.util.stream', 'CollectorImpl', 456);
function Collectors$20methodref$add$Type(){
}

defineClass(134, 1, {}, Collectors$20methodref$add$Type);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass('java.util.stream', 'Collectors/20methodref$add$Type', 134);
function Collectors$21methodref$ctor$Type(){
}

defineClass(133, 1, {}, Collectors$21methodref$ctor$Type);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass('java.util.stream', 'Collectors/21methodref$ctor$Type', 133);
function Collectors$lambda$21$Type(){
}

defineClass(135, 1, {}, Collectors$lambda$21$Type);
var Ljava_util_stream_Collectors$lambda$21$Type_2_classLit = createForClass('java.util.stream', 'Collectors/lambda$21$Type', 135);
function $terminate(this$static){
  if (!this$static.root) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  }
   else {
    $terminate(this$static.root);
  }
}

function $throwIfTerminated(this$static){
  if (this$static.root) {
    $throwIfTerminated(this$static.root);
  }
   else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}

function TerminatableStream(previous){
  if (!previous) {
    this.root = null;
    new ArrayList;
  }
   else {
    this.root = previous;
  }
}

defineClass(444, 1, {});
_.terminated = false;
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass('java.util.stream', 'TerminatableStream', 444);
function $filter(this$static, predicate){
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$FilterSpliterator(predicate, this$static.spliterator));
}

function $reduce(this$static, identity){
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer;
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer));
  return consumer.value_0;
}

function StreamImpl(prev, spliterator){
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(a_1, t_2){
  castTo(a_1, 28).add_0(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2){
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(87, 444, {87:1}, StreamImpl);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass('java.util.stream', 'StreamImpl', 87);
function $lambda$0(this$static, action_1, item_1){
  if (this$static.filter.test_0(item_1)) {
    this$static.found = true;
    action_1.accept(item_1);
  }
}

function StreamImpl$FilterSpliterator(filter, original){
  Spliterators$AbstractSpliterator.call(this, original.estimateSize_0(), original.characteristics_0() & -65);
  checkCriticalNotNull(filter);
  this.filter = filter;
  this.original = original;
}

defineClass(447, 446, {}, StreamImpl$FilterSpliterator);
_.tryAdvance = function tryAdvance_0(action){
  this.found = false;
  while (!this.found && this.original.tryAdvance(new StreamImpl$FilterSpliterator$lambda$0$Type(this, action)))
  ;
  return this.found;
}
;
_.found = false;
var Ljava_util_stream_StreamImpl$FilterSpliterator_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator', 447);
function StreamImpl$FilterSpliterator$lambda$0$Type($$outer_0, action_1){
  this.$$outer_0 = $$outer_0;
  this.action_1 = action_1;
}

defineClass(449, 1, {}, StreamImpl$FilterSpliterator$lambda$0$Type);
_.accept = function accept(arg0){
  $lambda$0(this.$$outer_0, this.action_1, arg0);
}
;
var Ljava_util_stream_StreamImpl$FilterSpliterator$lambda$0$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/FilterSpliterator/lambda$0$Type', 449);
function $accept(this$static, value_0){
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer(){
}

defineClass(448, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_0(value_0){
  $accept(this, value_0);
}
;
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass('java.util.stream', 'StreamImpl/ValueConsumer', 448);
function $accept_0(this$static, arg0){
  lambda$5(this$static.consumer_0, arg0);
}

function StreamImpl$lambda$5$Type(consumer_0){
  this.consumer_0 = consumer_0;
}

defineClass(450, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_1(arg0){
  $accept_0(this, arg0);
}
;
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass('java.util.stream', 'StreamImpl/lambda$5$Type', 450);
function clone_0(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function getIdentityHashCode(o){
  switch (typeof o) {
    case 'string':
      return getHashCode_2(o);
    case 'number':
      return round_int(o);
    case 'boolean':
      return $clinit_Boolean() , o?1231:1237;
    default:return o == null?0:getHashCode_1(o);
  }
}

function getObjectIdentityHashCode(o){
  return getHashCode_1(o);
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalArrayBounds(end, length_0){
  if (0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: 0 > toIndex: ' + end));
  }
  if (end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException_0('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new ArrayStoreException);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference){
  if (!reference) {
    throw toJs(new NullPointerException_0('Cannot suppress a null exception.'));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalState_0(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
}

function checkNotNull(reference){
  checkCriticalNotNull(reference);
  return reference;
}

function compare_7(a, b){
  return a == b?0:a < b?-1:1;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function getHashCode_1(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_2(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_0[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
var Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null);
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=hooldus-0.js

