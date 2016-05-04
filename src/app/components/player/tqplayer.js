/* eslint-disable */

import _ from 'lodash';

var spork_torque_version = '0.0.1';

var OOYALA_INJECTIONS = {
  "css": {
    "barker": ".oo-barker-wrapper{z-index:30;position:absolute;top:15px;left:90px;max-width:600px;color:#fff}.oo-barker-wrapper .oo-description{font-family:Roboto,Helvetica,sans-serif;font-weight:400;font-size:20px;-webkit-font-smoothing:antialiased;line-height:1.2}.oo-barker-wrapper .oo-button-wrap{margin-top:40px}.oo-barker-wrapper .oo-social-channel{display:inline-block;vertical-align:bottom}.oo-barker-wrapper .oo-social-channel img{width:30px;height:30px}.oo-slider{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;width:40px;height:40px;cursor:pointer}.oo-slider.oo-slider-left{position:absolute;top:45%;left:15px;z-index:30;background-position:0 -40px}.oo-slider.oo-slider-left:hover{background-position:0 0}.oo-slider.oo-slider-right{position:absolute;top:45%;right:15px;z-index:30;background-position:-40px -40px}.oo-slider.oo-slider-right:hover{background-position:-40px 0}@media (min-width:320px){.oo-barker-wrapper{top:25px;left:55px}.oo-barker-wrapper .oo-title{font-family:Oswald,Helvetica,Arial,sans-serif;margin:0;font-size:14px;font-weight:300}}@media (min-width:480px){.oo-barker-wrapper .oo-title{font-size:20px}}@media (min-width:768px){.oo-barker-wrapper{top:50px;left:90px}.oo-barker-wrapper .oo-title{font-size:28px;font-weight:400}}@media (min-width:992px){.oo-barker-wrapper{top:50px;left:90px}.oo-barker-wrapper .oo-title{font-size:36px}}",
    "countdown": ".oo-timer{position:absolute;bottom:120px;right:30px;z-index:20}.oo-timer .oo-block{display:inline-block;width:75px}.oo-timer .oo-digit{color:#fff;font:50px/1.4 Roboto,Helvetica,sans-serif;font-weight:100;margin-bottom:0;text-align:center;width:72px;display:inline-block}.oo-timer .oo-label{color:#fff;font:18px/1.4 Roboto,Helvetica,sans-serif;font-weight:100;line-height:1;width:72px;display:inline-block;text-align:center}.oo-timer .oo-disabled .oo-digit,.oo-timer .oo-disabled .oo-label{color:rgba(152,150,150,.6)}.oo-timer .oo-liveat{padding-left:15px;margin-top:10px}.oo-timer .oo-liveat .oo-date{color:#fff;display:inline-block;font:22px/1.4 Roboto,Helvetica,sans-serif;font-weight:400;margin:0}.oo-timer .oo-liveat .btn{display:inline-block;vertical-align:top;margin-left:15px}@media (min-width:320px){.oo-timer{bottom:40px;right:30px}.oo-timer .oo-block{width:65px}.oo-timer .oo-digit{font-family:Roboto,Helvetica,sans-serif;font-weight:100;font-size:22px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-timer .oo-label{font-family:Roboto,Helvetica,sans-serif;font-weight:400;font-size:12px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-timer .oo-liveat .oo-date{font-family:Roboto,Helvetica,sans-serif;font-weight:400;font-size:18px;line-height:1.4;-webkit-font-smoothing:antialiased}}@media (min-width:480px){.oo-timer{bottom:60px;right:80px}.oo-timer .oo-block{width:70px}.oo-timer .oo-digit{font-family:Roboto,Helvetica,sans-serif;font-weight:100;font-size:40px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-timer .oo-label{font-family:Roboto,Helvetica,sans-serif;font-weight:400;font-size:17px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-timer .oo-liveat .oo-date{font-family:Roboto,Helvetica,sans-serif;font-weight:400;font-size:18px;line-height:1.4;-webkit-font-smoothing:antialiased}}@media (min-width:720px){.oo-timer{bottom:90px;right:37px}}",
    "cover": ".oo-coverPlayer{position:absolute;top:0;left:0;z-index:20;overflow:hidden;width:100%;height:100%}.oo-coverPlayer img{width:100%;height:100%}",
    "errors": ".oo-tv-errors{width:100%;height:100%;background-color:#6C737C;color:#343435;position:absolute;top:0;left:0;z-index:30}.oo-tv-errors .text{text-align:center;font-family:Oswald,Helvetica,Arial,sans-serif;font-size:26px;margin-bottom:0}.oo-tv-errors .lnk{color:#343435;text-decoration:underline}.oo-tv-errors .wrap{display:table;width:100%;height:100%}.oo-tv-errors .wrap .content{display:table-cell;vertical-align:middle}@media (min-width:320px){.oo-tv-errors .text{font-size:13px}}@media (min-width:480px){.oo-tv-errors .text{font-size:20px}}@media (min-width:768px){.oo-tv-errors .text{font-size:26px}}",
    "events": ".oo-events_content_wrapper{position:relative;z-index:20;width:100%;height:100%}.oo-events_content_wrapper .oo-title_wrapper{padding-top:25px;margin-left:35px}.oo-events_content_wrapper .oo-title_wrapper .oo-title{color:#fff;margin-bottom:0;font-weight:300}.oo-events_content_wrapper .oo-title_wrapper .oo-description{font:18px/1.4 Roboto,Helvetica,sans-serif;font-weight:300;color:#fff;max-width:600px}.oo-events_content_wrapper .oo-title_wrapper .oo-description p{margin-top:10px}.oo-events_content_wrapper .oo-next_events{margin-top:40px;margin-left:85px}.oo-events_content_wrapper .oo-next_events h3{margin:0 0 20px;font-weight:300;color:#fdb304}.oo-events_content_wrapper .oo-next_events .oo-bullets{color:#fff;margin:0 0 5px -10px;transition-property:margin-left;transition-duration:.4s;cursor:pointer;max-width:600px}.oo-events_content_wrapper .oo-next_events .oo-bullets:hover{margin-left:10px}.oo-events_content_wrapper .oo-next_events .oo-bullets:hover .oo-bullet{background-color:#ffcb05;color:#000}.oo-events_content_wrapper .oo-next_events .oo-bullets:hover .oo-detail{color:rgba(255,203,5,.8)}.oo-events_content_wrapper .oo-next_events .oo-bullets .oo-bullet{display:inline-block;background-color:#343435;width:55px;height:55px;border-radius:50px;text-align:center;text-transform:uppercase}.oo-events_content_wrapper .oo-next_events .oo-bullets .oo-bullet .oo-bullet-wrap{padding-top:9px}.oo-events_content_wrapper .oo-next_events .oo-bullets .oo-bullet .oo-bullet-time{display:block;margin:0;padding:0;line-height:1!important}.oo-events_content_wrapper .oo-next_events .oo-bullets .oo-bullet .oo-date{font:12px/1.4 Roboto,Helvetica,sans-serif;font-weight:300}.oo-events_content_wrapper .oo-next_events .oo-bullets .oo-bullet .oo-day{font:400 21px/1.4 Oswald,Helvetica,sans-serif}.oo-events_content_wrapper .oo-next_events .oo-bullets .oo-detail{display:inline-block;height:32px;vertical-align:text-bottom;line-height:1;margin-left:20px;font:18px/1.4 Oswald,Helvetica,sans-serif;font-weight:300;color:rgba(152,150,150,.6);max-width:600px;overflow:hidden}.oo-events_content_wrapper .oo-social-channel{display:inline-block;vertical-align:bottom}.oo-events_content_wrapper .oo-social-channel img{width:30px;height:30px;margin:10px 10px 0 0}.oo-signup-banner{height:83px;background-color:rgba(92,91,91,.6);position:absolute;left:0;right:0;bottom:0;z-index:30}.oo-signup-banner .btn{font-family:Roboto,Helvetica,sans-serif;font-weight:700;font-size:14px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-signup-banner .oo-text{font:24px/1.4 Roboto,Helvetica,sans-serif;font-weight:300;color:#fff}@media (min-width:320px){.oo-signup-banner{height:50px}.oo-signup-banner .row{margin:0}.oo-signup-banner .oo-text{font-family:Roboto,Helvetica,sans-serif;font-weight:300;font-size:12px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-signup-banner .oo-text-wrap{text-align:center;margin-top:4px}.oo-signup-banner .oo-signupbtn{margin-top:10px;text-align:center}.oo-signup-banner .oo-signupbtn .signup{font-size:10px;min-width:0;margin-left:-20px}}@media (min-width:480px){.oo-signup-banner{height:60px}.oo-signup-banner .oo-text{font-family:Roboto,Helvetica,sans-serif;font-weight:300;font-size:18px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-signup-banner .oo-text-wrap{text-align:center;margin-top:3px}.oo-signup-banner .oo-signupbtn{margin-top:12px;text-align:center}.oo-signup-banner .oo-signupbtn .signup{font-size:13px;min-width:0}}@media (min-width:768px){.oo-signup-banner{height:80px}.oo-signup-banner .oo-text{font-family:Roboto,Helvetica,sans-serif;font-weight:300;font-size:20px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-signup-banner .oo-text-wrap{text-align:center;margin-top:12px}.oo-signup-banner .oo-signupbtn{margin-top:25px}.oo-signup-banner .oo-signupbtn .signup{font-size:14px}}@media (min-width:992px){.oo-signup-banner .oo-text{font-family:Roboto,Helvetica,sans-serif;font-weight:300;font-size:24px;line-height:1.4;-webkit-font-smoothing:antialiased}.oo-signup-banner .oo-text-wrap{text-align:center;margin-top:24px}.oo-signup-banner .oo-signupbtn .signup{font-size:14px;min-width:170px}}",
    "mobile": ".oo-slider-mobil{position:absolute;top:50%;height:70px;width:30px;background-color:#000;z-index:20;margin-top:-35px;opacity:.6;font-size:24px;padding-left:2px;padding-top:21px;color:#fff}.oo-slider-mobil.oo-slider-mobil-left{left:0}.oo-slider-mobil.oo-slider-mobil-right{right:0}.oo-play{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAQAAABJXchjAAAEHElEQVR4Ac2aXWhbZQCGn5wmaNscfwbrss26OsrS1KF1NoKTtoi4Vlgr2G7syhtbvZHdKNgrvWl1eOPqBuJAHBjY6pzgxXArCgplsHY/UeZc1zjJWpNS52/SdFrp61APderWc3JOcnye+/DCV8r3ve8J4BiZ3MFq7mYT91KPCfzMV3zGab4gyzQ5HBIQDljJDuI00MQME0wxy0/MU4FJmBXUEiVCkvOMc5BvvQ9RRTNP0cZvXGSEj5khR4FFljCowiTCI2xhPUE+5S1OUsAOWt6gejWqvBLqUY2wYY16lFBeo+pTUCwnWs4OJXVJQ4qpQjiwQjENKa2kOtyFqNNBFTSkqCjSqIZU0LDqig3RpYzG1CZc2qoxZdTlPESFBjWnQZnCA82/fq3CSYiwDmhWPcJDezSrAwrbDWFqRJOKC4+Na1IjMu2EMHVMKTWKEtiolI7JXC5ESIeUUkyUyKhSOqTQjUIENKDLahYltFmXNajA9UNsVV7dosQ+oby2Xi/EncpoUJTBAWW07r9CBDSsMVWLMlitMQ0r8O8Q7ZpTiyiTLZpT+z9DhJTUblFGdyup0LUhepVRvSij9cqo1wphndEeUWZft/4GEUJtyismymxMObUthTis/TJEmTW0X4etEBGl1SUcuVkvKipc2qm0IgKhnUqpRjjwQU1Lyuo53S5cWKOUdgqEEjoiHLlXFqe0XbjwiBLCwCTKUZxxExabeId32UixHCWKiWJaUJNw5D5dy3faVeTBNGlBMYM1zFzVHSt4geNsJ4RTZsiyxqCR8+RxTwPDfMBmnJFngkaDOFMU8IbHGOEV1mGfAlPEDZrIsohXVNPPRzxNEHsskuU+g/Xk8JZ63mSEtdgjx10GlVzBex5mF/a4QpUB/mMwTyXe8wn92ONmCgYXuQVvSfEMW/gGe9zK10GSrMJgEW8osIc3SGMXg1WcMRinliq84UMepd9BBKiilnGDczQQxj0T7OBxjuOMMFHOBckQueoMbviBfbzK9zgnwmoyBtMkacEZAZb4lfdopb+oCNBCkmmDHBN04IxfsDjNk2zjLMXSzgQ5d9e7511e71YuXe8iSqtTOPIhveTJRfeSIn5f+d/W+39//OT8evz4/wwcV7X/D+I+v6uB15RUyO+SpKCO/2ldhNYpowEfijPfKsTOG5Wpg2UpU19WYPlaucHPWtkq2CcVK9H/yEk7Bbs1NVxQcwkO4oKdqcHSLNnoYvo/PwWLG+JOqNWDIe5EMUOcZZ2G/5gkN4gi3WBNku7H2bR/46xlUH0aVU4JddueqbuVUM7mTO1gsH+AZ4mzYHOwDzHOXsYoeP/pwmq20UyMJjJcYIpZfmQeqOQ2aqhlA2s5w5ec5BBZbBMQjvnzI46N3M891BMG8qT4nFOcLe4jjt8BJ+eOolh61qsAAAAASUVORK5CYII=);position:absolute;top:50%;left:50%;margin-top:-33px;margin-left:-33px;z-index:20;width:66px;height:66px}",
    "volume": ".oo-volume-button{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;width:52px;height:52px;position:absolute;top:55px;right:15px;z-index:30;cursor:pointer}.oo-volume-button:hover{opacity:1!important}.oo-volume-on{background-position:0 0}.oo-volume-off{background-position:0 -52px}"
  },
  "html": {
    "barker": "<div class='oo-barker-wrapper'>   <h1 class='oo-title'>{{title}}</h1>   <div class='oo-description'>{{description}}</div>    <div class='oo-button-wrap'>     <a href='{{channel_url}}' class='btn btn140'>Go to {{channel_name}}</a>     <div id='oo-social-channel' class='oo-social-channel'></div>   </div> </div> ",
    "countdown": "<div id='oo-timer' class='oo-timer'>   <div class='oo-counter'>     <div class='oo-block oo-day'>       <p id='oo-timer_days' class='oo-digit'>{{days}}</p>       <p class='oo-label'>days</p>     </div>     <div class='oo-block oo-hours'>       <p id='oo-timer_hours' class='oo-digit'>{{hours}}</p>       <p class='oo-label'>hours</p>     </div>     <div class='oo-block oo-mins'>       <p id='oo-timer_mins' class='oo-digit'>{{mins}}</p>       <p class='oo-label'>mins</p>     </div>     <div class='oo-block oo-secs'>       <p id='oo-timer_secs' class='oo-digit'>{{secs}}</p>       <p class='oo-label'>secs</p>     </div>   </div>   <div class='oo-liveat'>     <p id='oo-liveat' class='oo-date'>Live: {{live_at}}</p>     <button id='oo-remind_me' class='btn btn100'>Remind Me</button>   </div> </div> ",
    "errors": "<div class='oo-tv-errors'>   <div class='wrap'>     <div class='content'>       <p class='text'>We're sorry, our video library is not allowed in your country.</p>       <p class='text'>For more information on international availability, <a class='lnk' href='/#/'>click here</a></p>     </div>   </div> </div> ",
    "event_item": "<dl class='oo-bullets' data-item='{{idx}}'>   <dt class='oo-bullet'>     <div class='oo-bullet-wrap'>       <span class='oo-bullet-time oo-date'>{{live_at_date}}</span>       <span class='oo-day'>{{live_at_day}}</span>     </div>   </dt>   <dd class='oo-detail'>{{title}}</dd> </dl> ",
    "events": "<div class='oo-next_events'>   <h3 class='oo-title'>Live Events</h3>   {{events}} </div> ",
    "header": "<div class='oo-title_wrapper'>   <h1 class='oo-title'>{{title}}</h1>   <div class='oo-description'>{{description}}</div>   <div class='oo-button-wrap'>     <div id='oo-social-channel' class='oo-social-channel'></div>   </div> </div> ",
    "mobil": "<div class='oo-slider-mobil oo-slider-mobil-left glyphicon glyphicon-chevron-left'></div> <div class='oo-play'></div> <div class='oo-slider-mobil oo-slider-mobil-right glyphicon glyphicon-chevron-right'></div> ",
    "signup": "<div class='oo-signup-banner'>   <div class='oo-detail row'>     <div class='col-xs-8 col-sm-9 oo-text-wrap'>       <span class='oo-text'>View all live and exclusive, premium content on any device.</span>     </div>     <div class='col-xs-4 col-sm-3 oo-signupbtn'>       <button class='btn signup'>Sign up for Free</button>     </div>   </div> </div>  ",
    "sliders": "<div class='oo-slider oo-slider-left'></div> <div class='oo-slider oo-slider-right'></div> ",
    "volume": "<div class='oo-volume-button oo-volume-on'></div> ",
    "wrapper": "<div class='oo-events_content_wrapper'>{{content}}</div> "
  }
};
OO.plugin("TQPlayerCoutdownModule", function(OO, _, $, W) {
  var PlayerCtrls;
  PlayerCtrls = {};
  PlayerCtrls.TQPlayerCountdownModule = function(mb, id) {
    this.mb = mb;
    this.id = id;
    this.player = void 0;
    this.ctrlsVisible = true;
    this.event = void 0;
    this.torqueAPI = void 0;
    return this.init();
  };
  PlayerCtrls.TQPlayerCountdownModule.prototype = {
    init: function() {
      var e, injector;
      console.info('countdown module init');
      this.mb.subscribe(OO.EVENTS.PLAYER_CREATED, "torqueUI", _.bind(this.onPlayerCreate, this));
      this.mb.subscribe('ttv-show-countdown', "torqueUI", _.bind(this.showTimer, this));
      this.mb.subscribe('ttv-new-countdown', "torqueUI", _.bind(this.newCountdown, this));
      /*
      try {
        injector = angular.element('body > div').injector();
        this.torqueAPI = injector.get('TorqueAPI');
      } catch (_error) {
        e = _error;
        console.error('cannot instantiate TorqueAPI');
        console.log(e);
      }
      */
    },
    onPlayerCreate: function(event, elementId, params) {
      console.info('Events Module', event);
      this.elementId = elementId;
      this.elRoot = $('#' + elementId);
      this.elWrapper = this.elRoot.parent('.player-container');
      this.timer_tpl = $(OOYALA_INJECTIONS.html.countdown);
      this.player = window.ooyalaPlayers[this.elementId];
    },
    showTimer: function(msg, event) {
      var e;
      try {
        this.event = event.event;
        this.liveAt = new Date(event.event.live_at);
        this._updateTimer(this.timer_tpl, this._calcCountDown());
        this.elWrapper.append(this.timer_tpl);
        this.setupIntervalTimer();
        this._setupHandlers();
      } catch (_error) {
        e = _error;
        console.log(e);
      }
    },
    newCountdown: function(ev, timer) {
      var e;
      try {
        this.event = timer.event;
        this.clearIntervalTimer();
        this.liveAt = new Date(timer.event.live_at);
        this._updateTimer(this.elWrapper, this._calcCountDown());
        this.setupIntervalTimer();
      } catch (_error) {
        e = _error;
        console.log(e);
      }
    },
    remindMe: function() {
      var ply;
      ply = angular.element('#' + this.elementId).injector();
      ply.get('$rootScope').$broadcast('remindme', this.event);
    },
    _updateTimer: function(ele, timer) {
      ele.find('#oo-liveat').html('Live: ' + (parseInt(this.liveAt.getMonth()) + 1) + '/' + this.liveAt.getDate() + '/' + this.liveAt.getFullYear());
      ele.find('#oo-timer_days').html(timer.days);
      ele.find('.oo-block').removeClass('oo-disabled');
      if (timer.days === '00') {
        ele.find('.oo-day').addClass('oo-disabled');
      }
      ele.find('#oo-timer_hours').html(timer.hours);
      if ((timer.days === '00') && (timer.hours === '00')) {
        ele.find('.oo-hours').addClass('oo-disabled');
      }
      ele.find('#oo-timer_mins').html(timer.minutes);
      if ((timer.days === '00') && (timer.hours === '00') && (timer.minutes === '00')) {
        ele.find('.oo-mins').addClass('oo-disabled');
      }
      ele.find('#oo-timer_secs').html(timer.seconds);
    },
    _calcCountDown: function() {
      var now;
      now = (new Date()).getTime();
      this.remains = this.liveAt.getTime() - now;
      if (this.remains < 0) {
        return {
          seconds: '00',
          minutes: '00',
          hours: '00',
          days: '00'
        };
      } else {
        return {
          seconds: this._padLeft(Math.floor((this.remains / 1000) % 60), 2, '0'),
          minutes: this._padLeft(Math.floor((this.remains / 60000) % 60), 2, '0'),
          hours: this._padLeft(Math.floor((this.remains / 3600000) % 24), 2, '0'),
          days: this._padLeft(Math.floor((this.remains / 3600000) / 24), 2, '0')
        };
      }
    },
    clearIntervalTimer: function() {
      if (this.countdownTimer) {
        clearInterval(this.countdownTimer);
      }
    },
    setupIntervalTimer: function() {
      if (this.remains > 0) {
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer);
        }
        this.countdownTimer = setInterval(_.bind(this.intervalTimer, this), 1000);
      }
    },
    intervalTimer: function() {
      this._updateTimer(this.elWrapper, this._calcCountDown());
    },
    _padLeft: function(value, len, pad) {
      if (typeof value !== 'string') {
        value = value === null ? '' : value + '';
      }
      return Array(len + 1 - value.length).join(pad) + value;
    },
    _setupHandlers: function() {
      this.elWrapper.on('mousemove', _.bind(this._mouseMoveHandler, this));
      this.elWrapper.on('mouseleave', _.bind(this._mouseLeaveHandler, this));
      this.elWrapper.find('#oo-remind_me').on('click', _.bind(this.remindMe, this));
    },
    _mouseMoveHandler: function() {
      if (!this.ctrlsVisible) {
        this._showCtrls();
      }
      if (this.hideControlsTimer) {
        clearTimeout(this.hideControlsTimer);
      }
      this.hideControlsTimer = setTimeout(_.bind(this._hideCtrls, this), 5000);
    },
    _hideCtrls: function() {
      if (this.ctrlsVisible) {
        $('#player-wrapper .oo-timer').animate({
          opacity: 0
        });
        this.ctrlsVisible = false;
      }
    },
    _showCtrls: function() {
      if (!this.ctrlsVisible) {
        $('#player-wrapper .oo-timer').animate({
          opacity: 1
        });
        this.ctrlsVisible = true;
      }
    },
    _mouseLeaveHandler: function() {
      switch (this.player.oyala.getState()) {
        case 'playing':
        case 'buffering':
        case 'error':
        case 'destroyed':
          this._hideCtrls();
          break;
        default:
          this._showCtrls();
      }
      if (this.hideControlsTimer) {
        clearTimeout(this.hideControlsTimer);
      }
    }
  };
  return PlayerCtrls.TQPlayerCountdownModule;
});

