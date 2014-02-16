var g = {
    score : 0,
    high_score_key : 'MySample/highScore',
};


var Result = cc.Layer.extend({

    init:function () {
        this._super();
        var size = cc.Director.getInstance().getWinSize();

        // 今回のスコア
        var resultLabel = cc.LabelTTF.create("今回のスコア " + g.score, "Arial", 20);
        resultLabel.setPosition( size.width / 2, size.height / 2 );
        this.addChild(resultLabel);

        // ハイスコア
        var highScore = parseInt( sys.localStorage.getItem(g.high_score_key) || 0 );
        if (g.score > highScore) {
            highScore = g.score;
            sys.localStorage.setItem(g.high_score_key, highScore);
        }

        var highLabel = cc.LabelTTF.create("ハイスコア " + highScore, "Arial", 20);
        highLabel.setPosition( size.width / 2, size.height / 2 - 50 );
        this.addChild(highLabel);

        // 2秒たったら画面タップでゲーム再開
        this.scheduleOnce(function () {
            this.onTouchesBegan = function (touches, event) {
                g.score = 0;
                cc.Director.getInstance().replaceScene( new MySampleScene() );
            };
        }, 2.0);
        
        this.setTouchEnabled(true);
        return true;
    },


    onTouchesBegan:function (touches, event) {},
    onTouchesMoved:function (touches, event) {},
    onTouchesEnded:function (touches, event) {},
    onTouchesCancelled:function (touches, event) {}
});

var ResultScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Result();
        layer.init();
        this.addChild(layer);
    }
});