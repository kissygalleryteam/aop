/*
combined files : 

gallery/aop/1.1/mini

*/
/**
 * @fileoverview 
 * @author 虎牙<huya.nzb@alibaba-inc.com>
 * @module aop
 **/
KISSY.add('gallery/aop/1.1/mini',function (S, Node, Lang) {
    var $ = Node.all,
        EventTarget = S.Event.Target;
    /**
     *
     * @class Aop
     * @constructor
     */
    function Aop(config) {

    }

    S.augment(Aop, EventTarget, /** @lends Aop.prototype*/{

    });

    return Aop;

}, {requires:['node', 'lang']});



