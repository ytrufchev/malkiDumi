//var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android 
    banner: 'ca-app-pub-8256871331195390/8077618694',
      interstitial: 'ca-app-pub-8256871331195390/6189821955',
      rewardvideo: 'ca-app-pub-8256871331195390/2890529754',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-3940256099942544/4480807092',
    interstitial: 'ca-app-pub-3940256099942544/4411468910',
    rewardvideo: 'ca-app-pub-3940256099942544/1712485313',
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-6869992474017983/8878394753',
    interstitial: 'ca-app-pub-6869992474017983/1355127956',
    rewardvideo: '',
  };
}
function prepare() {
    videoReady = false;
    AdMob.prepareRewardVideoAd({
        adId: admobid.rewardvideo,
        autoShow: false
    });
}
function initAd() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: true
  }); 
  AdMob.prepareRewardVideoAd({
        adId: admobid.rewardvideo,
        autoShow: false 
    });
document.addEventListener('onAdLoaded', function(data){
    if(data.adType == 'rewardvideo'){
         document.getElementById("bonus").style.visibility  = "visible";
    }
    else if(data.adType == 'banner'){
    }
    else if (data.adType == 'interstitial'){
    }
});
document.addEventListener('onAdFailLoad', function(data){
    if(data.adType == 'rewardvideo') {
         videoReady = false;
         prepare(); // prepare again for next ad
    }
});
document.addEventListener('onAdDismiss', function(data){
    if(data.adType == 'rewardvideo') prepare(); // prepare again for next ad
});
document.addEventListener('onAdPresent', function(data){
    if(data.adType == 'rewardvideo') 
    bonus();
    document.getElementById("bonus").style.visibility  = "hidden";
});
}
if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initAd, false);
} else {
    initAd();
}