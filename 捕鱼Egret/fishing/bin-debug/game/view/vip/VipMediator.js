var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VipMediator = (function (_super) {
    __extends(VipMediator, _super);
    function VipMediator(view) {
        return _super.call(this, view) || this;
    }
    VipMediator.prototype.onAdded = function () {
        _super.prototype.onAdded.call(this);
        this.getView().initView();
    };
    VipMediator.prototype.init = function () {
    };
    VipMediator.prototype.destroy = function () {
        this.getView().destroy();
    };
    return VipMediator;
}(burn.mediator.SimpleMediator));
__reflect(VipMediator.prototype, "VipMediator");
//# sourceMappingURL=VipMediator.js.map