OO.plugin("TQPlayerCoverModule", function(OO, _, $, W) {
  var PlayerCtrls;
  PlayerCtrls = {};
  PlayerCtrls.TQPlayerCoverModule = function(mb, id) {
    this.mb = mb;
    this.id = id;
    return this.init();
  };
  PlayerCtrls.TQPlayerCoverModule.prototype = {
    init: function() {
      this.mb.subscribe(OO.EVENTS.PLAYER_CREATED, "torqueUI", _.bind(this.onPlayerCreate, this));
      this.mb.subscribe(OO.EVENTS.PLAYING, "torqueUI", _.bind(this.hideCover, this));
      this.mb.subscribe('ttv-show-cover', "torqueUI", _.bind(this.activateCover, this));
      this.mb.subscribe('ttv-hide-cover', "torqueUi", _.bind(this.hideCover, this));
      this.coverExists = false;
    },
    onPlayerCreate: function(event, elementId, params) {
      this.elementId = elementId;
      this.elRoot = $('#' + elementId);
      this.elWrapper = this.elRoot.parent('.player-container');
      this.elWrapper.on('click', 'img', _.bind(this._coverClick, this));
    },
    showCover: function() {
      this.elWrapper.find('.oo-coverPlayer').show();
    },
    hideCover: function() {
      this.elWrapper.find('.oo-coverPlayer').hide();
      this.mb.publish('ttv-did-hide-cover');
    },
    activateCover: function(ev, payload) {
      this.elWrapper.find('.oo-coverPlayer').remove();
      this.elWrapper.prepend('<div class="oo-coverPlayer"><img class="oo-cover-img" src="' + payload.cover + '"></div>');
      this.coverExists = true;
    },
    _coverClick: function() {
      this.mb.publish(OO.EVENTS.PLAY);
    }
  };
  return PlayerCtrls.TQPlayerCoverModule;
});

