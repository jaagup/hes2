var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.login;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = 'D02E94D02DCE3B1C6C245648EA29DE64';
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
var $intern_0 = {3:1}, $intern_1 = {86:1, 43:1}, $intern_2 = 3.141592653589793, $intern_3 = {3:1, 4:1}, $intern_4 = {85:1, 21:1, 3:1, 5:1, 6:1}, $intern_5 = {41:1, 3:1, 4:1}, $intern_6 = {25:1, 3:1, 4:1}, $intern_7 = {3:1, 5:1, 19:1}, $intern_8 = -2147483648, $intern_9 = 4194303, $intern_10 = 1048575, $intern_11 = 524288, $intern_12 = 4194304, $intern_13 = 17592186044416, $intern_14 = -17592186044416, $intern_15 = 131072, $intern_16 = 16777216, $intern_17 = 33554432, $intern_18 = 67108864, $intern_19 = {7:1, 3:1, 5:1, 6:1}, $intern_20 = {15:1, 11:1, 13:1, 12:1, 16:1, 10:1, 9:1}, $intern_21 = {15:1, 11:1, 13:1, 12:1, 16:1, 55:1, 10:1, 9:1}, $intern_22 = {22:1, 3:1, 5:1, 6:1}, $intern_23 = {26:1}, $intern_24 = {3:1, 14:1};
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

function toString_9(object){
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
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
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

defineClass(87, 1, {}, Class);
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
_.toString_0 = function toString_16(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1);
var Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 87);
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
  clientSerializationStreamWriter.stringTable.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
  clientSerializationStreamWriter.encodeBuffer = new StringBuilder;
  $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL);
  $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName);
  return clientSerializationStreamWriter;
}

function $doInvoke(this$static, responseReader, methodName, statsContext, requestData, callback){
  var ex, iex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, responseReader, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 25)) {
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

function $doPrepareRequestBuilderImpl(this$static, responseReader, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw toJs(new ServiceDefTarget$NoServiceEntryPointSpecifiedException);
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext, callback, responseReader);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(moduleBaseURL, remoteServiceRelativePath, serializationPolicyName, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + remoteServiceRelativePath;
  this.serializer = serializer;
  this.serializationPolicyName = serializationPolicyName;
}

function getEncodedInstance(encodedResponse){
  if ($equals(encodedResponse.substr(0, 4), '//OK') || $equals(encodedResponse.substr(0, 4), '//EX')) {
    return encodedResponse.substr(4);
  }
  return encodedResponse;
}

defineClass(93, 1, {});
_.createStreamWriter = function createStreamWriter(){
  return $createStreamWriter(this);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 93);
function $clinit_DeviceTreeService_Proxy(){
  $clinit_DeviceTreeService_Proxy = emptyMethod;
  SERIALIZER = new DeviceTreeService_TypeSerializer;
}

function $getCompanies(this$static, callback){
  var helper;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'DeviceTreeService_Proxy', 'getCompanies');
  try {
    $start(helper, 'com.elektrimasinad.aho.client.DeviceTreeService', 0);
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 42))
      throw toJs($e0);
  }
}

function DeviceTreeService_Proxy(){
  $clinit_DeviceTreeService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), 'deviceTree', '4BBC711B3ADDD850E871FB6F556F9A0F', SERIALIZER);
}

