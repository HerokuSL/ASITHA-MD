const _0x1f6951=_0x4f81;(function(_0x504922,_0x1cdee3){const _0x547258=_0x4f81,_0x5c0225=_0x504922();while(!![]){try{const _0x380aa5=-parseInt(_0x547258(0x20d))/0x1+-parseInt(_0x547258(0x214))/0x2+-parseInt(_0x547258(0x20a))/0x3*(parseInt(_0x547258(0x1fc))/0x4)+-parseInt(_0x547258(0x1f1))/0x5*(-parseInt(_0x547258(0x1fb))/0x6)+parseInt(_0x547258(0x205))/0x7+-parseInt(_0x547258(0x1f5))/0x8+-parseInt(_0x547258(0x212))/0x9*(-parseInt(_0x547258(0x219))/0xa);if(_0x380aa5===_0x1cdee3)break;else _0x5c0225['push'](_0x5c0225['shift']());}catch(_0x1427ad){_0x5c0225['push'](_0x5c0225['shift']());}}}(_0x4917,0x6705c));const axios=require('axios'),{cmd}=require('../command'),config=require(_0x1f6951(0x21f));function _0x4f81(_0x940f4f,_0xd0f9a5){const _0x49178e=_0x4917();return _0x4f81=function(_0x4f8147,_0x3a3f1c){_0x4f8147=_0x4f8147-0x1f1;let _0x3fd7b6=_0x49178e[_0x4f8147];return _0x3fd7b6;},_0x4f81(_0x940f4f,_0xd0f9a5);}function _0x4917(){const _0x2302f6=['Country','movie','imdbVotes','\x0a\x0a🎬\x20*Director:*\x20','\x0a\x0a🎭\x20*Genre:*\x20','data','log','5258617HwVcaV','Year','\x0a\x0a🎭\x20*Actors:*\x20','imdbRating','Poster','1394331mbChrx','Fetch\x20detailed\x20information\x20about\x20a\x20movie.','Genre','450017fkFqAE','Awards','Director','join','\x0a>\x20POWERED\x20by\x20ASITHA-MD','126oWOLOA','\x0a\x0a📆\x20*Released:*\x20','289950OgfxdJ','\x0a\x0a🌍\x20*Language:*\x20','Rated','🚫\x20Movie\x20not\x20found.','Writer','318520hlPnPd','\x0a\x0a🇺🇸\x20*Country:*\x20','Title','\x0a\x0a🏆\x20*Awards:*\x20','other','\x0a\x0a🗳️\x20*IMDB\x20Votes:*\x20','../config','\x0a\x0a⭐\x20*IMDB\x20Rating:*\x20','232235TPyEef','Runtime','N/A','Language','324312nIGvZa','Plot','\x0a\x0a📅\x20*Year:*\x20','message','\x0a\x0a🌟\x20*Rated:*\x20','get','42ezlfpS','4KbwvPL','Actors'];_0x4917=function(){return _0x2302f6;};return _0x4917();}cmd({'pattern':_0x1f6951(0x1ff),'desc':_0x1f6951(0x20b),'category':_0x1f6951(0x21d),'react':'🎬','filename':__filename},async(_0x3e0d9e,_0x363aca,_0x40e35d,{from:_0x2577a5,quoted:_0x5a7614,body:_0x4816a9,isCmd:_0x5393f8,command:_0x365cfb,args:_0x4f04d2,q:_0x3e42e4,isGroup:_0x22da04,sender:_0x4ad894,senderNumber:_0x22323d,botNumber2:_0xad907,botNumber:_0x2ea27a,pushname:_0x40f4b6,isMe:_0x1f1cf4,isOwner:_0x522c9b,groupMetadata:_0x268fe1,groupName:_0x384c0d,participants:_0x2bea4c,groupAdmins:_0x419009,isBotAdmins:_0x26ba06,isAdmins:_0x2f4aa7,reply:_0x111cb0})=>{const _0x40c51e=_0x1f6951;try{const _0x58a8f3=_0x4f04d2[_0x40c51e(0x210)]('\x20');if(!_0x58a8f3)return _0x111cb0('📽️\x20Please\x20provide\x20the\x20name\x20of\x20the\x20movie.');const _0x13732b='http://www.omdbapi.com/?t='+encodeURIComponent(_0x58a8f3)+'&apikey=76cb7f39',_0x3d789f=await axios[_0x40c51e(0x1fa)](_0x13732b),_0x204f39=_0x3d789f[_0x40c51e(0x203)];if(_0x204f39['Response']==='False')return _0x111cb0(_0x40c51e(0x217));const _0x20f2bc='\x0a🎬\x20*Movie\x20Information*\x20🎬\x0a\x0a🎥\x20*Title:*\x20'+_0x204f39[_0x40c51e(0x21b)]+_0x40c51e(0x1f7)+_0x204f39[_0x40c51e(0x206)]+_0x40c51e(0x1f9)+_0x204f39[_0x40c51e(0x216)]+_0x40c51e(0x213)+_0x204f39['Released']+'\x0a\x0a⏳\x20*Runtime:*\x20'+_0x204f39[_0x40c51e(0x1f2)]+_0x40c51e(0x202)+_0x204f39[_0x40c51e(0x20c)]+_0x40c51e(0x201)+_0x204f39[_0x40c51e(0x20f)]+'\x0a\x0a✍️\x20*Writer:*\x20'+_0x204f39[_0x40c51e(0x218)]+_0x40c51e(0x207)+_0x204f39[_0x40c51e(0x1fd)]+'\x0a\x0a📝\x20*Plot:*\x20'+_0x204f39[_0x40c51e(0x1f6)]+_0x40c51e(0x215)+_0x204f39[_0x40c51e(0x1f4)]+_0x40c51e(0x21a)+_0x204f39[_0x40c51e(0x1fe)]+_0x40c51e(0x21c)+_0x204f39[_0x40c51e(0x20e)]+_0x40c51e(0x220)+_0x204f39[_0x40c51e(0x208)]+_0x40c51e(0x21e)+_0x204f39[_0x40c51e(0x200)]+'\x0a',_0x33fc53=_0x204f39[_0x40c51e(0x209)]&&_0x204f39[_0x40c51e(0x209)]!==_0x40c51e(0x1f3)?_0x204f39[_0x40c51e(0x209)]:config['ALIVE_IMG'];await _0x3e0d9e['sendMessage'](_0x2577a5,{'image':{'url':_0x33fc53},'caption':_0x20f2bc+_0x40c51e(0x211)},{'quoted':_0x363aca});}catch(_0x28461f){console[_0x40c51e(0x204)](_0x28461f),_0x111cb0('❌\x20Error:\x20'+_0x28461f[_0x40c51e(0x1f8)]);}});