OO.plugin("TQPlayerErrorsModule", function(OO, _, $, W) {
  var PlayerCtrls;
  PlayerCtrls = {};
  PlayerCtrls.TQPlayerErrorsModule = function(mb, id) {
    this.mb = mb;
    this.id = id;
    return this.init();
  };
  PlayerCtrls.TQPlayerErrorsModule.prototype = {
    init: function() {
      console.info('Error module init');
      this.mb.subscribe(OO.EVENTS.PLAYER_CREATED, "torqueUI", _.bind(this.onPlayerCreate, this));
      this.mb.subscribe(OO.EVENTS.ERROR, "torqueUI", _.bind(this.onError, this));
    },
    onPlayerCreate: function(event, elementId, params) {
      this.elementId = elementId;
      this.elRoot = $('#' + elementId);
      this.elWrapper = this.elRoot.parent('.player-container');
    },
    onError: function(error, data) {
      //if (error.code = 'unauthorizedLocation') {
        console.error("TQPlayerErrorModule", typeOf(error), data);
        this._showError();
      //}
    },
    _showError: function() {
      var error_html;
      error_html = $(OOYALA_INJECTIONS.html.errors);
      this.elWrapper.append(error_html);
    }
  };
  return PlayerCtrls.TQPlayerErrorsModule;
});

