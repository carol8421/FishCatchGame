//Auto Generate File, Do NOT Modify!!!!!!!!!!!!!!!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FinishTaskSendMessage = (function (_super) {
    __extends(FinishTaskSendMessage, _super);
    function FinishTaskSendMessage() {
        var _this = _super.call(this) || this;
        _this._data = null;
        _this._clazz = null;
        var builder = dcodeIO.ProtoBuf.loadProto(game.net.ProtoFileEnum.user);
        _this._clazz = builder.build("FinishTaskSend");
        return _this;
    }
    FinishTaskSendMessage.prototype.setTaskId = function (taskId) {
        this._data.set("taskId", taskId);
    };
    FinishTaskSendMessage.prototype.getTaskId = function () {
        return this._data.get("taskId");
    };
    FinishTaskSendMessage.prototype.getPID = function () {
        return 2033;
    };
    FinishTaskSendMessage.prototype.initData = function () {
        this._data = new this._clazz();
    };
    FinishTaskSendMessage.prototype.setData = function (buff) {
        this._data = this._clazz.decode(buff);
    };
    FinishTaskSendMessage.prototype.toByteArray = function () {
        var arraybuffer = this._data.toArrayBuffer();
        return new egret.ByteArray(arraybuffer);
    };
    return FinishTaskSendMessage;
}(MessageBase));
__reflect(FinishTaskSendMessage.prototype, "FinishTaskSendMessage");
//# sourceMappingURL=FinishTaskSendMessage.js.map