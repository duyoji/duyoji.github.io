// ゲーム表示オブジェクト群 --------------------------------------------
var Ship = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile( 'res/ship.png' );
    },

    init: function () {
        this._super();

        return true;
    },

    onEnter: function () {
        this._super();
    },

    onExit: function () {
        this._super();
    },

    move : function (x, y) {
        var k = 0.7; // 1に近いほど宇宙船の動きがゆっくりになる
        var posX  = this.getPositionX();
        var posY  = this.getPositionY();

        posX = (posX * k) + ( x * (1.0 - k) );
        posY = (posY * k) + ( y * (1.0 - k) );
        this.setPosition( posX, posY );
    },
});

var Meteo = cc.Sprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile( 'res/meteo.png' );
        this.v = cc.p( -5, ( Math.random() - 0.5 ) * 3 ); // 隕石の速度   
        this.setColor( cc.c3b( 
                       Math.floor( Math.random()*255 ), 
                       Math.floor( Math.random()*255 ), 
                       Math.floor( Math.random()*255 ) ) );
    },

    init: function () {
        this._super();

        return true;
    },

    onEnter: function () {
        this._super();
    },

    onExit: function () {
        this._super();
    },

    move : function (x, y) {
        var size = cc.Director.getInstance().getWinSize();
        var posX = this.getPositionX();
        var posY = this.getPositionY();
        posX += this.v.x;
        posY += this.v.y;

        // 画面から出ないように
        if (posX < 0) posX = size.width;
        if (posY < 0) posY = size.height;
        if (posY > size.height) posY = 0;
        this.setPosition( posX, posY );
    },
});

var Star = cc.LayerColor.extend({
    ctor: function () {
        this._super();
    },

    init: function(color, width, height) {
        this._super(color, width, height);
        this._changeAlphaValue = Math.floor( Math.random() * 10 ) + 5;

        

        this.setTouchEnabled(false);
        return true;
    },

    onEnter: function () {
        this._super();
    },

    onExit: function () {
        this._super();
    },

    update : function () {
        var currentOpacity = this.getOpacity();
        currentOpacity += this._changeAlphaValue;
        
        if (currentOpacity > 255) {
            currentOpacity = 255;
            this._changeAlphaValue = -Math.abs( this._changeAlphaValue );
        } else if (currentOpacity < 0) {
            currentOpacity = 0;
            this._changeAlphaValue = Math.abs( this._changeAlphaValue );
        }



        this.setOpacity(currentOpacity);
    },
});


// ゲームオブジェクト群を表示するレイヤー　-----------------------------------------------------------------------------
var MySample = cc.LayerGradient.extend({

    init:function (start, end, v) {
        this._super(start, end, v);
        var size = cc.Director.getInstance().getWinSize();

        // スコアの表示
        g.score  = 0; // ResultScene.jsの最初の方の行でグローバルで定義
        this.scoreLabel = cc.LabelTTF.create("", "Arial", 17);
        this.scoreLabel.setPosition( 20, size.height - 20 );
        this.scoreLabel.setAnchorPoint(0, 1);
        this.addChild( this.scoreLabel );


        // 宇宙船
        this.ship = new Ship();
        this.ship.setPosition( size.width / 2, size.height / 2 );
        this.addChild(this.ship, 5);
        

        // 隕石
        this.meteos = this.createMeteos();

        // 星
        this.stars = this.createStars();
        
        this.scheduleUpdate();

        this.setTouchEnabled(true);
        return true;
    },

    /**
     * 隕石群の配列生成
     * @return {[type]} [description]
     */
    createMeteos : function () {
        var i, meteo;
        var meteos = [];
        var size   = cc.Director.getInstance().getWinSize();


        for (i = 0; i < 15; i++) {
            meteo   = new Meteo();
            meteo.setPosition( Math.random() * size.width,  Math.random() * size.height ) ;
            this.addChild(meteo, 10);
            meteos.push(meteo);
        }

        return meteos;
    },

    /**
     * 星群の配列生成
     * @return {[type]} [description]
     */
    createStars : function () {
        var i, star;
        var stars = [];
        var size   = cc.Director.getInstance().getWinSize();

        for (i = 0; i < 50; i++) {
            star = new Star();
            star.init( cc.c4b(255, 255, 255, 255), 1, 1);
            star.setPosition( Math.random() * size.width,  Math.random() * size.height ) ;
            this.addChild(star, 15);
            stars.push(star);
        }

        return stars;
    },

    update : function (event) {
        var size = cc.Director.getInstance().getWinSize();

        var i, n;
        var star, meteo, pos;
        var posX, posY;

        // 星の輝き
        for (i = 0, n = this.stars.length; i < n; i++) {
            star = this.stars[i];
            star.update();
        }

        // 隕石の移動
        for (i = 0, n = this.meteos.length; i < n; i++) {
            meteo = this.meteos[i];
            meteo.move();
        }

        // 宇宙船の移動
        if (this.touched) {
            this.ship.move(this.touched.x, this.touched.y);
        }

        for (i = 0, n = this.meteos.length; i < n; i++) {
            meteo = this.meteos[i];
            var isHit = this.hitTest(this.ship, meteo);
            if (!this.gameover && isHit) {
                this.gameover = true;
                this.onGameover();
            }
        }
        
        // スコアを増やす (ResultScene.jsの最初の方の行でグローバルで定義)
        g.score++;
        this.scoreLabel.setString("SCORE " + g.score);
    },

    hitTest : function (sprite1, sprite2) {
        var isHit = false;
        var distance = cc.pDistance( sprite1.getPosition(), sprite2.getPosition() );

        // 当たり判定の距離は調整
        if (distance < 25) {
            isHit = true;
        }

        return isHit;
    },

    onGameover : function () {
        var transition = cc.TransitionFade.create( 1.0, new ResultScene() );
        cc.Director.getInstance().replaceScene( transition );
    },

    onTouchesBegan:function (touches, event) {
        this.touched = touches[0].getLocation();
    },
    onTouchesMoved:function (touches, event) {
        this.touched = touches[0].getLocation();
    },
    onTouchesEnded:function (touches, event) {
        this.touched = null;
    },
    onTouchesCancelled:function (touches, event) {
        this.touched = null;
    }
});

var MySampleScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        // var size          = cc.Director.getInstance().getWinSize();
        // var gradientPoint = new cc.Point(size.width / 2, size.height / 2);
        var gradientPoint = null;

        var layer = new MySample();
        layer.init( cc.c4b(0, 0, 0, 255), cc.c4b(182, 13, 231, 255), gradientPoint );
        this.addChild(layer);
    }
});