OO.plugin("TQPlayerNextEventsModule", function(OO, _, $, W) {
  var PlayerCtrls;
  PlayerCtrls = {};
  PlayerCtrls.TQPlayerNextEventsModule = function(mb, id) {
    this.mb = mb;
    this.id = id;
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    this.player = void 0;
    this.current_event = void 0;
    this.ctrlsVisible = true;
    return this.init();
  };
  PlayerCtrls.TQPlayerNextEventsModule.prototype = {
    init: function() {
      console.info('events module init');
      this.mb.subscribe(OO.EVENTS.PLAYER_CREATED, "torqueUI", _.bind(this.onPlayerCreate, this));
      this.mb.subscribe('ttv-show-next-events', "torqueUI", _.bind(this.onShowEvents, this));
    },
    eventsItems: function(events) {
      var html, item_html, me;
      html = [];
      item_html = OOYALA_INJECTIONS.html.event_item;
      me = this;
      $.each(events, function(idx, event) {
        var live, tmp;
        live = new Date(event.live_at);
        tmp = item_html.replace('{{live_at_date}}', me.months[live.getMonth()]).replace('{{live_at_day}}', live.getDate()).replace('{{title}}', event.title).replace('{{idx}}', idx);
        return html.push(tmp);
      });
      return html.join('');
    },
    onPlayerCreate: function(event, elementId, params) {
      this.elementId = elementId;
      this.elRoot = $('#' + elementId);
      this.elWrapper = this.elRoot.parent('.player-container');
      this.player = window.ooyalaPlayers[this.elementId];
    },
    onShowEvents: function() {
      var events, header, next_events, no_event, wrapper;
      next_events = this.player.nextEvents.next_events.slice(0, 4);
      this.current_event = this.player.channel || next_events[0];
      if (this.current_event === void 0) {
        no_event = this.player.nextEvents.no_events;
        this.mb.publish('ttv-show-cover', {
          cover: no_event.image
        });
        wrapper = OOYALA_INJECTIONS.html.wrapper;
        header = OOYALA_INJECTIONS.html.header.replace('{{title}}', no_event.title).replace('{{description}}', '');
        wrapper = wrapper.replace('{{content}}', header);
        this.elWrapper.append(wrapper);
      } else {
        if (this.elRoot.width() >= 481) {
          wrapper = OOYALA_INJECTIONS.html.wrapper;
          header = OOYALA_INJECTIONS.html.header.replace('{{title}}', this.current_event.title).replace('{{description}}', this.current_event.description);
          events = OOYALA_INJECTIONS.html.events.replace('{{events}}', this.eventsItems(next_events));
          wrapper = wrapper.replace('{{content}}', header + events);
          this.mb.publish('ttv-show-countdown', {
            event: this.current_event
          });
          this.elWrapper.append(wrapper);
        }
      }
      this._socialLive();
      this._setupHandlers();
    },
    _setupHandlers: function() {
      var wrap;
      wrap = this.elWrapper.find('.oo-next_events');
      wrap.on('click', _.bind(this._bulletClickHandler, this));
      this.elWrapper.on('mousemove', _.bind(this._mouseMoveHandler, this));
      this.elWrapper.on('mouseleave', _.bind(this._mouseLeaveHandler, this));
    },
    _bulletClickHandler: function(ev) {
      var $t, bullet, event, me;
      me = this;
      $t = $(ev.target);
      bullet = me._getBullet($t);
      if (bullet !== void 0) {
        me.player.pause();
        event = me.player.nextEvents.next_events[bullet];
        if (me.current_event.slug !== event.slug) {
          this.elWrapper.find('.oo-title_wrapper .oo-title').html(event.title);
          this.elWrapper.find('.oo-title_wrapper .oo-description').html(event.description);
          me.mb.publish('ttv-show-cover', {
            cover: event.image
          });
          me.mb.publish('ttv-new-countdown', {
            event: event
          });
          me.current_event = event;
          me._socialLive();
        }
        if (event.playlist.length > 0) {
          me.player.setPlaylist(event.playlist);
          me.player.setCurrent(event.playlist[0].id);
          me.player.play();
        }
      }
    },
    _getBullet: function(elem) {
      var parent;
      if (elem.hasClass('oo-bullets')) {
        parent = elem;
      } else {
        parent = elem.parents('.oo-bullets');
      }
      return parent.data('item');
    },
    _mouseMoveHandler: function() {
      if (!this.ctrlsVisible) {
        this._showCtrls();
      }
      if (this.hideControlsTimer) {
        clearTimeout(this.hideControlsTimer);
      }
      this.hideControlsTimer = setTimeout(_.bind(this._hideCtrls, this), 5000);
    },
    _hideCtrls: function() {
      if (this.ctrlsVisible) {
        $('#player-wrapper .oo-title_wrapper').animate({
          opacity: 0
        });
        $('#player-wrapper .oo-next_events').animate({
          opacity: 0
        });
        this.ctrlsVisible = false;
      }
    },
    _showCtrls: function() {
      if (!this.ctrlsVisible) {
        $('#player-wrapper .oo-title_wrapper').animate({
          opacity: 1
        });
        $('#player-wrapper .oo-next_events').animate({
          opacity: 1
        });
        this.ctrlsVisible = true;
      }
    },
    _mouseLeaveHandler: function() {
      switch (this.player.oyala.getState()) {
        case 'playing':
        case 'buffering':
        case 'error':
        case 'destroyed':
          this._hideCtrls();
          break;
        default:
          this._showCtrls();
      }
      if (this.hideControlsTimer) {
        clearTimeout(this.hideControlsTimer);
      }
    },
    _socialLive: function() {
      var inj, sf;
      inj = angular.element('body > div').injector();
      sf = inj.get('SocialFactory');
      sf.render({
        title: this.current_event.title,
        linkBack: window.location.protocol + '//' + window.location.host + '/#/live/' + this.current_event.slug + '/' + this.current_event.id,
        image: this.current_event.image,
        element: 'oo-social-channel'
      });
    }
  };
  return PlayerCtrls.TQPlayerNextEventsModule;
});