defineClass(113, 93, {}, DeviceTreeService_Proxy);
_.createStreamWriter = function createStreamWriter_0(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER;
var Lcom_elektrimasinad_aho_client_DeviceTreeService_1Proxy_2_classLit = createForClass('com.elektrimasinad.aho.client', 'DeviceTreeService_Proxy', 113);
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

defineClass(97, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 97);
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

defineClass(151, 97, {}, DeviceTreeService_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_elektrimasinad_aho_client_DeviceTreeService_1TypeSerializer_2_classLit = createForClass('com.elektrimasinad.aho.client', 'DeviceTreeService_TypeSerializer', 151);
function $clinit_Login(){
  $clinit_Login = emptyMethod;
  deviceTreeService = new DeviceTreeService_Proxy;
  userInfoService = new UserInfoService_Proxy;
}

function $createCompanyListPanel(this$static){
  var buttonsPanel, company, company$iterator, headerPanel, lCompany, lLabel1, td, headerPanel_0, lDeviceHeader;
  $clear(this$static.companyListPanel);
  $setWidth(this$static.companyListPanel, '100%');
  lLabel1 = new Label_0('');
  ($clinit_DOM() , lLabel1.element).className = 'backSaveLabel noPointer';
  buttonsPanel = new HorizontalPanel;
  buttonsPanel.element.className = 'backSavePanel';
  $add_2(buttonsPanel, lLabel1);
  td = $getWidgetTd(buttonsPanel, lLabel1);
  !!td && (td['width'] = '50%' , undefined);
  $add_3(this$static.companyListPanel, buttonsPanel);
  headerPanel = (headerPanel_0 = new HorizontalPanel , headerPanel_0.element.className = 'aho-measurementHeaderPanel thin' , lDeviceHeader = new Label_0('Ettev\xF5tted') , lDeviceHeader.element.className = 'aho-label2 thin' , $add_2(headerPanel_0, lDeviceHeader) , headerPanel_0);
  $add_3(this$static.companyListPanel, headerPanel);
  for (company$iterator = this$static.companyList.iterator(); company$iterator.hasNext_0();) {
    company = castTo(company$iterator.next_1(), 50);
    lCompany = new Label_0(company.companyName);
    lCompany.element.className = 'aho-listItem';
    $addDomHandler(lCompany, new Login$6(this$static, company), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
    $add_3(this$static.companyListPanel, lCompany);
  }
  $showWidget(this$static.contentPanel, $getWidgetIndex(this$static.contentPanel, this$static.companyListPanel));
  return this$static.companyListPanel;
}

function $createLoginPanel(this$static){
  var companyName, loginButton, loginPanel, loginPass, loginUser, pwsLabel, userLabel;
  $clear(this$static.contentPanel);
  loginPanel = new VerticalPanel;
  ($clinit_DOM() , loginPanel.element).className = 'loginPanel';
  userLabel = new Label;
  userLabel.element.className = 'userLabel';
  $setTextOrHtml(userLabel.directionalTextHelper, 'Ettev\xF5te');
  loginUser = new TextBox;
  loginUser.element.className = 'loginUser';
  $setValue(loginUser, $getItem(this$static.sessionStore.storage, 'selectedCompany'));
  pwsLabel = new Label;
  pwsLabel.element.className = 'userLabel';
  $setTextOrHtml(pwsLabel.directionalTextHelper, 'Parool');
  loginPass = new PasswordTextBox;
  loginPass.element.className = 'loginUser';
  companyName = $getItem(this$static.sessionStore.storage, 'selectedCompany');
  loginButton = new Button(new Login$7(this$static, loginUser, loginPass, companyName));
  $addDomHandler(loginPass, new Login$8(loginButton), ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_0));
  loginButton.element.className = 'loginBtn';
  $add_3(loginPanel, userLabel);
  $add_3(loginPanel, loginUser);
  $add_3(loginPanel, pwsLabel);
  $add_3(loginPanel, loginPass);
  $add_3(loginPanel, loginButton);
  $add_1(this$static.contentPanel, loginPanel);
  $showWidget(this$static.contentPanel, $getWidgetIndex(this$static.contentPanel, loginPanel));
}

function $fetchCompanies(this$static){
  $getCompanies(deviceTreeService, this$static.getCompanyListCallback);
}

function $onModuleLoad(this$static){
  var elektrimasinadImage, headerImage, navigationPanel, root, rootPanel, td, td0;
  this$static.sessionStore = (!sessionStorage_0 && ($clinit_Storage$StorageSupportDetector() , sessionStorageSupported) && (sessionStorage_0 = new Storage_0) , sessionStorage_0);
  $wnd.location.href.indexOf('127.0.0.1') != -1?(this$static.isDevMode = true):(this$static.isDevMode = false);
  $getClientWidth($doc) < 1000?(this$static.isMobileView = true):(this$static.isMobileView = false);
  addResizeHandler(new Login$1(this$static));
  this$static.getCompanyListCallback = new Login$2(this$static);
  this$static.getAccountDataCallback = new Login$3(this$static);
  new Login$4(this$static);
  root = ($clinit_RootPanel() , get_0());
  ($clinit_DOM() , root.element).className = 'mainBackground2';
  this$static.mainPanel = new VerticalPanel;
  this$static.isMobileView?$setStyleName(this$static.mainPanel, 'panelBackground mobile'):$setStyleName(this$static.mainPanel, 'panelBackground');
  headerImage = new Image_1('res/hes-symbol.jpg');
  headerImage.element.className = 'aho-headerImage';
  $addHandler_0(headerImage, new Login$5(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  elektrimasinadImage = new Image_1('res/elektrimasinad_labipaistev.png');
  navigationPanel = new HorizontalPanel;
  navigationPanel.element.className = 'aho-navigationPanel';
  $add_2(navigationPanel, headerImage);
  headerImage.element.style['height'] = '45px';
  $add_2(navigationPanel, elektrimasinadImage);
  elektrimasinadImage.element.style['height'] = '45px';
  td0 = $getWidgetTd(navigationPanel, headerImage);
  !!td0 && (td0['width'] = '180px' , undefined);
  this$static.headerPanel = new AbsolutePanel;
  $setStyleName(this$static.headerPanel, 'loginHeaderBackground');
  $add_0(this$static.headerPanel, navigationPanel);
  $add_3(this$static.mainPanel, this$static.headerPanel);
  this$static.contentPanel = new DeckPanel;
  $add_3(this$static.mainPanel, this$static.contentPanel);
  td = $getWidgetTd(this$static.mainPanel, this$static.contentPanel);
  !!td && (td['height'] = '100%' , undefined);
  rootPanel = get_0();
  rootPanel.element.className = 'mainBackground2';
  $add_0(rootPanel, this$static.mainPanel);
  $getCompanies(deviceTreeService, this$static.getCompanyListCallback);
  $add_1(this$static.contentPanel, this$static.companyListPanel);
  $setCellHorizontalAlignment_0(this$static.mainPanel, this$static.contentPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $updateWidgetSizes(this$static);
}

function $updateWidgetSizes(this$static){
  this$static.MAIN_WIDTH = 700;
  this$static.isMobileView && (this$static.MAIN_WIDTH = $getClientWidth($doc));
  $setWidth(this$static.mainPanel, this$static.MAIN_WIDTH + 'px');
  $setHeight(this$static.mainPanel, $getClientHeight($doc) + 'px');
  $setWidth(this$static.contentPanel, this$static.CONTENT_WIDTH + 'px');
}

function Login(){
  $clinit_Login();
  this.companyListPanel = new VerticalPanel;
  this.companyList = new ArrayList;
}

defineClass(110, 1, {}, Login);
_.CONTENT_WIDTH = 800;
_.MAIN_WIDTH = 900;
_.isDevMode = false;
_.isMobileView = false;
var deviceTreeService, userInfoService;
var Lcom_elektrimasinad_aho_client_Login_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login', 110);
function Login$1(this$0){
  this.this$01 = this$0;
}

defineClass(116, 1, {229:1, 43:1}, Login$1);
var Lcom_elektrimasinad_aho_client_Login$1_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login/1', 116);
function $onSuccess(this$static, companies){
  this$static.this$01.companyList = companies;
  $createCompanyListPanel(this$static.this$01);
}

function Login$2(this$0){
  this.this$01 = this$0;
}

defineClass(117, 1, {}, Login$2);
_.onSuccess = function onSuccess(companies){
  $onSuccess(this, castTo(companies, 14));
}
;
_.onFailure = function onFailure(caught){
}
;
var Lcom_elektrimasinad_aho_client_Login$2_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login/2', 117);
function $onSuccess_0(this$static, accountData){
  this$static.this$01.accountKey = accountData;
  if (this$static.this$01.accountKey != 'failed') {
    $setItem(this$static.this$01.sessionStore, 'Account', this$static.this$01.accountKey);
    assign('/Index.html');
  }
}

function Login$3(this$0){
  this.this$01 = this$0;
}

defineClass(118, 1, {}, Login$3);
_.onSuccess = function onSuccess_0(accountData){
  $onSuccess_0(this, castToString(accountData));
}
;
_.onFailure = function onFailure_0(arg0){
  $wnd.alert('sisenemisprobleem');
}
;
var Lcom_elektrimasinad_aho_client_Login$3_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login/3', 118);
function Login$4(this$0){
  this.this$01 = this$0;
}

defineClass(119, 1, {}, Login$4);
_.onSuccess = function onSuccess_1(name_0){
  var lastArg;
  $fetchCompanies((lastArg = this , castToString(name_0) , lastArg).this$01);
}
;
_.onFailure = function onFailure_1(caught){
}
;
var Lcom_elektrimasinad_aho_client_Login$4_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login/4', 119);
function Login$5(this$0){
  this.this$01 = this$0;
}

defineClass(120, 1, $intern_1, Login$5);
_.onClick = function onClick(event_0){
  this.this$01.isDevMode?assign($replaceAll($wnd.location.href, 'index')):assign('/Index.html');
}
;
var Lcom_elektrimasinad_aho_client_Login$5_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login/5', 120);
function Login$6(this$0, val$company){
  this.this$01 = this$0;
  this.val$company2 = val$company;
}

defineClass(122, 1, $intern_1, Login$6);
_.onClick = function onClick_0(event_0){
  $setItem(this.this$01.sessionStore, 'selectedCompany', this.val$company2.companyName);
  $createLoginPanel(this.this$01);
}
;
var Lcom_elektrimasinad_aho_client_Login$6_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login/6', 122);
function Login$7(this$0, val$loginUser, val$loginPass, val$companyName){
  this.this$01 = this$0;
  this.val$loginUser2 = val$loginUser;
  this.val$loginPass3 = val$loginPass;
  this.val$companyName4 = val$companyName;
}

defineClass(124, 1, $intern_1, Login$7);
_.onClick = function onClick_1(event_0){
  var raw, raw0;
  $getAccountData(($clinit_Login() , userInfoService), (raw0 = $getValueOrThrow(this.val$loginUser2) , raw0 == null?'':raw0), (raw = $getValueOrThrow(this.val$loginPass3) , raw == null?'':raw), this.val$companyName4, this.this$01.getAccountDataCallback);
}
;
var Lcom_elektrimasinad_aho_client_Login$7_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login/7', 124);
function Login$8(val$loginButton){
  this.val$loginButton2 = val$loginButton;
}

defineClass(125, 1, {230:1, 43:1}, Login$8);
var Lcom_elektrimasinad_aho_client_Login$8_2_classLit = createForClass('com.elektrimasinad.aho.client', 'Login/8', 125);
function $clinit_UserInfoService_Proxy(){
  $clinit_UserInfoService_Proxy = emptyMethod;
  SERIALIZER_0 = new UserInfoService_TypeSerializer;
}

function $getAccountData(this$static, accountName, accountPassword, companyName, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'UserInfoService_Proxy', 'getAccountData');
  try {
    streamWriter = $start(helper, 'com.elektrimasinad.aho.client.UserInfoService', 3);
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, 'java.lang.String/2004016611'));
    $append(streamWriter, '' + $addString(streamWriter, accountName));
    $append(streamWriter, '' + $addString(streamWriter, accountPassword));
    $append(streamWriter, '' + $addString(streamWriter, companyName));
    $finish_0(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , STRING));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 42)) {
      $wnd.alert('sisenemisprobleem');
    }
     else 
      throw toJs($e0);
  }
}

function UserInfoService_Proxy(){
  $clinit_UserInfoService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), 'userInfoService', '0D7F208B6E833E766D0558897BD9BFB0', SERIALIZER_0);
}

defineClass(114, 93, {}, UserInfoService_Proxy);
_.createStreamWriter = function createStreamWriter_1(){
  var toReturn;
  toReturn = $createStreamWriter(this);
  return toReturn;
}
;
var SERIALIZER_0;
var Lcom_elektrimasinad_aho_client_UserInfoService_1Proxy_2_classLit = createForClass('com.elektrimasinad.aho.client', 'UserInfoService_Proxy', 114);
function $clinit_UserInfoService_TypeSerializer(){
  var result, result_0;
  $clinit_UserInfoService_TypeSerializer = emptyMethod;
  methodMapNative_1 = (result = {} , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_14, deserialize_14, serialize_10] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_15, deserialize_15] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_11] , result['java.lang.String/2004016611'] = [instantiate_20, deserialize_21, serialize_15] , result);
  signatureMapNative_1 = (result_0 = [] , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298' , result_0[getObjectIdentityHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109' , result_0[getObjectIdentityHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611' , result_0);
}

function UserInfoService_TypeSerializer(){
  $clinit_UserInfoService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_1, signatureMapNative_1);
}

defineClass(161, 97, {}, UserInfoService_TypeSerializer);
var methodMapNative_1, signatureMapNative_1;
var Lcom_elektrimasinad_aho_client_UserInfoService_1TypeSerializer_2_classLit = createForClass('com.elektrimasinad.aho.client', 'UserInfoService_TypeSerializer', 161);
function Company(){
  this.locationList = new ArrayList;
}

defineClass(50, 1, {50:1, 3:1}, Company);
var Lcom_elektrimasinad_aho_shared_Company_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Company', 50);
function deserialize(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Company_2_classLit, $intern_0, 50, size_0, 0, 1);
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

defineClass(74, 1, {74:1, 3:1}, Department);
_.companyKey = '';
_.departmentKey = '';
_.departmentName = '';
var Lcom_elektrimasinad_aho_shared_Department_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Department', 74);
function deserialize_1(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_1(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Department_2_classLit, $intern_0, 74, size_0, 0, 1);
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

defineClass(75, 1, {75:1, 3:1}, Device);
_.deviceComment = '';
_.deviceNickname = 'El.mootor';
_.hasCoupledDevice = false;
var Lcom_elektrimasinad_aho_shared_Device_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Device', 75);
function deserialize_3(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_3(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Device_2_classLit, $intern_0, 75, size_0, 0, 1);
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
  $append(streamWriter, instance.hasCoupledDevice?'1':'0');
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
  this.downtime = valueOf_1(0);
  this.timeSpent = valueOf_1(0);
  this.upload = valueOf_1(0);
}

defineClass(76, 1, {76:1, 3:1}, MaintenanceItem);
_.assignedTo = '';
_.connectedMeasurementKeyString = '';
_.deviceID = '';
_.problemDesc = '';
var Lcom_elektrimasinad_aho_shared_MaintenanceItem_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'MaintenanceItem', 76);
function deserialize_5(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_5(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_MaintenanceItem_2_classLit, $intern_0, 76, size_0, 0, 1);
}