var TtvPlayer;

TtvPlayer = (function() {
  function TtvPlayer(el, playlist, start, options) {
    var params;
    this.oyala = null;
    this.playlist = [];
    this.current = {};
    this.nextEvents = [];
    this.curr_idx = 0;
    this.containerId = el;
    if (window.ooyalaPlayers == null) {
      window.ooyalaPlayers = {};
    }
    window.ooyalaPlayers[this.containerId] = this;
    this.def_wrapper = el || 'player-wrapper';
    this.elRoot = $('#' + this.containerId);
    this.elWrapper = this.elRoot.parent('.player-container');
    this.volume_status = 'off';
    this.current_volume = 0.8;
    this.isPlaying = false;
    this.options = {
      chromeless: false,
      live_mode: false,
      barker_mode: false,
      behavior: 'vod'
    };
    this.platform = {
      isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent),
      isIOS: /iphone|ipad|ipod/i.test(navigator.userAgent),
      isIPhone: /iphone/i.test(navigator.userAgent),
      isIPad: /ipad/i.test(navigator.userAgent),
      isAndroid: /android/i.test(navigator.userAgent),
      isOldIE: /MSIE 10|MSIE 9|MSIE 8/.test(navigator.userAgent),
      isIE8: /MSIE 8/.test(navigator.userAgent)
    };
    _.assign(this.options, options);
    if (typeof OO !== "undefined" && OO !== null) {
      params = {
        layout: 'default',
        wmode: 'transparent',
        onCreate: _.bind(this.onPlayerCreated, this),
        flashParams: {
          layout: 'default',
          wmode: 'transparent'
        }
      };
      /*
      if (this.options.chromeless) {
        params['layout'] = 'chromeless';
        params['flashParams'] = {
          layout: 'chromeless',
          wmode: 'transparent'
        };
      };
      */
      angular.extend(params, this.options.ooplayer);
      params.debug = true;
      this.oyala = OO.Player.create(this.def_wrapper, '', params);
      this.playlist = playlist;
      if ((start == null) && this.options.behavior === 'programmed') {
        console.log("Programmed mode");
        this.setCurrent(this.calcStart());
      } else {
        console.log("Traditional mode");
        if (this.playlist.length > 0) {
          this.setCurrent(start || this.playlist[0].embed_code);
        }
      }
      this.showCover();
    } else {
      console.log("No player present");
    }
    return;
  }

  TtvPlayer.prototype.setPlaylist = function(pl) {
    this.playlist = pl;
  };

  TtvPlayer.prototype.setCurrent = function(item) {
    this.current = this.findInPlaylist(item);
    this.curr_idx = this.findIndex(this.current.embed_code);
    this.current.plIndex = this.curr_idx;
    if (this.options.barker_mode) {
      this.updateCurrentData();
    }
    console.warn('send update-video-data');
    angular.element('body').trigger('update-video-data');
  };

  TtvPlayer.prototype.onPlayerCreated = function(player) {
    $.each(OOYALA_INJECTIONS.css, function(key, value) {
      return $('head').append('<style>' + value + '</style>');
    });
    this.waitUntilRendered();
    player.subscribe("played", 'torqueUI', _.bind(this.playNext, this));
    player.subscribe(OO.EVENTS.PAUSED, 'torqueUI', _.bind(this.onPaused, this));
    player.subscribe(OO.EVENTS.PLAYING, 'torqueUi', _.bind(this.onPlaying, this));
    player.subscribe(OO.EVENTS.PLAYBACK_READY, 'torqueUi', _.bind(this.setVolume, this));
    player.subscribe(OO.EVENTS.CHANGE_VOLUME, 'torqueUi', _.bind(this.onVolumeChange, this));
    player.subscribe(OO.EVENTS.FULLSCREEN_CHANGED, 'torqueUi', _.bind(this.onScreenChange, this));
    player.subscribe('ttv-user-login', 'torqueUi', _.bind(this.onUserLogin, this));
    player.subscribe('ttv-did-hide-cover', 'torqueUi', _.bind(this.onHideCover, this));
    //player.subscribe('*', 'torqueUi', function(oo, data) {console.warn(oo, data); });
    player.subscribe(OO.EVENTS.ERROR, 'torqueUi', function(error, data) { console.error('TvtPlayer::ErrorEvent', error, data)});
  };

  TtvPlayer.prototype.destroyPlayer = function() {
    this.oyala.destroy();
  };

  TtvPlayer.prototype.play = function(item) {
    var code;
    if (item) {
      this.setCurrent(item);
    }
    code = this.current.embed_code;
    if (code) {
      this.oyala.setEmbedCode(code);
      this.oyala.play();
    }
  };

  TtvPlayer.prototype.playNext = function() {
    var idx;
    idx = this.curr_idx + 1;
    if (idx > (this.playlist.length - 1)) {
      idx = 0;
    }
    this.pause();
    //this.setCurrent(this.playlist[idx].embed_code);
    //this.oyala.setEmbedCode(this.current.embed_code);
    this.play(this.playlist[idx].embed_code);
    if (this.options.barker_mode) {
      this.updateCurrentData();
    }
    this.showCover();
  };

  TtvPlayer.prototype.playPrevious = function() {
    var idx;
    idx = this.curr_idx - 1;
    if (idx < 0) {
      idx = this.playlist.length - 1;
    }
    this.pause();
    this.setCurrent(this.playlist[idx].embed_code);
    this.oyala.setEmbedCode(this.current.embed_code);
    if (this.options.barker_mode) {
      this.updateCurrentData();
    }
    this.showCover();
  };

  TtvPlayer.prototype.findInPlaylist = function(id) {
    return _.find(this.playlist, {
      embed_code: id
    });
  };

  TtvPlayer.prototype.findIndex = function(id) {
    return _.findIndex(this.playlist, {
      embed_code: id
    });
  };

  TtvPlayer.prototype.calcStart = function() {
    var playElement, sum, targetTime, totalTime, x;
    totalTime = _.reduce(this.playlist, function(result, item) {
      return result += item.duration;
    }, 0);
    targetTime = _.now() % totalTime;
    playElement = 0;
    sum = 0;
    x = 0;
    while (x < this.playlist.length) {
      sum += this.playlist[x].duration;
      if (targetTime < sum) {
        playElement = x;
        break;
      }
      x++;
    }
    return this.playlist[playElement].embed_code;
  };

  TtvPlayer.prototype.showCover = function() {
    var cover;
    cover = this.current.defaultImage;
    if (cover) {
      this.oyala.mb.publish('ttv-show-cover', {
        cover: cover
      });
    }
  };

  TtvPlayer.prototype.setNextEvents = function(events) {
    this.nextEvents = events;
    this.oyala.mb.publish('ttv-show-next-events');
  };

  TtvPlayer.prototype.waitUntilRendered = function() {
    var me, playerWidth;
    me = this;
    playerWidth = this.elRoot.width() - 32;
    if (playerWidth > 100) {
      this.buildUI();
    } else {
      setTimeout((function() {
        return me.waitUntilRendered();
      }), 100);
    }
  };

  TtvPlayer.prototype.buildUI = function() {
    var playerWidth, ref;
    playerWidth = this.elRoot.width() - 32;
    if (playerWidth > 480) {
      this.volume_btn = $(OOYALA_INJECTIONS.html.volume);
      if (!(this.options.live_mode && ((ref = this.nextEvents.next_events) != null ? ref.length : void 0) === 0)) {
        this.elWrapper.append(this.volume_btn);
      }
      this.elWrapper.append(OOYALA_INJECTIONS.html.signup);
      if (!this.options.live_mode) {
        this.elWrapper.append(OOYALA_INJECTIONS.html.sliders);
      }
      if (this._is_user_signedin()) {
        this.elWrapper.find('.oo-signup-banner').hide();
      } else {
        if (this.options.barker_mode || this.options.live_mode) {
          this.elWrapper.find('.oo-signup-banner .signup').on('click', _.bind(this._signupClick, this));
        } else {
          this.elWrapper.find('.oo-signup-banner').hide();
        }
      }
      this._setupHandlers();
    } else {
      if (!this.options.live_mode) {
        this.elWrapper.append(OOYALA_INJECTIONS.html.mobil);
        this.elWrapper.find('.oo-slider-mobil-left').on('click', _.bind(this.playPrevious, this));
        this.elWrapper.find('.oo-slider-mobil-right').on('click', _.bind(this.playNext, this));
        this.elWrapper.find('.oo-play').on('click', _.bind(this.togglePlay, this));
      }
    }
  };

  TtvPlayer.prototype._setupHandlers = function() {
    this.volume_btn.on('click', _.bind(this.toggleVolume, this));
    this.elWrapper.on('mousemove', _.bind(this._mouseMoveHandler, this));
    this.elWrapper.on('mouseleave', _.bind(this._mouseLeaveHandler, this));
    this.elWrapper.on('mousedown', _.bind(this.togglePlay, this));
    this.elWrapper.find('.oo-slider-left').on('click', _.bind(this.playPrevious, this));
    this.elWrapper.find('.oo-slider-right').on('click', _.bind(this.playNext, this));
  };

  TtvPlayer.prototype.volumeUIon = function() {
    if (!this.volume_btn) {
      return;
    }
    this.volume_btn.removeClass('oo-volume-off').addClass('oo-volume-on');
    this.volume_status = 'on';
  };

  TtvPlayer.prototype.volumeUIoff = function() {
    if (!this.volume_btn) {
      return;
    }
    this.volume_btn.removeClass('oo-volume-on').addClass('oo-volume-off');
    this.volume_status = 'off';
  };

  TtvPlayer.prototype.toggleVolume = function(ev) {
    if (ev.stopPropagation) {
      ev.stopPropagation();
    }
    if (this.volume_status === 'on') {
      this.current_volume = this.oyala.getVolume();
      this.oyala.setVolume(0);
    } else {
      this.oyala.setVolume(this.current_volume);
    }
  };

  TtvPlayer.prototype.setVolume = function() {
    if (this.volume_status === 'on') {
      this.oyala.setVolume(this.current_volume || 0.8);
    } else {
      this.oyala.setVolume(0);
    }
  };

  TtvPlayer.prototype.onVolumeChange = function(evt, volumeLevel) {
    if (volumeLevel < 0.1) {
      this.volumeUIoff();
    } else {
      if (this.volume_status !== 'on') {
        this.volumeUIon();
      }
    }
  };

  TtvPlayer.prototype.togglePlay = function(ev) {
    if (ev.target.nodeName !== 'OBJECT' && ev.target.nodeName !== 'VIDEO' && ev.target.className !== 'oo-play') {
      return;
    }
    if ((ev.offsetY > (this.elRoot.height() - 30)) || (ev.offsetX > (this.elRoot.width() - 50))) {
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    if (this.isPlaying) {
      this.pause();
    } else {
      this["continue"]();
    }
  };

  TtvPlayer.prototype.pause = function() {
    this.oyala.mb.publish(OO.EVENTS.PAUSE);
  };

  TtvPlayer.prototype.onPaused = function() {
    var playerWidth;
    this.isPlaying = false;
    playerWidth = this.elRoot.width() - 32;
    if ((playerWidth <= 480) || this.platform.isMobile) {
      $('.player-container .oo-slider-mobil').animate({
        opacity: 1
      });
      $('.player-container .oo-play').animate({
        opacity: 1
      });
      if (this.platform.isMobile) {
        this.showCover();
      }
    }
  };

  TtvPlayer.prototype["continue"] = function() {
    this.oyala.mb.publish(OO.EVENTS.PLAY);
  };

  TtvPlayer.prototype.onPlaying = function() {
    var playerWidth;
    this.isPlaying = true;
    playerWidth = this.elRoot.width() - 32;
    if (playerWidth <= 480) {
      $('.player-container .oo-slider-mobil').animate({
        opacity: 0
      });
      $('.player-container .oo-play').animate({
        opacity: 0
      });
    }
  };

  TtvPlayer.prototype._mouseMoveHandler = function() {
    if (!this.ctrlsVisible) {
      this._showCtrls();
    }
    if (this.hideControlsTimer) {
      clearTimeout(this.hideControlsTimer);
    }
    this.hideControlsTimer = setTimeout(_.bind(this._hideCtrls, this), 5000);
  };

  TtvPlayer.prototype._mouseLeaveHandler = function() {
    if (this.hideControlsTimer) {
      clearTimeout(this.hideControlsTimer);
    }
    this._hideCtrls();
  };

  TtvPlayer.prototype._hideCtrls = function() {
    if (this.ctrlsVisible) {
      $('.player-container .oo-volume-button').animate({
        opacity: 0
      });
      $('.player-container .oo-signup-banner').animate({
        opacity: 0
      });
      $('.player-container .oo-barker-wrapper').animate({
        opacity: 0
      });
      $('.player-container .oo-slider').animate({
        opacity: 0
      });
      this.ctrlsVisible = false;
    }
  };

  TtvPlayer.prototype._showCtrls = function() {
    if (!this.ctrlsVisible) {
      $('.player-container .oo-volume-button').animate({
        opacity: 1
      });
      $('.player-container .oo-signup-banner').animate({
        opacity: 1
      });
      $('.player-container .oo-barker-wrapper').animate({
        opacity: 1
      });
      $('.player-container .oo-slider').animate({
        opacity: 1
      });
      this.ctrlsVisible = true;
    }
  };

  TtvPlayer.prototype._is_user_signedin = function() {
    /*
    var e, inj, ss, value;
    value = false;
    try {
      inj = angular.element('body > div').injector();
      ss = inj.get('SessionService');
      value = ss.is_user_signed_in();
    } catch (_error) {
      e = _error;
      console.error('cant validate user status');
    }
    return value;
    */
    return true;
  };

  TtvPlayer.prototype.socialBarker = function() {
    var inj, sf;
    inj = angular.element('body > div').injector();
    sf = inj.get('SocialFactory');
    sf.render({
      title: this.current.title,
      linkBack: window.location.protocol + '//' + window.location.host + '/#/channel/' + this.channel.slug + '/' + this.current.id,
      image: this.current.image,
      element: 'oo-social-channel'
    });
  };

  TtvPlayer.prototype.setupBarker = function() {
    var playerWidth, tpl, wrapper;
    playerWidth = this.elRoot.width() - 32;
    if (playerWidth > 480) {
      wrapper = OOYALA_INJECTIONS.html.barker;
      tpl = wrapper.replace('{{title}}', this.current.title).replace('{{description}}', this.current.description).replace('{{channel_name}}', this.channel.title).replace('{{channel_url}}', window.location.protocol + '//' + window.location.host + '/#/channel/' + this.channel.slug);
      this.elWrapper.append(tpl);
      this.socialBarker();
    }
    this.options.barker_mode = true;
  };

  TtvPlayer.prototype.updateCurrentData = function() {
    this.elWrapper.find('.oo-barker-wrapper .oo-title').html(this.current.title);
    this.elWrapper.find('.oo-barker-wrapper .oo-description').html(this.current.description);
    this.elWrapper.find('.oo-social-channel').empty();
    this.socialBarker();
  };

  TtvPlayer.prototype._signupClick = function() {
    $('#signin-btn').trigger('click');
  };

  TtvPlayer.prototype.notifyLogin = function() {
    this.oyala.mb.publish('ttv-user-login');
  };

  TtvPlayer.prototype.onUserLogin = function() {
    this.elWrapper.find('.oo-signup-banner').hide();
  };

  TtvPlayer.prototype.onHideCover = function() {
    if (this.options.live_mode) {
      this.elWrapper.find('.oo-signup-banner').hide();
    }
  };

  TtvPlayer.prototype.onScreenChange = function(evt, isFullScreen) {
    if (this.platform.isIOS && !isFullScreen) {
      this.pause();
    }
  };

  return TtvPlayer;

})();

module.exports = TtvPlayer;