function deserialize_6(streamReader, instance){
  setAssignedTo(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCompletionDate(instance, castTo($readObject(streamReader), 19));
  setConnectedMeasurementKeyString(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setCost(instance, castToDouble($readObject(streamReader)));
  setDepartmentName_1(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDesc(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDevKey(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceID(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDeviceName_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setDowntime(instance, castTo($readObject(streamReader), 20));
  setInterval_0(instance, castTo($readObject(streamReader), 20));
  setKeyString(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setMaterials(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setName(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setNotes(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setProblemDesc(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setTimeSpent(instance, castTo($readObject(streamReader), 20));
  setType(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUnitName_0(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
  setUpload(instance, castTo($readObject(streamReader), 20));
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

defineClass(77, 1, {77:1, 3:1}, Measurement);
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
var Lcom_elektrimasinad_aho_shared_Measurement_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Measurement', 77);
function deserialize_7(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_7(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Measurement_2_classLit, $intern_0, 77, size_0, 0, 1);
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

defineClass(78, 1, {78:1, 3:1}, Raport);
_.companyName = '';
_.date = '';
_.measurerName = '';
_.measurerPhone = '';
_.raportID = '';
_.raportKey = '';
_.unitKey = '';
_.unitName = '';
var Lcom_elektrimasinad_aho_shared_Raport_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Raport', 78);
function deserialize_9(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_9(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Raport_2_classLit, $intern_0, 78, size_0, 0, 1);
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

defineClass(79, 1, {79:1, 3:1}, Unit);
var Lcom_elektrimasinad_aho_shared_Unit_2_classLit = createForClass('com.elektrimasinad.aho.shared', 'Unit', 79);
function deserialize_11(streamReader, instance){
  deserialize_20(streamReader, instance);
}

function instantiate_11(streamReader){
  var size_0;
  size_0 = streamReader.results[--streamReader.index_0];
  return initUnidimensionalArray(Lcom_elektrimasinad_aho_shared_Unit_2_classLit, $intern_0, 79, size_0, 0, 1);
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
  this$static.wasStarted && $onComplete(this$static);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + $wnd.Math.cos($intern_2 + progress * $intern_2)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.container1.style['overflow'] = 'hidden';
    this$static.container2.style['overflow'] = 'hidden' , undefined;
    $onUpdate(this$static, 0);
    setVisible(this$static.container1, true);
    setVisible(this$static.container2, true);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    $onComplete(this$static);
    return false;
  }
  return true;
}

function Animation(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(96, 1, {});
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 96);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(148, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 148);
defineClass(258, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 258);
defineClass(83, 1, {83:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 83);
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

defineClass(218, 258, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 218);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(219, 83, {83:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 219);
function $cancelAnimationFrame(this$static, requestId){
  $remove_4(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initUnidimensionalArray(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {266:1, 3:1}, 84, this$static.animationRequests.array.length, 0, 1);
  curAnimations = castTo($toArray(this$static.animationRequests, curAnimations), 266);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_4(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(220, 258, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_1(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_6(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 220);
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
  this$static.timerId = valueOf_1(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
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

defineClass(104, 1, {});
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
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 104);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(221, 104, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 221);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(84, 83, {83:1, 84:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 84);
function Duration(){
  this.start_0 = now_1();
}

defineClass(101, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 101);
function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception);
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_0, 4, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  this$static.writetableStackTrace && this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState(!this$static.cause);
  checkCriticalArgument(true, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
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

defineClass(4, 1, $intern_3);
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
_.toString_0 = function toString_1(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(35, 4, $intern_3);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 35);
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

defineClass(8, 35, $intern_3);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8);
defineClass(70, 8, $intern_3);
var Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 70);
defineClass(128, 70, $intern_3);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 128);
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
  this.detailMessage = e == null?'null':toString_9(e);
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

defineClass(27, 128, {27:1, 3:1, 4:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 27);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0);
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

defineClass(227, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 227);
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
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):$execute_0(t[0]);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 27)?castTo(e, 27).getThrown():e);
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

defineClass(171, 227, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 171);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(172, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 172);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(173, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 173);
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
defineClass(241, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 241);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(129, 241, {}, StackTraceCreator$CollectorLegacy);
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
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 129);
defineClass(242, 241, {});
_.collect = function collect_0(error){
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 242);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(130, 242, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 130);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $createInputElement(doc, type_0){
  var e = doc.createElement('INPUT');
  e.type = type_0;
  return e;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $buttonClick(button){
  var doc = button.ownerDocument;
  if (doc != null) {
    var evt = doc.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, null, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    button.dispatchEvent(evt);
  }
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

function $isOrHasChild(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $toString_0(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(6, 1, {3:1, 5:1, 6:1});
_.equals_0 = function equals_0(other){
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
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 6);
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

function values(){
  $clinit_Style$TextAlign();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_0, 21, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(21, 6, $intern_4);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 21, Ljava_lang_Enum_2_classLit, values);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(167, 21, $intern_4, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 167, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(168, 21, $intern_4, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 168, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(169, 21, $intern_4, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 169, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(170, 21, $intern_4, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 170, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
defineClass(247, 1, {});
_.toString_0 = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 247);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(248, 247, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 248);
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
        type_0 = castTo(type$iterator.next_1(), 60);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(253, 248, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 253);
defineClass(254, 253, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 254);
defineClass(255, 254, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 255);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(166, 255, {}, ClickEvent);
_.dispatch = function dispatch(handler){
  castTo(handler, 86).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 166);
defineClass(142, 1, {});
_.hashCode_0 = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 142);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(57, 142, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 57);
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

defineClass(60, 57, {60:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 60);
defineClass(259, 253, {});
var Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyEvent', 259);
defineClass(260, 259, {});
var Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyCodeEvent', 260);
function $clinit_KeyDownEvent(){
  $clinit_KeyDownEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('keydown', new KeyDownEvent);
}

function $dispatch(this$static, handler){
  var kood;
  kood = this$static.nativeEvent.keyCode | 0;
  kood == 13 && $buttonClick($getElement(handler.val$loginButton2));
}

function KeyDownEvent(){
}

defineClass(222, 260, {}, KeyDownEvent);
_.dispatch = function dispatch_0(handler){
  $dispatch(this, castTo(handler, 230));
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyDownEvent', 222);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(180, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 180);
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_1) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(196, 248, {}, CloseEvent_0);
_.dispatch = function dispatch_1(handler){
  castTo(handler, 262);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 196);
function $dispatch_0(handler){
  $getClientWidth($doc) < 1000?(handler.this$01.isMobileView = true):(handler.this$01.isMobileView = false);
  $updateWidgetSizes(handler.this$01);
}

function ResizeEvent(){
}

function fire_1(source){
  var event_0;
  if (TYPE_2) {
    event_0 = new ResizeEvent;
    $fireEvent(source, event_0);
  }
}

defineClass(162, 248, {}, ResizeEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch_0(castTo(handler, 229));
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 162);
function $addHandler(this$static, type_0, handler){
  return $doAdd(this$static.eventBus, type_0, handler) , new LegacyHandlerWrapper;
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 41)) {
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

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(56, 1, {11:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 56);
defineClass(249, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 249);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_6(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1;
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
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType()) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(castTo(handler, 43));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put(causes.map_0, e, causes);
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

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 30);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = castTo(sourceMap.get_0(source), 14);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = castTo($get_0(this$static.map_0, type_0), 30);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = castTo(sourceMap.get_0(null), 14);
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
        c = castTo($next_1(c$iterator), 263);
        $doAddNow(c.this$01, c.val$type2, c.val$source3, c.val$handler4);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(143, 249, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 143);
function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(144, 143, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 144);
function LegacyHandlerWrapper(){
}

defineClass(176, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 176);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:castTo(causes.iterator().next_1(), 4));
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_1(), 4);
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
    t = castTo(t$iterator.next_1(), 4);
    first?(first = false):(b.string += '; ' , b);
    $append_1(b, t.getMessage());
  }
  return b.string;
}

defineClass(41, 8, $intern_5, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 41);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(91, 41, $intern_5, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 91);
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

defineClass(193, 1, {}, Request_0);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 193);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(195, 104, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 195);
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
    if (instanceOf($e0, 27)) {
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
    if (instanceOf($e1, 27)) {
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
      header = $next_0(header$iterator);
      try {
        $setRequestHeader(xmlHttpRequest, castToString(header.getKey()), castToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 27)) {
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

defineClass(107, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 107);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(200, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 200);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(49, 1, {}, RequestBuilder$Method);
_.toString_0 = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 49);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(25, 35, $intern_6, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 25);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(202, 25, $intern_6, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 202);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(210, 25, $intern_6, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 210);
defineClass(257, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 257);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(194, 257, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 194);
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

function values_0(){
  $clinit_HasDirection$Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_0, 48, 0, [RTL, LTR, DEFAULT]);
}

defineClass(48, 6, {48:1, 3:1, 5:1, 6:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 48, Ljava_lang_Enum_2_classLit, values_0);
function $setTime(this$static, time){
  this$static.jsdate.setTime(toDouble_0(time));
}

function Date_0(date){
  this.jsdate = new $wnd.Date(toDouble_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(19, 1, $intern_7, Date_0);
_.equals_0 = function equals_1(obj){
  return instanceOf(obj, 19) && eq(this.getTime_0(), castTo(obj, 19).getTime_0());
}
;
_.getTime_0 = function getTime(){
  return fromDouble_0(this.jsdate.getTime());
}
;
_.hashCode_0 = function hashCode_3(){
  var time;
  return time = this.getTime_0() , toInt_0(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_6(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + (offset / 60 | 0);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 19);
function DateRecord(){
  this.jsdate = new $wnd.Date;
  this.era = -1;
  this.ambiguousYear = false;
  this.year = $intern_8;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.midnightIs24 = false;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = $intern_8;
}

defineClass(152, 19, $intern_7, DateRecord);
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
var Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl', 'DateRecord', 152);
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
  $append(streamWriter, longToBase64(fromDouble_0(instance.jsdate.getTime())));
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

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_9;
  a1 = value_0 >> 22 & $intern_9;
  a2 = value_0 < 0?$intern_10:0;
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
  if (b.h == $intern_11 && b.m == 0 && b.l == 0) {
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
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
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
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
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
  neg0 = ~a.l + 1 & $intern_9;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_9;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_10;
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
  return a.l + a.m * $intern_12 + a.h * $intern_13;
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
  a.l = sum0 & $intern_9;
  a.m = sum1 & $intern_9;
  a.h = sum2 & $intern_10;
  return true;
}

var remainder;
function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_9, sum1 & $intern_9, sum2 & $intern_10);
}

function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

function compare(a, b){
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
  if (value_0 >= $intern_13) {
    a2 = round_int(value_0 / $intern_13);
    value_0 -= a2 * $intern_13;
  }
  a1 = 0;
  if (value_0 >= $intern_12) {
    a1 = round_int(value_0 / $intern_12);
    value_0 -= a1 * $intern_12;
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
  c00 = p0 & $intern_9;
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
  c0 &= $intern_9;
  c2 += c1 >> 22;
  c1 &= $intern_9;
  c2 &= $intern_10;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_9;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_9;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_10;
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
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_11) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_10:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_10:0;
    res1 = negative?$intern_9:0;
    res0 = a2 >> n - 44;
  }
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_10;
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
  return create0(res0 & $intern_9, res1 & $intern_9, res2 & $intern_10);
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_9, sum1 & $intern_9, sum2 & $intern_10);
}

function toDouble(a){
  if (compare(a, ($clinit_BigLongLib$Const() , ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_12 + a.h * $intern_13;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_7(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_11 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_7(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return create0(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
}

function $clinit_BigLongLib$Const(){
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_9, $intern_9, 524287);
  MIN_VALUE = create0(0, 0, $intern_11);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function toJava(e){
  var javaException;
  if (instanceOf(e, 4)) {
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

function add_1(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_14 < result && result < $intern_13) {
      return result;
    }
  }
  return createLongEmul(add_0(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function createLongEmul(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_12;
  }
  if (a2 == $intern_10) {
    return big_0.l + big_0.m * $intern_12 - $intern_13;
  }
  return big_0;
}

function div(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a / b;
    if ($intern_14 < result && result < $intern_13) {
      return result < 0?$wnd.Math.ceil(result):$wnd.Math.floor(result);
    }
  }
  return createLongEmul(divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, false));
}

function eq(a, b){
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  if ($intern_14 < value_0 && value_0 < $intern_13) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function mod(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a % b;
    if ($intern_14 < result && result < $intern_13) {
      return result;
    }
  }
  return createLongEmul((divMod(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b, true) , remainder));
}

function mul_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a * b;
    if ($intern_14 < result && result < $intern_13) {
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
    value_0 += $intern_13;
    a3 = $intern_10;
  }
  a1 = round_int(value_0 / $intern_12);
  a0 = round_int(value_0 - a1 * $intern_12);
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

function toInt_0(a){
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_8(a){
  if (isSmallLong0(a)) {
    return '' + a;
  }
  return toString_7(a);
}

function xor_0(a, b){
  return createLongEmul(xor(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b));
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad(new Login);
}

function SafeUriString(uri_0){
  this.uri_0 = uri_0;
}

defineClass(61, 1, {264:1, 61:1}, SafeUriString);
_.equals_0 = function equals_2(obj){
  if (!instanceOf(obj, 61)) {
    return false;
  }
  return $equals(this.uri_0, castTo(castTo(obj, 264), 61).uri_0);
}
;
_.hashCode_0 = function hashCode_4(){
  return getHashCode_2(this.uri_0);
}
;
_.toString_0 = function toString_10(){
  return 'safe: "' + this.uri_0 + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 61);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'sessionStorage';
}

defineClass(115, 1, {}, Storage_0);
var sessionStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 115);
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
function $getItem(storage, key){
  return $wnd[storage].getItem(key);
}

function $setItem_0(storage, key, data_0){
  $wnd[storage].getItem(key);
  $wnd[storage].setItem(key, data_0);
}

defineClass(261, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 261);
function PassthroughParser(){
}

defineClass(225, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 225);
function PassthroughRenderer(){
}

defineClass(224, 261, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 224);
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

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $clinit_DOM();
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function sinkEvents(elem){
  $clinit_DOM();
  $sinkEvents(elem, 32768);
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_1?TYPE_1:(TYPE_1 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_2 && (TYPE_2 = new GwtEvent$Type) , TYPE_2), handler);
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
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_1((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
  }
}

var closeHandlersInitialized = false, handlers_0, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_3 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(141, 248, {}, Window$ClosingEvent);
_.dispatch = function dispatch_3(handler){
  checkCriticalType(handler == null);
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 141);
function assign(newURL){
  $wnd.location.assign(newURL);
}

function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(73, 56, {11:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 73);
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
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return $intern_15;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_11;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_12;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_16;
    case 'gesturechange':
      return $intern_17;
    case 'gestureend':
      return $intern_18;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 13)?maybeListener:null;
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

function $initEventSystem(){
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
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & $intern_15 && (elem.onmousewheel = bits & $intern_15?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & $intern_11 && (elem.onpaste = bits & $intern_11?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & $intern_12 && (elem.ontouchend = bits & $intern_12?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_16 && (elem.ongesturestart = bits & $intern_16?dispatchEvent_1:null);
  chMask & $intern_17 && (elem.ongesturechange = bits & $intern_17?dispatchEvent_1:null);
  chMask & $intern_18 && (elem.ongestureend = bits & $intern_18?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOMImplStandard();
  $clinit_DOM();
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

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & $intern_15 && elem.addEventListener('DOMMouseScroll', ($clinit_DOMImplStandard() , dispatchEvent_1), false);
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
      closeHandlersInitialized && fire_0((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
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
      onResize();
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

defineClass(58, 8, $intern_3, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 58);
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

defineClass(46, 8, $intern_3, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 46);
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

function $finish(this$static){
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

defineClass(201, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 201);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(153, 8, $intern_3, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 153);
function deserialize_15(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, streamReader.results[--streamReader.index_0]));
}

function instantiate_15(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception.call(this, msg);
}

defineClass(42, 35, {42:1, 3:1, 4:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 42);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(135, 46, $intern_3, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 135);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(206, 46, $intern_3, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 206);
function serialize_11(streamWriter, instance){
  $writeString(streamWriter, instance.$_nullField);
}

function deserialize_16(streamReader, instance){
}

function instantiate_16(streamReader){
  return $readDouble(streamReader);
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
  return valueOf_1(streamReader.results[--streamReader.index_0]);
}

function serialize_13(streamWriter, instance){
  $append(streamWriter, '' + instance.value_0);
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
  $append(streamWriter, '' + $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function deserialize_22(streamReader, instance){
}

function instantiate_21(streamReader){
  return new Date_1($readLong(streamReader));
}

function serialize_16(streamWriter, instance){
  $append(streamWriter, longToBase64(fromDouble_0(instance.jsdate.getTime())));
}

function deserialize_23(streamReader, instance){
}

function instantiate_22(streamReader){
  return new Time($readLong(streamReader));
}

function serialize_17(streamWriter, instance){
  $append(streamWriter, longToBase64(fromDouble_0(instance.jsdate.getTime())));
}

function deserialize_24(streamReader, instance){
  $setNanos(instance, streamReader.results[--streamReader.index_0]);
}

function instantiate_23(streamReader){
  return new Timestamp($readLong(streamReader));
}

function serialize_18(streamWriter, instance){
  $append(streamWriter, longToBase64(fromDouble_0(instance.jsdate.getTime())));
  $append(streamWriter, '' + instance.nanos);
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
  array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, size_0, 5, 1);
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
  return new Date_0($readLong(streamReader));
}

function serialize_24(streamWriter, instance){
  $append(streamWriter, longToBase64(instance.getTime_0()));
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
  low = toInt_0(createLongEmul(and(isSmallLong0(value_0)?toBigLong(value_0):value_0, isSmallLong0(-1)?toBigLong(-1):-1)));
  high = toInt_0(createLongEmul(shr(isSmallLong0(value_0)?toBigLong(value_0):value_0, 32)));
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

defineClass(106, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 106);
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
  return id_0 = ($add_6(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(207, 106, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 207);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = castTo($getStringValue(this$static.stringMap, string), 20);
  if (o) {
    return o.value_0;
  }
  $add_6(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  $putStringValue(this$static.stringMap, string, valueOf_1(index_0));
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
    $append(this$static, '' + $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)?castTo($get_0(this$static.objectMap, instance), 20).value_0:-1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, '' + -(objIndex + 1));
    return;
  }
  $put(this$static.objectMap, instance, valueOf_1(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw toJs(new SerializationException('could not get type signature for ' + getClass__Ljava_lang_Class___devirtual$(instance)));
  }
  $append(this$static, '' + $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0){
  $append(this$static, '' + $addString(this$static, value_0));
}

defineClass(198, 106, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 198);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  var versionStr;
  versionStr = $substring_0(encoded, encoded.lastIndexOf(',') + 1, encoded.lastIndexOf(']'));
  __parseAndValidateInt($trim(versionStr)) < 8?(this$static.results = eval(encoded)):(this$static.results = safeEval(encoded));
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
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

function $readDouble(this$static){
  return Number(this$static.results[--this$static.index_0]);
}

function $readLong(this$static){
  var s = this$static.results[--this$static.index_0];
  return longFromBase64(s);
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(208, 207, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 208);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $append(this$static, token){
  append(this$static.encodeBuffer, token);
}

function $getObjectTypeSignature(this$static, o){
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 6)) {
    e = castTo(o, 6);
    clazz = (clazz_0 = e.___clazz , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString_1(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_1(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new ArrayList$1(stringTable); s$iterator.i < s$iterator.this$01.array.length;) {
    s = castToString($next_1(s$iterator));
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

defineClass(199, 198, {}, ClientSerializationStreamWriter);
_.toString_0 = function toString_11(){
  return $toString_1(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 199);
function $finish_0(this$static, callback, responseHeader){
  var payload;
  payload = $toString_1(this$static.streamWriter);
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, responseHeader, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function $start(this$static, remoteServiceInterfaceName, paramCount){
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'begin'));
  this$static.streamWriter = this$static.this$01.createStreamWriter();
  $writeString(this$static.streamWriter, remoteServiceInterfaceName);
  $writeString(this$static.streamWriter, this$static.methodName);
  $writeInt(this$static.streamWriter, paramCount);
  return this$static.streamWriter;
}

function RemoteServiceProxy$ServiceHelper(this$0, serviceName, methodName){
  this.this$01 = this$0;
  this.fullServiceName = serviceName + '.' + methodName;
  this.methodName = methodName;
  this.statsContext = new RpcStatsContext;
}

defineClass(94, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 94);
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
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals(encodedResponse.substr(0, 4), '//OK')?(result = this$static.responseReader.read($createStreamReader(this$static.streamFactory, encodedResponse))):$equals(encodedResponse.substr(0, 4), '//EX')?(caught = castTo($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 4)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 42)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 4)) {
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

function RequestCallbackAdapter(streamFactory, methodName, statsContext, callback, responseReader){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
  this.responseReader = responseReader;
}

defineClass(181, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 181);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4;
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

function values_1(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_0, 7, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(7, 6, $intern_19);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 7, Ljava_lang_Enum_2_classLit, values_1);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(182, 7, $intern_19, RequestCallbackAdapter$ResponseReader$1);
_.read = function read(streamReader){
  return $clinit_Boolean() , $readBoolean(streamReader)?true:false;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 182, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(191, 7, $intern_19, RequestCallbackAdapter$ResponseReader$10);
_.read = function read_0(streamReader){
  return $getString(streamReader, streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 191, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(192, 7, $intern_19, RequestCallbackAdapter$ResponseReader$11);
_.read = function read_1(streamReader){
  return null;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 192, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(183, 7, $intern_19, RequestCallbackAdapter$ResponseReader$2);
_.read = function read_2(streamReader){
  return valueOf(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 183, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(184, 7, $intern_19, RequestCallbackAdapter$ResponseReader$3);
_.read = function read_3(streamReader){
  return valueOf_0(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 184, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(185, 7, $intern_19, RequestCallbackAdapter$ResponseReader$4);
_.read = function read_4(streamReader){
  return $readDouble(streamReader);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 185, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(186, 7, $intern_19, RequestCallbackAdapter$ResponseReader$5);
_.read = function read_5(streamReader){
  return new Float(Number(streamReader.results[--streamReader.index_0]));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 186, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(187, 7, $intern_19, RequestCallbackAdapter$ResponseReader$6);
_.read = function read_6(streamReader){
  return valueOf_1(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 187, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(188, 7, $intern_19, RequestCallbackAdapter$ResponseReader$7);
_.read = function read_7(streamReader){
  return valueOf_2($readLong(streamReader));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 188, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(189, 7, $intern_19, RequestCallbackAdapter$ResponseReader$8);
_.read = function read_8(streamReader){
  return $readObject(streamReader);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 189, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(190, 7, $intern_19, RequestCallbackAdapter$ResponseReader$9);
_.read = function read_9(streamReader){
  return valueOf_3(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 190, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
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

defineClass(105, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 105);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature){
  this$static[signature][2](stream, instance);
}

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

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
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

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(10, 1, {12:1, 10:1});
_.toString_0 = function toString_12(){
  if (!this.element) {
    return '(null handle)';
  }
  return $toString_0(($clinit_DOM() , this.element));
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 10);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type_0.name_0):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this$static.element, typeInt | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_0(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
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
  if (!this$static.attached) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove(this$static);
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
      !!oldParent && oldParent.attached && $onDetach(this$static);
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
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(9, 10, $intern_20);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
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
_.onLoad = function onLoad(){
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 9);
function $clear(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.children);
  while (it.index_0 < it.this$01.size_0) {
    $next(it);
    $remove_2(it);
  }
}

defineClass(243, 9, $intern_20);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 243);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_4(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $checkIndexBoundsForAccess(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.children.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
}

function $getWidgetIndex(this$static, child){
  return $indexOf(this$static.children, child);
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
    $remove_1(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(71, 243, $intern_20);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 71);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function AbsolutePanel(){
  AbsolutePanel_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
  this.element.style['position'] = 'relative';
  this.element.style['overflow'] = 'hidden';
}

function AbsolutePanel_0(elem){
  ComplexPanel.call(this);
  $setElement(this, ($clinit_DOM() , elem));
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(67, 71, $intern_20, AbsolutePanel);
_.remove = function remove_0(w){
  var removed;
  removed = $remove(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 67);
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
    w = castTo(w$iterator.next_1(), 9);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(131, 91, $intern_5, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 131);
function AttachDetachException$1(){
}

defineClass(132, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_3(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 132);
function AttachDetachException$2(){
}

defineClass(133, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_4(w){
  $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 133);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

function FocusWidget(elem){
  $setElement(this, ($clinit_DOM() , elem));
}

defineClass(109, 9, $intern_20);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = ($clinit_DOM() , this.element).tabIndex;
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 109);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(217, 109, $intern_20);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 217);
function Button(handler){
  var e;
  $clinit_FocusWidget();
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.type = 'button' , e));
  ($clinit_DOM() , this.element).className = 'gwt-Button';
  this.element.innerHTML = 'Logi sisse';
  $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(69, 217, $intern_20, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 69);
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
  $setElement(this, this.table);
}

defineClass(90, 71, $intern_20);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 90);
function $add_1(this$static, w){
  var container, container_0, element;
  container = (container_0 = ($clinit_DOM() , $doc.createElement('div')) , container_0.style['width'] = '100%' , undefined , container_0.style['height'] = '0px' , undefined , container_0.style['padding'] = '0px' , undefined , container_0.style['margin'] = '0px' , undefined , container_0);
  $appendChild(this$static.element, resolve(container));
  $add(this$static, w, container);
  setVisible(container, false);
  container.style['height'] = '100%';
  element = w.element;
  $equals(element.style['width'], '') && (w.element.style['width'] = '100%' , undefined);
  $equals(element.style['height'], '') && (w.element.style['height'] = '100%' , undefined);
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
  $setElement(this, ($clinit_DOM() , $doc.createElement('div')));
}

defineClass(121, 71, $intern_20, DeckPanel);
_.remove = function remove_1(w){
  var container, removed;
  container = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  if (removed) {
    w.element.style['width'] = '';
    w.element.style['height'] = '';
    setVisible(w.element, true);
    $removeChild(this.element, container);
    this.visibleWidget == w && (this.visibleWidget = null);
  }
  return removed;
}
;
var slideAnimation;
var Lcom_google_gwt_user_client_ui_DeckPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckPanel', 121);
function $onComplete(this$static){
  if (this$static.growing) {
    this$static.container1.style['height'] = '100%';
    setVisible(this$static.container1, true);
    setVisible(this$static.container2, false);
    this$static.container2.style['height'] = '100%';
  }
   else {
    setVisible(this$static.container1, false);
    this$static.container1.style['height'] = '100%';
    this$static.container2.style['height'] = '100%';
    setVisible(this$static.container2, true);
  }
  this$static.container1.style['overflow'] = 'visible';
  this$static.container2.style['overflow'] = 'visible';
  this$static.container1 = null;
  this$static.container2 = null;
  $setVisible(this$static.oldWidget);
  this$static.oldWidget = null;
}

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
  Animation.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
}

defineClass(147, 96, {}, DeckPanel$SlideAnimation);
_.container1 = null;
_.container2 = null;
_.fixedHeight = -1;
_.growing = false;
_.oldWidget = null;
var Lcom_google_gwt_user_client_ui_DeckPanel$SlideAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DeckPanel/SlideAnimation', 147);
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

defineClass(209, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 209);
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
defineClass(244, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 244);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(53, 244, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 53);
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(72, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 72);
function $add_2(this$static, w){
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

defineClass(66, 90, $intern_20, HorizontalPanel);
_.remove = function remove_2(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 66);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function Image_0(url_0){
  $changeState(this, new Image$UnclippedState(this, url_0));
  ($clinit_DOM() , this.element).className = 'gwt-Image';
}

function Image_1(url_0){
  $clinit_Image();
  Image_0.call(this, ($clinit_UriUtils() , new SafeUriString(url_0)));
}

defineClass(65, 9, $intern_20, Image_1);
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $clinit_DOM();
  $eventGetTypeInt(event_0.type) == 32768 && !!this.state && (this.element['__gwtLastUnhandledEvent'] = '' , undefined);
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 65);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(139, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 139);
function $execute_0(this$static){
  var evt, evt_0;
  if (this$static.val$image2.state != this$static.this$11 || this$static != this$static.this$11.syntheticEventCommand) {
    return;
  }
  this$static.this$11.syntheticEventCommand = null;
  if (!this$static.val$image2.attached) {
    $getImageElement(this$static.val$image2)['__gwtLastUnhandledEvent'] = 'load';
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent($getImageElement(this$static.val$image2), evt);
}

function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(140, 1, {}, Image$State$1);
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 140);
function $getImageElement(image){
  return $clinit_DOM() , image.element;
}

function Image$UnclippedState(image, url_0){
  $replaceElement(image, $doc.createElement('img'));
  sinkEvents(($clinit_DOM() , image.element));
  image.eventsToSink == -1?$sinkEvents(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
  !!image.state && (image.element['__gwtLastUnhandledEvent'] = '' , undefined);
  $setSrc(image.element, url_0.uri_0);
}

defineClass(95, 139, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 95);
function LabelBase(element){
  $setElement(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(108, 9, $intern_20);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 108);
function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  ($clinit_DOM() , this.element).className = 'gwt-Label';
}

function Label_0(text_0){
  Label.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0);
}

defineClass(34, 108, $intern_20, Label, Label_0);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 34);
function $getValueOrThrow(this$static){
  var parseResult, text_0;
  text_0 = $getPropertyString(($clinit_DOM() , this$static.element), 'value');
  parseResult = (checkCriticalNotNull(text_0) , text_0);
  if ($equals('', text_0)) {
    return null;
  }
  return parseResult;
}

function $setValue(this$static, value_0){
  ($clinit_DOM() , this$static.element)['value'] = value_0 != null?value_0:'';
}

function ValueBoxBase(elem){
  $clinit_FocusWidget();
  FocusWidget.call(this, elem);
}

defineClass(211, 109, $intern_20);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 211);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_FocusWidget();
  $clinit_ValueBoxBase$TextAlignment();
}

defineClass(212, 211, $intern_20);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 212);
function TextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'text'), 'gwt-TextBox');
}

function TextBox_0(element, styleName){
  ValueBoxBase.call(this, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser) , element));
  $setClassName(($clinit_DOM() , this.element), styleName);
}

defineClass(68, 212, $intern_20, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 68);
function PasswordTextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

defineClass(123, 68, $intern_20, PasswordTextBox);
var Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PasswordTextBox', 123);
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
    $onDetach(widget);
  }
   finally {
    $remove_5(widgetsToDetach, widget);
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
  rp = castTo($get_0(rootPanels, null), 55);
  if (rp) {
    return rp;
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put(rootPanels, null, rp);
  $add_7(widgetsToDetach, rp);
  return rp;
}

defineClass(55, 67, $intern_21);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 55);
function RootPanel$1(){
}

defineClass(137, 1, {}, RootPanel$1);
_.execute_1 = function execute_5(w){
  w.attached && $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 137);
function RootPanel$2(){
}

defineClass(138, 1, {262:1, 43:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 138);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(136, 55, $intern_21, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 136);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_ValueBoxBase$TextAlignment();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_0, 22, 0, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(22, 6, $intern_22);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 22, Ljava_lang_Enum_2_classLit, values_2);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(213, 22, $intern_22, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 213, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(214, 22, $intern_22, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 214, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(215, 22, $intern_22, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 215, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(216, 22, $intern_22, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 216, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function $add_3(this$static, w){
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

defineClass(64, 90, $intern_20, VerticalPanel);
_.remove = function remove_3(w){
  var removed, td;
  td = ($clinit_DOM() , $getParentElement(w.element));
  removed = $remove(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 64);
function $add_4(this$static, w){
  $insert(this$static, w, this$static.size_0);
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

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_0, 9, this$static.array.length * 2, 0, 1);
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

function $remove_0(this$static, index_0){
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

function $remove_1(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_0(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_0, 9, 4, 0, 1);
}

defineClass(174, 1, {}, WidgetCollection);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 174);
function $next(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_2(this$static){
  if (!this$static.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(81, 1, {}, WidgetCollection$WidgetIterator);
_.next_1 = function next_0(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.index_0 < this.this$01.size_0;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 81);
function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplStandard;
  implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(223, 1, {}, FocusImpl);
var implPanel;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImpl', 223);
function FocusImplStandard(){
}

defineClass(226, 223, {}, FocusImplStandard);
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplStandard', 226);
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

defineClass(63, 4, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 63);
defineClass(17, 63, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 17);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.' == null?'null':toString_9('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4)?castTo('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 4):null);
}

defineClass(111, 17, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 111);
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

function SimpleEventBus$1(){
}

defineClass(145, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 145);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(146, 1, {263:1}, SimpleEventBus$2);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 146);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(88, 1, {112:1});
_.toString_0 = function toString_13(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 88);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(150, 8, $intern_3, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 150);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(28, 8, $intern_3, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 28);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

defineClass(204, 28, $intern_3, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 204);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(149, 8, $intern_3, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 149);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  $clinit_Boolean();
}

booleanCastMap = {3:1, 5:1};
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 240);
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
  isTooLow = toReturn < $intern_8;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException_0('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw toJs(new NumberFormatException_0('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(31, 1, {3:1, 31:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 31);
function Byte(value_0){
  this.value_0 = value_0;
}

function valueOf(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues)[rebase];
  !result && (result = boxedValues[rebase] = new Byte(b));
  return result;
}

defineClass(44, 31, {3:1, 44:1, 5:1, 31:1}, Byte);
_.equals_0 = function equals_3(o){
  return instanceOf(o, 44) && castTo(o, 44).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_5(){
  return this.value_0;
}
;
_.toString_0 = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 44);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Byte_2_classLit, $intern_0, 44, 256, 0, 1);
}

var boxedValues;
function Character(value_0){
  this.value_0 = value_0;
}

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

function valueOf_0(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_0)[c];
    !result && (result = boxedValues_0[c] = new Character(c));
    return result;
  }
  return new Character(c);
}

defineClass(36, 1, {3:1, 36:1, 5:1}, Character);
_.equals_0 = function equals_4(o){
  return instanceOf(o, 36) && castTo(o, 36).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_6(){
  return this.value_0;
}
;
_.toString_0 = function toString_15(){
  return String.fromCharCode(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 36);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_0 = initUnidimensionalArray(Ljava_lang_Character_2_classLit, $intern_0, 36, 128, 0, 1);
}

var boxedValues_0;
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(127, 8, $intern_3, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 127);
doubleCastMap = {3:1, 5:1, 126:1, 31:1};
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 126);
function Float(value_0){
  this.value_0 = value_0;
}

defineClass(51, 31, {3:1, 5:1, 51:1, 31:1}, Float);
_.equals_0 = function equals_5(o){
  return instanceOf(o, 51) && castTo(o, 51).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_7(){
  return round_int(this.value_0);
}
;
_.toString_0 = function toString_17(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 51);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(23, 8, $intern_3, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 23);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(40, 8, $intern_3, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 40);
function Integer(value_0){
  this.value_0 = value_0;
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
    y_0 = i - 16384;
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

function valueOf_1(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_1)[rebase];
    !result && (result = boxedValues_1[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(20, 31, {3:1, 5:1, 20:1, 31:1}, Integer);
_.equals_0 = function equals_6(o){
  return instanceOf(o, 20) && castTo(o, 20).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_8(){
  return this.value_0;
}
;
_.toString_0 = function toString_18(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 20);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_1 = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_0, 20, 256, 0, 1);
}

var boxedValues_1;
function Long(value_0){
  this.value_0 = value_0;
}

function valueOf_2(i){
  var rebase, result;
  if (compare_0(i, -129) > 0 && compare_0(i, 128) < 0) {
    rebase = toInt_0(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(37, 31, {3:1, 5:1, 37:1, 31:1}, Long);
_.equals_0 = function equals_7(o){
  return instanceOf(o, 37) && eq(castTo(o, 37).value_0, this.value_0);
}
;
_.hashCode_0 = function hashCode_9(){
  return toInt_0(this.value_0);
}
;
_.toString_0 = function toString_19(){
  return '' + toString_8(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 37);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_2 = initUnidimensionalArray(Ljava_lang_Long_2_classLit, $intern_0, 37, 256, 0, 1);
}

var boxedValues_2;
function max_0(y_0){
  return 5 > y_0?5:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(32, 70, $intern_3, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 32);
function NumberFormatException(){
  IllegalArgumentException.call(this);
}

function NumberFormatException_0(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(45, 23, $intern_3, NumberFormatException, NumberFormatException_0);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 45);
function Short(value_0){
  this.value_0 = value_0;
}

function valueOf_3(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Short(s));
    return result;
  }
  return new Short(s);
}

defineClass(38, 31, {3:1, 5:1, 31:1, 38:1}, Short);
_.equals_0 = function equals_8(o){
  return instanceOf(o, 38) && castTo(o, 38).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_10(){
  return this.value_0;
}
;
_.toString_0 = function toString_20(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 38);
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = emptyMethod;
  boxedValues_3 = initUnidimensionalArray(Ljava_lang_Short_2_classLit, $intern_0, 38, 256, 0, 1);
}

var boxedValues_3;
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
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

function $replaceAll(this$static, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp('index', 'g'), replace);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
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

stringCastMap = {3:1, 112:1, 5:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_1(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $replace(this$static, start_0, toInsert){
  this$static.string = $substring_0(this$static.string, 0, start_0) + toInsert + this$static.string.substr(9);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(39, 88, {112:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 39);
defineClass(283, 1, {});
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(52, 8, $intern_3, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 52);
function Date_1(date){
  Date_0.call(this, date);
}

defineClass(154, 19, $intern_7, Date_1);
_.toString_0 = function toString_21(){
  return '' + (1900 + (this.jsdate.getFullYear() - 1900)) + '-' + padTwo(this.jsdate.getMonth() + 1) + '-' + padTwo(this.jsdate.getDate());
}
;
var Ljava_sql_Date_2_classLit = createForClass('java.sql', 'Date', 154);
function Time(time){
  Date_0.call(this, time);
}

defineClass(155, 19, $intern_7, Time);
_.toString_0 = function toString_22(){
  return padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds());
}
;
var Ljava_sql_Time_2_classLit = createForClass('java.sql', 'Time', 155);
function $equals_0(this$static, ts){
  return !!ts && eq(fromDouble_0(this$static.jsdate.getTime()), fromDouble_0(ts.jsdate.getTime())) && this$static.nanos == ts.nanos;
}

function $setNanos(this$static, n){
  if (n < 0 || n > 999999999) {
    throw toJs(new IllegalArgumentException_0('nanos out of range ' + n));
  }
  this$static.nanos = n;
  $setTime(this$static, add_1(mul_0(div(fromDouble_0(this$static.jsdate.getTime()), 1000), 1000), this$static.nanos / 1000000 | 0));
}

function Timestamp(time){
  Date_0.call(this, time);
  this.nanos = toInt_0(mod(time, 1000)) * 1000000;
}

function padNine(value_0){
  var asString, toReturn;
  toReturn = new StringBuilder_0('000000000');
  asString = '' + value_0;
  toReturn = $replace(toReturn, 9 - asString.length, asString);
  return toReturn.string;
}

defineClass(59, 19, {3:1, 5:1, 59:1, 19:1}, Timestamp);
_.equals_0 = function equals_9(ts){
  return instanceOf(ts, 59) && $equals_0(this, castTo(ts, 59));
}
;
_.getTime_0 = function getTime_0(){
  return fromDouble_0(this.jsdate.getTime());
}
;
_.hashCode_0 = function hashCode_11(){
  var time;
  return time = fromDouble_0(this.jsdate.getTime()) , toInt_0(xor_0(time, shru_0(time, 32)));
}
;
_.toString_0 = function toString_23(){
  return '' + (1900 + (this.jsdate.getFullYear() - 1900)) + '-' + padTwo(1 + this.jsdate.getMonth()) + '-' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + '.' + padNine(this.nanos);
}
;
_.nanos = 0;
var Ljava_sql_Timestamp_2_classLit = createForClass('java.sql', 'Timestamp', 59);
function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
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

function $toString_2(this$static){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this$static.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_8(joiner, e === this$static?'(this Collection)':e == null?'null':toString_9(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}

defineClass(245, 1, {});
_.add_0 = function add_2(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains = function contains(o){
  return $advanceToFind(this, o);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.toString_0 = function toString_24(){
  return $toString_2(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 245);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator(this$static.entrySet().this$01); iter.hasNext;) {
    entry = $next_0(iter);
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_3(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_9(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(251, 1, {30:1});
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.equals_0 = function equals_10(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 30)) {
    return false;
  }
  otherMap = castTo(obj, 30);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode_0 = function hashCode_12(){
  return hashCode_17(this.entrySet());
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.size_1 = function size_1(){
  return $size(this.entrySet().this$01);
}
;
_.toString_0 = function toString_25(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(this.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    $add_8(joiner, $toString_3(this, entry.getKey()) + '=' + $toString_3(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 251);
function $containsKey(this$static, key){
  return instanceOfString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
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

function $put(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_0(this$static.hashCodeMap, null, value_0):$put_1(this$static.stringMap, key, value_0);
}

function $remove_3(this$static, key){
  return instanceOfString(key)?key == null?$remove_6(this$static.hashCodeMap, null):$remove_7(this$static.stringMap, key):$remove_6(this$static.hashCodeMap, key);
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

defineClass(99, 251, {30:1});
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
  return $put(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 99);
defineClass(252, 245, {62:1});
_.equals_0 = function equals_11(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 62)) {
    return false;
  }
  other = castTo(o, 62);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_17(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 252);
function $contains(this$static, o){
  if (instanceOf(o, 26)) {
    return $containsEntry(this$static.this$01, castTo(o, 26));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(47, 252, {62:1}, AbstractHashMap$EntrySet);
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 47);
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

function $next_0(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  rv = castTo(this$static.current.next_1(), 26);
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
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

defineClass(24, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_1(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.hasNext;
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 24);
function $indexOf_0(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_18(toFind, this$static.get_1(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(246, 245, {14:1});
_.add_1 = function add_3(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_4(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_12(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 14)) {
    return false;
  }
  other = castTo(o, 14);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_18(this);
}
;
_.iterator = function iterator_3(){
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
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 246);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(92, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_1(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_2(){
  checkCriticalElement(this.i < this.this$01_0.size_1());
  return this.this$01_0.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 92);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(134, 92, {}, AbstractList$ListIteratorImpl);
_.add_2 = function add_5(o){
  this.this$01.add_1(this.i, o);
  ++this.i;
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(--this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 134);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(165, 252, {62:1}, AbstractMap$1);
_.contains = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_4(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_4(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 165);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(100, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_2(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_3(){
  var entry;
  entry = $next_0(this.val$outerIter2);
  return entry.getKey();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 100);
defineClass(163, 1, $intern_23);
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 26)) {
    return false;
  }
  entry = castTo(other, 26);
  return equals_18(this.key, entry.getKey()) && equals_18(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_15(){
  return hashCode_20(this.key) ^ hashCode_20(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_26(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 163);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(164, 163, $intern_23, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 164);
defineClass(256, 1, $intern_23);
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 26)) {
    return false;
  }
  entry = castTo(other, 26);
  return equals_18(this.val$entry2.value[0], entry.getKey()) && equals_18($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_16(){
  return hashCode_20(this.val$entry2.value[0]) ^ hashCode_20($getValue(this));
}
;
_.toString_0 = function toString_27(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 256);
defineClass(250, 246, {14:1});
_.add_1 = function add_6(index_0, element){
  var iter;
  iter = this.listIterator_0(index_0);
  iter.add_2(element);
}
;
_.get_1 = function get_3(index_0){
  var iter;
  iter = this.listIterator_0(index_0);
  try {
    return iter.next_1();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 33)) {
      throw toJs(new IndexOutOfBoundsException_0("Can't get element " + index_0));
    }
     else 
      throw toJs($e0);
  }
}
;
_.iterator = function iterator_5(){
  return this.listIterator_0(0);
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 250);
function $add_5(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_6(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $get_1(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_18(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_4(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this$static.array.length);
  removeFrom(this$static.array, i, 1);
  return true;
}

function $set(this$static, index_0, o){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  this$static.array[index_0] = o;
  return previous;
}

function $toArray(this$static, out){
  var i, result, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = new Array(size_0) , getElementTypeCategory(out) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap, out.__elementTypeId$, getElementTypeCategory(out), result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_0, 1, 0, 5, 1);
}

defineClass(18, 246, $intern_24, ArrayList);
_.add_1 = function add_7(index_0, o){
  $add_5(this, index_0, o);
}
;
_.add_0 = function add_8(o){
  return $add_6(this, o);
}
;
_.contains = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_4(index_0){
  return $get_1(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_6(){
  return new ArrayList$1(this);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 18);
function $next_1(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(54, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_3(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_4(){
  return $next_1(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 54);
function Arrays$ArrayList(array){
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(156, 246, $intern_24, Arrays$ArrayList);
_.contains = function contains_3(o){
  return $indexOf_0(this, o) != -1;
}
;
_.get_1 = function get_5(index_0){
  checkCriticalElementIndex(index_0, this.array.length);
  return this.array[index_0];
}
;
_.size_1 = function size_6(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 156);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_17(collection){
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

function hashCode_18(list){
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

defineClass(157, 246, $intern_24, Collections$EmptyList);
_.contains = function contains_4(object){
  return false;
}
;
_.get_1 = function get_6(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_7(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_7(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 157);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(175, 1, {}, Collections$EmptyListIterator);
_.add_2 = function add_9(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.hasNext_0 = function hasNext_4(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_5(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 175);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(158, 246, $intern_24, Collections$SingletonList);
_.contains = function contains_5(item_0){
  return equals_18(this.element, item_0);
}
;
_.get_1 = function get_7(index_0){
  checkCriticalElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_8(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 158);
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

defineClass(205, 8, $intern_3, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 205);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_0, 2, 6, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(29, 99, {3:1, 30:1}, HashMap);
_.equals_1 = function equals_15(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 29);
function $add_7(this$static, o){
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_5(this$static, o){
  return $remove_3(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(80, 252, {3:1, 62:1}, HashSet);
_.add_0 = function add_10(o){
  return $add_7(this, o);
}
;
_.contains = function contains_6(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_1(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_8(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.size_1 = function size_9(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 80);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(203, 99, {3:1, 30:1}, IdentityHashMap);
_.equals_0 = function equals_16(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 30)) {
    return false;
  }
  otherMap = castTo(obj, 30);
  if (this.hashCodeMap.size_0 + this.stringMap.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator(otherMap.entrySet().this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
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
_.equals_1 = function equals_17(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_0(key){
  return getHashCode_1(key);
}
;
_.hashCode_0 = function hashCode_19(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); entry$iterator.hasNext;) {
    entry = $next_0(entry$iterator);
    hashCode += getIdentityHashCode(entry.getKey());
    hashCode += getIdentityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 203);
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

function $put_0(this$static, key, value_0){
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

function $remove_6(this$static, key){
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
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(177, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_9(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 177);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(102, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_6(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_5(){
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
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 102);
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

function $put_1(this$static, key, value_0){
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

function $remove_7(this$static, key){
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

defineClass(178, 1, {}, InternalStringMap);
_.iterator = function iterator_10(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 178);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(103, 1, {}, InternalStringMap$1);
_.next_1 = function next_7(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_6(){
  return !this.current.done;
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 103);
function $getValue(this$static){
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

defineClass(179, 256, $intern_23, InternalStringMap$2);
_.getKey = function getKey_0(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_0(){
  return $getValue(this);
}
;
_.setValue = function setValue_0(object){
  return $put_1(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 179);
function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next_0 = next;
  next.prev = prev.next_0 = node;
  ++this$static.size_0;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next_0 = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next_0 = null;
  this.size_0 = 0;
}

defineClass(159, 250, $intern_24, LinkedList);
_.add_0 = function add_11(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator_0 = function listIterator_2(index_0){
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
_.size_1 = function size_10(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 159);
function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(197, 1, {}, LinkedList$ListIteratorImpl);
_.add_2 = function add_12(o){
  $addNode(this.this$01, o, this.currentNode.prev, this.currentNode);
  ++this.currentIndex;
  this.lastNode = null;
}
;
_.hasNext_0 = function hasNext_7(){
  return this.currentNode != this.this$01.tail;
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.currentNode.prev != this.this$01.header;
}
;
_.next_1 = function next_8(){
  checkCriticalElement(this.currentNode != this.this$01.tail);
  this.lastNode = this.currentNode;
  this.currentNode = this.currentNode.next_0;
  ++this.currentIndex;
  return this.lastNode.value_0;
}
;
_.previous = function previous_2(){
  checkCriticalElement(this.currentNode.prev != this.this$01.header);
  this.lastNode = this.currentNode = this.currentNode.prev;
  --this.currentIndex;
  return this.lastNode.value_0;
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 197);
function LinkedList$Node(){
}

defineClass(82, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 82);
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(33, 8, {3:1, 4:1, 33:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 33);
function equals_18(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_20(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function Vector(){
  this.arrayList = new ArrayList;
}

function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new ArrayIndexOutOfBoundsException);
  }
}

defineClass(98, 246, $intern_24, Vector);
_.add_1 = function add_13(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_5(this.arrayList, index_0, o);
}
;
_.add_0 = function add_14(o){
  return $add_6(this.arrayList, o);
}
;
_.contains = function contains_7(elem){
  return $indexOf_1(this.arrayList, elem, 0) != -1;
}
;
_.get_1 = function get_8(index_0){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $get_1(this.arrayList, index_0);
}
;
_.isEmpty = function isEmpty_2(){
  return this.arrayList.array.length == 0;
}
;
_.iterator = function iterator_11(){
  return new ArrayList$1(this.arrayList);
}
;
_.size_1 = function size_11(){
  return this.arrayList.array.length;
}
;
_.toString_0 = function toString_28(){
  return $toString_2(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 98);
function Stack(){
  Vector.call(this);
}

defineClass(160, 98, $intern_24, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 160);
function $add_8(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_1(this$static.builder, this$static.delimiter);
  $append_0(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(89, 1, {}, StringJoiner);
_.toString_0 = function toString_29(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 89);
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

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalType(expression){
  if (!expression) {
    throw toJs(new ClassCastException);
  }
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
//# sourceURL=login-0.js

