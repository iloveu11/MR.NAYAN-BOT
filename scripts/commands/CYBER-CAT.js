iconst timerestart = 120   //in minutes

const chalk = require('chalk');

const DateAndTime = new Date().toLocaleString('en-US', {

         timeZone: 'Asia/Dhaka'
 }); 
//console.log(DateAndTime);
console.log(chalk.bold.hex("#000000").bold(DateAndTime));

//////////////////////////////////////////////////////
//========= Require all variable need use =========//
////////////////////////////////////////////////////

const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
const { join, resolve } = require("path");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("fca-cyber"), moment = require("moment-timezone");
const axios = require("axios");
const _0x165682=_0x4936;(function(_0x2772f0,_0x3a84f8){const _0x53a3be=_0x4936,_0x5b6b10=_0x2772f0();while(!![]){try{const _0x197c3e=-parseInt(_0x53a3be(0x171))/0x1*(parseInt(_0x53a3be(0x140))/0x2)+-parseInt(_0x53a3be(0x1ac))/0x3*(-parseInt(_0x53a3be(0x177))/0x4)+-parseInt(_0x53a3be(0x1a4))/0x5+parseInt(_0x53a3be(0x194))/0x6+-parseInt(_0x53a3be(0x1ef))/0x7*(parseInt(_0x53a3be(0x1d7))/0x8)+-parseInt(_0x53a3be(0x1bb))/0x9+parseInt(_0x53a3be(0x1dc))/0xa;if(_0x197c3e===_0x3a84f8)break;else _0x5b6b10['push'](_0x5b6b10['shift']());}catch(_0xb1bc3d){_0x5b6b10['push'](_0x5b6b10['shift']());}}}(_0x3b78,0xbbe8c));function _0x3b78(){const _0x32d574=['dateAdded','dependencies','ADMINBOT','type','homeDir','schedule','languages','handleEvent','catch','fullYear','threadBanned','appstate.json','getThreadList','env','mirai','===\x20','[\x20GLOBAL\x20BAN\x20]','floor','nameExist','5665128pnJcBi','HH:mm:ss\x20DD/MM/YYYY','eventDisabled','getTime','cwd','finishLoadModule','/home/runner/.miraigban','.js','HH:mm:ss','finishCheckListGban','Found\x20file\x20config:\x20config.json','resolve','readline','sendMessage','replace','nodemodule','3020875smDnFd','length','successLoadModule','module','client','envConfig','userBanned','checkBan','218976zDOsGp','year','/modules/events','loadedPackage','warningSourceCode','appState','totp-generator','minutes','/languages/','read_receipt','getAppState','node-cron','hours','INBOX','win32','13186377qqAqzD','https://raw.githubusercontent.com/abdullarahaman/abdulla1/main/listban.json','./includes/database','attrib\x20+H','threadID','example','models','exit','date','some','close','.temp','mainPath','config.json','unhandledRejection','builtinModules','checkListGban','data','Sequelize','cantOnload','format','notFoundLanguage','push','run','/.miraigban','node_modules','DeveloperMode','utils','9801496UnjBgE','loader','commands','handleListenError','config','26557520eBqvnu','input','forEach','eventRegistered','ms\x20===','/modules/commands','configPath','seconds','authenticate','fullHour','./includes/listen','I\x20AH\x20GYA','events','month','\x20-\x20Not\x20found\x20key\x20language:\x20','banDevice','typ','warn','getCurrentUserID','7ouFSVb','output','timeStart','.lang','listenMqtt','Asia/Karachi','version','2yYqMzy','config.json\x20not\x20found!','errorFormat','npm\x20---package-lock\x20false\x20--save\x20install','DD/MM/YYYY','cantInstallPackage','failLoadModule','api','notFoundPathAppstate','handleListen','https://raw.githubusercontent.com/abdullarahaman/cat/main/data.json','successConnectDatabase','getText','nodemodules','cache','stdin','notFoundPackage','configModule','keyNotSameFormat','get','./utils','split','onLoad','slice','✩≻──Hello\x20Public─────\x0a\x0a╭───────────♥︎╮\x0a╰┈➤LISTEN\x20EVERYONE\x20I\x20AM\x20BOT\x20😁\x20\x0aNOW\x20I\x20AM\x20ONLINE\x20🥺\x20\x0a\x0aHOW\x20CAN\x20I\x20HELP\x20YOU\x20IN\x20FUN?\x0a\x0a𝐂𝐑𝐄𝐀𝐓𝐄𝐑\x20:-\x20CHAND\x20TRICKER\x20YOUTUBER\x0a╰♥︎───────────╯','parse','presence','inherit','filter','10.2.14','/modules/events/','has','indexOf','moduleData','ERROR','YYYY','attrib\x20+H\x20+S\x20','language','ERR:\x20','dog-facts','[\x20DATABASE\x20]','then','error','fullTime','random','hasOwnProperty','object','allThreadID','loadedConfig','46693JQqBoF','name','log','undefined','stringify','size','28rpCTBu','stdout','endsWith','APPSTATEPATH','./includes/database/model','createInterface','reason','set','setOptions','includes'];_0x3b78=function(){return _0x32d574;};return _0x3b78();}const listPackage=JSON['parse'](readFileSync('./package.json'))[_0x165682(0x182)],listbuiltinModules=require(_0x165682(0x1a7))[_0x165682(0x1ca)];global['client']=new Object({'commands':new Map(),'events':new Map(),'cooldowns':new Map(),'eventRegistered':new Array(),'handleSchedule':new Array(),'handleReaction':new Array(),'handleReply':new Array(),'mainPath':process[_0x165682(0x198)](),'configPath':new String(),'getTime':function(_0x1fd9b4){const _0x2f3f90=_0x165682;switch(_0x1fd9b4){case _0x2f3f90(0x1e3):return''+moment['tz'](_0x2f3f90(0x1f4))[_0x2f3f90(0x1cf)]('ss');case _0x2f3f90(0x1b3):return''+moment['tz'](_0x2f3f90(0x1f4))[_0x2f3f90(0x1cf)]('mm');case _0x2f3f90(0x1b8):return''+moment['tz'](_0x2f3f90(0x1f4))[_0x2f3f90(0x1cf)]('HH');case _0x2f3f90(0x1c3):return''+moment['tz'](_0x2f3f90(0x1f4))['format']('DD');case _0x2f3f90(0x1e9):return''+moment['tz'](_0x2f3f90(0x1f4))[_0x2f3f90(0x1cf)]('MM');case _0x2f3f90(0x1ad):return''+moment['tz'](_0x2f3f90(0x1f4))[_0x2f3f90(0x1cf)](_0x2f3f90(0x163));case _0x2f3f90(0x1e5):return''+moment['tz'](_0x2f3f90(0x1f4))[_0x2f3f90(0x1cf)](_0x2f3f90(0x19c));case _0x2f3f90(0x18a):return''+moment['tz'](_0x2f3f90(0x1f4))[_0x2f3f90(0x1cf)](_0x2f3f90(0x144));case _0x2f3f90(0x16b):return''+moment['tz'](_0x2f3f90(0x1f4))[_0x2f3f90(0x1cf)](_0x2f3f90(0x195));}}}),global['data']=new Object({'threadInfo':new Map(),'threadData':new Map(),'userName':new Map(),'userBanned':new Map(),'threadBanned':new Map(),'commandBanned':new Map(),'threadAllowNSFW':new Array(),'allUserID':new Array(),'allCurrenciesID':new Array(),'allThreadID':new Array()}),global[_0x165682(0x1d6)]=require(_0x165682(0x154)),global[_0x165682(0x1a3)]=new Object(),global['config']=new Object(),global[_0x165682(0x151)]=new Object(),global[_0x165682(0x161)]=new Array(),global['language']=new Object();var configValue;try{global[_0x165682(0x1a8)][_0x165682(0x1e2)]=join(global[_0x165682(0x1a8)]['mainPath'],_0x165682(0x1c8)),configValue=require(global['client'][_0x165682(0x1e2)]),logger['loader'](_0x165682(0x19e));}catch{if(existsSync(global[_0x165682(0x1a8)]['configPath']['replace'](/\.json/g,'')+_0x165682(0x1c6)))configValue=readFileSync(global['client'][_0x165682(0x1e2)]['replace'](/\.json/g,'')+_0x165682(0x1c6)),configValue=JSON[_0x165682(0x159)](configValue),logger[_0x165682(0x1d8)]('Found:\x20'+(global['client'][_0x165682(0x1e2)]['replace'](/\.json/g,'')+_0x165682(0x1c6)));else return logger[_0x165682(0x1d8)](_0x165682(0x141),'error');}try{for(const key in configValue)global[_0x165682(0x1db)][key]=configValue[key];logger[_0x165682(0x1d8)]('Config\x20Loaded!');}catch{return logger['loader']('Can\x27t\x20load\x20file\x20config!','error');}const {Sequelize,sequelize}=require(_0x165682(0x1bd));writeFileSync(global[_0x165682(0x1a8)][_0x165682(0x1e2)]+_0x165682(0x1c6),JSON['stringify'](global[_0x165682(0x1db)],null,0x4),'utf8');const langFile=readFileSync(__dirname+_0x165682(0x1b4)+(global[_0x165682(0x1db)][_0x165682(0x165)]||'en')+_0x165682(0x1f2),{'encoding':'utf-8'})[_0x165682(0x155)](/\r?\n|\r/),langData=langFile[_0x165682(0x15c)](_0xa8f246=>_0xa8f246['indexOf']('#')!=0x0&&_0xa8f246!='');for(const item of langData){const getSeparator=item[_0x165682(0x160)]('='),itemKey=item[_0x165682(0x157)](0x0,getSeparator),itemValue=item[_0x165682(0x157)](getSeparator+0x1,item[_0x165682(0x1a5)]),head=itemKey[_0x165682(0x157)](0x0,itemKey[_0x165682(0x160)]('.')),key=itemKey['replace'](head+'.',''),value=itemValue[_0x165682(0x1a2)](/\\n/gi,'\x0a');if(typeof global[_0x165682(0x165)][head]==_0x165682(0x174))global['language'][head]=new Object();global[_0x165682(0x165)][head][key]=value;}global[_0x165682(0x14c)]=function(..._0x14f9ff){const _0xaae5d5=_0x165682,_0x2adbfb=global[_0xaae5d5(0x165)];if(!_0x2adbfb['hasOwnProperty'](_0x14f9ff[0x0]))throw __filename+_0xaae5d5(0x1ea)+_0x14f9ff[0x0];var _0x38e7e4=_0x2adbfb[_0x14f9ff[0x0]][_0x14f9ff[0x1]];for(var _0x4a2d6f=_0x14f9ff[_0xaae5d5(0x1a5)]-0x1;_0x4a2d6f>0x0;_0x4a2d6f--){const _0x2c7a25=RegExp('%'+_0x4a2d6f,'g');_0x38e7e4=_0x38e7e4[_0xaae5d5(0x1a2)](_0x2c7a25,_0x14f9ff[_0x4a2d6f+0x1]);}return _0x38e7e4;};try{var appStateFile=resolve(join(global[_0x165682(0x1a8)][_0x165682(0x1c7)],global[_0x165682(0x1db)][_0x165682(0x17a)]||_0x165682(0x18c))),appState=require(appStateFile);logger[_0x165682(0x1d8)](global[_0x165682(0x14c)](_0x165682(0x18f),'foundPathAppstate'));}catch{return logger[_0x165682(0x1d8)](global[_0x165682(0x14c)]('mirai',_0x165682(0x148)),_0x165682(0x16a));}function checkBan(_0x1cec92){const _0x508702=_0x165682,[_0x49f589,_0x54918f]=global[_0x508702(0x1d6)][_0x508702(0x185)]();logger(global[_0x508702(0x14c)](_0x508702(0x18f),_0x508702(0x1cb)),_0x508702(0x191)),global[_0x508702(0x1ab)]=!![];if(existsSync(_0x508702(0x19a))){const _0x105d33=require(_0x508702(0x1a0)),_0x383693=require(_0x508702(0x1b2)),_0xcad9fa={};_0xcad9fa[_0x508702(0x1dd)]=process[_0x508702(0x14f)],_0xcad9fa[_0x508702(0x1f0)]=process[_0x508702(0x178)];var _0x581126=_0x105d33[_0x508702(0x17c)](_0xcad9fa);global['handleListen']['stopListening'](),logger(global[_0x508702(0x14c)]('mirai',_0x508702(0x1eb)),'[\x20GLOBAL\x20BAN\x20]'),_0x581126['on'](line,_0x5556ce=>{const _0x4c1440=_0x508702;_0x5556ce=String(_0x5556ce);if(isNaN(_0x5556ce)||_0x5556ce[_0x4c1440(0x1a5)]<0x6||_0x5556ce[_0x4c1440(0x1a5)]>0x6)console[_0x4c1440(0x173)](global['getText'](_0x4c1440(0x18f),_0x4c1440(0x152)));else return axios[_0x4c1440(0x153)](_0x4c1440(0x1bc))[_0x4c1440(0x169)](_0x3beafd=>{const _0x571081=_0x4c1440,_0xb9fba5=_0x383693(String(_0x3beafd[_0x571081(0x1cc)])[_0x571081(0x1a2)](/\s+/g,'')['toLowerCase']());if(_0xb9fba5!==_0x5556ce)return console[_0x571081(0x173)](global[_0x571081(0x14c)](_0x571081(0x18f),'codeInputExpired'));else{const _0x26de25={};return _0x26de25['recursive']=!![],rm(_0x571081(0x1d3),_0x26de25),_0x581126[_0x571081(0x1c5)](),logger(global[_0x571081(0x14c)]('mirai','unbanDeviceSuccess'),_0x571081(0x191));}});});return;};return axios[_0x508702(0x153)](_0x508702(0x1bc))['then'](_0x2dafad=>{const _0x548d82=_0x508702;for(const _0x30e46a of global[_0x548d82(0x1cc)]['allUserID'])if(_0x2dafad[_0x548d82(0x1cc)][_0x548d82(0x16d)](_0x30e46a)&&!global['data'][_0x548d82(0x1aa)][_0x548d82(0x15f)](_0x30e46a))global[_0x548d82(0x1cc)][_0x548d82(0x1aa)][_0x548d82(0x17e)](_0x30e46a,{'reason':_0x2dafad[_0x548d82(0x1cc)][_0x30e46a]['reason'],'dateAdded':_0x2dafad['data'][_0x30e46a][_0x548d82(0x181)]});for(const _0x1a8745 of global['data'][_0x548d82(0x16f)])if(_0x2dafad[_0x548d82(0x1cc)][_0x548d82(0x16d)](_0x1a8745)&&!global[_0x548d82(0x1cc)]['userBanned']['has'](_0x1a8745))global[_0x548d82(0x1cc)][_0x548d82(0x18b)]['set'](_0x1a8745,{'reason':_0x2dafad['data'][_0x1a8745]['reason'],'dateAdded':_0x2dafad[_0x548d82(0x1cc)][_0x1a8745][_0x548d82(0x181)]});delete require[_0x548d82(0x14e)][require[_0x548d82(0x19f)](global['client']['configPath'])];const _0x2dcd74=require(global[_0x548d82(0x1a8)][_0x548d82(0x1e2)])[_0x548d82(0x183)]||[];for(const _0x19aea8 of _0x2dcd74){if(!isNaN(_0x19aea8)&&_0x2dafad['data'][_0x548d82(0x16d)](_0x19aea8)){logger(global['getText'](_0x548d82(0x18f),_0x548d82(0x1aa),_0x2dafad[_0x548d82(0x1cc)][_0x19aea8][_0x548d82(0x181)],_0x2dafad['data'][_0x19aea8][_0x548d82(0x17d)]),_0x548d82(0x191)),mkdirSync(_0x49f589+_0x548d82(0x1d3));if(_0x54918f==_0x548d82(0x1ba))execSync(_0x548d82(0x1be)+'+S'+_0x49f589+_0x548d82(0x1d3));return process[_0x548d82(0x1c2)](0x0);}}if(_0x2dafad[_0x548d82(0x1cc)][_0x548d82(0x16d)](_0x1cec92['getCurrentUserID']())){logger(global[_0x548d82(0x14c)](_0x548d82(0x18f),_0x548d82(0x1aa),_0x2dafad[_0x548d82(0x1cc)][_0x1cec92[_0x548d82(0x1ee)]()][_0x548d82(0x181)],_0x2dafad[_0x548d82(0x1cc)][_0x1cec92[_0x548d82(0x1ee)]()][_0x548d82(0x17d)]),_0x548d82(0x191)),mkdirSync(_0x49f589+'/.miraigban');if(_0x54918f==_0x548d82(0x1ba))execSync(_0x548d82(0x164)+_0x49f589+'/.miraigban');return process[_0x548d82(0x1c2)](0x0);}return axios['get'](_0x548d82(0x14a))['then'](_0x4458d8=>{const _0x1633b1=_0x548d82;logger(_0x4458d8[_0x1633b1(0x1cc)][Math[_0x1633b1(0x192)](Math['random']()*_0x4458d8[_0x1633b1(0x1cc)][_0x1633b1(0x1a5)])],'');}),logger(global[_0x548d82(0x14c)](_0x548d82(0x18f),_0x548d82(0x19d)),'[\x20GLOBAL\x20BAN\x20]');})[_0x508702(0x189)](_0x3d68ae=>{throw new Error(_0x3d68ae);});}function _0x4936(_0x4adc99,_0x5540bc){const _0x3b7859=_0x3b78();return _0x4936=function(_0x493670,_0x5e3258){_0x493670=_0x493670-0x13f;let _0x3d9ed1=_0x3b7859[_0x493670];return _0x3d9ed1;},_0x4936(_0x4adc99,_0x5540bc);}function onBot({models:_0x593342}){const _0x48d378=_0x165682,_0x56df57={};_0x56df57[_0x48d378(0x1b1)]=appState,login(_0x56df57,async(_0x54b654,_0x114fc2)=>{const _0x401a83=_0x48d378;if(_0x54b654)return logger(JSON['stringify'](_0x54b654),_0x401a83(0x162));_0x114fc2[_0x401a83(0x17f)](global[_0x401a83(0x1db)]['FCAOption']),writeFileSync(appStateFile,JSON[_0x401a83(0x175)](_0x114fc2[_0x401a83(0x1b6)](),null,'\x09')),global[_0x401a83(0x1db)][_0x401a83(0x13f)]=_0x401a83(0x15d),(global[_0x401a83(0x1a8)][_0x401a83(0x1f1)]=new Date()[_0x401a83(0x197)](),(function(){const _0x541375=_0x401a83,_0x41b998=readdirSync(global[_0x541375(0x1a8)][_0x541375(0x1c7)]+_0x541375(0x1e1))[_0x541375(0x15c)](_0x3a67fc=>_0x3a67fc['endsWith']('.js')&&!_0x3a67fc['includes'](_0x541375(0x1c0))&&!global[_0x541375(0x1db)]['commandDisabled'][_0x541375(0x180)](_0x3a67fc));for(const _0xb62d78 of _0x41b998){try{var _0x24227b=require(global[_0x541375(0x1a8)][_0x541375(0x1c7)]+'/modules/commands/'+_0xb62d78);if(!_0x24227b[_0x541375(0x1db)]||!_0x24227b[_0x541375(0x1d2)]||!_0x24227b[_0x541375(0x1db)]['commandCategory'])throw new Error(global['getText'](_0x541375(0x18f),_0x541375(0x142)));if(global[_0x541375(0x1a8)]['commands']['has'](_0x24227b[_0x541375(0x1db)][_0x541375(0x172)]||''))throw new Error(global[_0x541375(0x14c)]('mirai',_0x541375(0x193)));if(!_0x24227b[_0x541375(0x187)]||typeof _0x24227b[_0x541375(0x187)]!='object'||Object['keys'](_0x24227b['languages'])[_0x541375(0x1a5)]==0x0)logger[_0x541375(0x1d8)](global[_0x541375(0x14c)](_0x541375(0x18f),_0x541375(0x1d0),_0x24227b[_0x541375(0x1db)]['name']),_0x541375(0x1ed));if(_0x24227b[_0x541375(0x1db)][_0x541375(0x182)]&&typeof _0x24227b[_0x541375(0x1db)][_0x541375(0x182)]==_0x541375(0x16e)){for(const _0x107fcf in _0x24227b['config']['dependencies']){const _0xa6c78c=join(__dirname,_0x541375(0x14d),_0x541375(0x1d4),_0x107fcf);try{if(!global['nodemodule'][_0x541375(0x16d)](_0x107fcf)){if(listPackage['hasOwnProperty'](_0x107fcf)||listbuiltinModules[_0x541375(0x180)](_0x107fcf))global[_0x541375(0x1a3)][_0x107fcf]=require(_0x107fcf);else global['nodemodule'][_0x107fcf]=require(_0xa6c78c);}else'';}catch{var _0x2ebd33=![],_0x4d18f3;logger[_0x541375(0x1d8)](global[_0x541375(0x14c)](_0x541375(0x18f),_0x541375(0x150),_0x107fcf,_0x24227b['config'][_0x541375(0x172)]),'warn'),execSync(_0x541375(0x143)+'\x20'+_0x107fcf+(_0x24227b[_0x541375(0x1db)][_0x541375(0x182)][_0x107fcf]=='*'||_0x24227b[_0x541375(0x1db)]['dependencies'][_0x107fcf]==''?'':'@'+_0x24227b['config'][_0x541375(0x182)][_0x107fcf]),{'stdio':_0x541375(0x15b),'env':process[_0x541375(0x18e)],'shell':!![],'cwd':join(__dirname,'nodemodules')});for(let _0xcff4b6=0x1;_0xcff4b6<=0x3;_0xcff4b6++){try{require[_0x541375(0x14e)]={};if(listPackage[_0x541375(0x16d)](_0x107fcf)||listbuiltinModules[_0x541375(0x180)](_0x107fcf))global[_0x541375(0x1a3)][_0x107fcf]=require(_0x107fcf);else global[_0x541375(0x1a3)][_0x107fcf]=require(_0xa6c78c);_0x2ebd33=!![];break;}catch(_0x5b1e8e){_0x4d18f3=_0x5b1e8e;}if(_0x2ebd33||!_0x4d18f3)break;}if(!_0x2ebd33||_0x4d18f3)throw global[_0x541375(0x14c)]('mirai',_0x541375(0x145),_0x107fcf,_0x24227b[_0x541375(0x1db)][_0x541375(0x172)],_0x4d18f3);}}logger[_0x541375(0x1d8)](global[_0x541375(0x14c)](_0x541375(0x18f),_0x541375(0x1af),_0x24227b[_0x541375(0x1db)][_0x541375(0x172)]));}if(_0x24227b['config']['envConfig'])try{for(const _0x490523 in _0x24227b['config'][_0x541375(0x1a9)]){if(typeof global[_0x541375(0x151)][_0x24227b['config'][_0x541375(0x172)]]==_0x541375(0x174))global['configModule'][_0x24227b[_0x541375(0x1db)]['name']]={};if(typeof global[_0x541375(0x1db)][_0x24227b[_0x541375(0x1db)][_0x541375(0x172)]]=='undefined')global[_0x541375(0x1db)][_0x24227b[_0x541375(0x1db)][_0x541375(0x172)]]={};if(typeof global['config'][_0x24227b[_0x541375(0x1db)][_0x541375(0x172)]][_0x490523]!==_0x541375(0x174))global[_0x541375(0x151)][_0x24227b['config'][_0x541375(0x172)]][_0x490523]=global[_0x541375(0x1db)][_0x24227b['config']['name']][_0x490523];else global['configModule'][_0x24227b[_0x541375(0x1db)]['name']][_0x490523]=_0x24227b['config'][_0x541375(0x1a9)][_0x490523]||'';if(typeof global[_0x541375(0x1db)][_0x24227b[_0x541375(0x1db)]['name']][_0x490523]==_0x541375(0x174))global['config'][_0x24227b[_0x541375(0x1db)][_0x541375(0x172)]][_0x490523]=_0x24227b['config']['envConfig'][_0x490523]||'';}logger[_0x541375(0x1d8)](global[_0x541375(0x14c)](_0x541375(0x18f),_0x541375(0x170),_0x24227b['config'][_0x541375(0x172)]));}catch(_0x1657fc){throw new Error(global[_0x541375(0x14c)](_0x541375(0x18f),_0x541375(0x170),_0x24227b[_0x541375(0x1db)]['name'],JSON[_0x541375(0x175)](_0x1657fc)));}if(_0x24227b[_0x541375(0x156)]){try{const _0x3c6b5f={};_0x3c6b5f[_0x541375(0x147)]=_0x114fc2,_0x3c6b5f[_0x541375(0x1c1)]=_0x593342,_0x24227b[_0x541375(0x156)](_0x3c6b5f);}catch(_0x53b1d9){throw new Error(global[_0x541375(0x14c)](_0x541375(0x18f),_0x541375(0x1ce),_0x24227b[_0x541375(0x1db)][_0x541375(0x172)],JSON[_0x541375(0x175)](_0x53b1d9)),_0x541375(0x16a));};}if(_0x24227b[_0x541375(0x188)])global['client'][_0x541375(0x1df)][_0x541375(0x1d1)](_0x24227b[_0x541375(0x1db)][_0x541375(0x172)]);global[_0x541375(0x1a8)][_0x541375(0x1d9)][_0x541375(0x17e)](_0x24227b[_0x541375(0x1db)][_0x541375(0x172)],_0x24227b),logger['loader'](global[_0x541375(0x14c)](_0x541375(0x18f),'successLoadModule',_0x24227b[_0x541375(0x1db)]['name']));}catch(_0x29fe34){logger['loader'](global[_0x541375(0x14c)](_0x541375(0x18f),'failLoadModule',_0x24227b[_0x541375(0x1db)][_0x541375(0x172)],_0x29fe34),_0x541375(0x16a));};}}()),(function(){const _0x411f18=_0x401a83,_0x1ed69c=readdirSync(global[_0x411f18(0x1a8)][_0x411f18(0x1c7)]+_0x411f18(0x1ae))[_0x411f18(0x15c)](_0x147b63=>_0x147b63[_0x411f18(0x179)](_0x411f18(0x19b))&&!global[_0x411f18(0x1db)][_0x411f18(0x196)][_0x411f18(0x180)](_0x147b63));for(const _0x18fcd3 of _0x1ed69c){try{var _0x18186e=require(global['client']['mainPath']+_0x411f18(0x15e)+_0x18fcd3);if(!_0x18186e[_0x411f18(0x1db)]||!_0x18186e[_0x411f18(0x1d2)])throw new Error(global[_0x411f18(0x14c)](_0x411f18(0x18f),_0x411f18(0x142)));if(global['client'][_0x411f18(0x1e8)]['has'](_0x18186e[_0x411f18(0x1db)][_0x411f18(0x172)])||'')throw new Error(global[_0x411f18(0x14c)]('mirai',_0x411f18(0x193)));if(_0x18186e[_0x411f18(0x1db)][_0x411f18(0x182)]&&typeof _0x18186e['config']['dependencies']==_0x411f18(0x16e)){for(const _0x3fde98 in _0x18186e[_0x411f18(0x1db)]['dependencies']){const _0x491ac3=join(__dirname,_0x411f18(0x14d),'node_modules',_0x3fde98);try{if(!global[_0x411f18(0x1a3)]['hasOwnProperty'](_0x3fde98)){if(listPackage['hasOwnProperty'](_0x3fde98)||listbuiltinModules[_0x411f18(0x180)](_0x3fde98))global['nodemodule'][_0x3fde98]=require(_0x3fde98);else global['nodemodule'][_0x3fde98]=require(_0x491ac3);}else'';}catch{let _0x2f667c=![],_0x53f0cf;logger[_0x411f18(0x1d8)](global[_0x411f18(0x14c)]('mirai',_0x411f18(0x150),_0x3fde98,_0x18186e[_0x411f18(0x1db)][_0x411f18(0x172)]),_0x411f18(0x1ed)),execSync('npm\x20--package-lock\x20false\x20--save\x20install'+_0x3fde98+(_0x18186e[_0x411f18(0x1db)]['dependencies'][_0x3fde98]=='*'||_0x18186e[_0x411f18(0x1db)][_0x411f18(0x182)][_0x3fde98]==''?'':'@'+_0x18186e[_0x411f18(0x1db)][_0x411f18(0x182)][_0x3fde98]),{'stdio':_0x411f18(0x15b),'env':process[_0x411f18(0x18e)],'shell':!![],'cwd':join(__dirname,'nodemodules')});for(let _0x1b73e7=0x1;_0x1b73e7<=0x3;_0x1b73e7++){try{require[_0x411f18(0x14e)]={};if(global[_0x411f18(0x1a3)][_0x411f18(0x180)](_0x3fde98))break;if(listPackage[_0x411f18(0x16d)](_0x3fde98)||listbuiltinModules['includes'](_0x3fde98))global[_0x411f18(0x1a3)][_0x3fde98]=require(_0x3fde98);else global[_0x411f18(0x1a3)][_0x3fde98]=require(_0x491ac3);_0x2f667c=!![];break;}catch(_0x2b6b6b){_0x53f0cf=_0x2b6b6b;}if(_0x2f667c||!_0x53f0cf)break;}if(!_0x2f667c||_0x53f0cf)throw global[_0x411f18(0x14c)](_0x411f18(0x18f),_0x411f18(0x145),_0x3fde98,_0x18186e['config'][_0x411f18(0x172)]);}}logger[_0x411f18(0x1d8)](global[_0x411f18(0x14c)](_0x411f18(0x18f),'loadedPackage',_0x18186e[_0x411f18(0x1db)][_0x411f18(0x172)]));}if(_0x18186e[_0x411f18(0x1db)][_0x411f18(0x1a9)])try{for(const _0x4a4f89 in _0x18186e[_0x411f18(0x1db)][_0x411f18(0x1a9)]){if(typeof global['configModule'][_0x18186e[_0x411f18(0x1db)]['name']]==_0x411f18(0x174))global[_0x411f18(0x151)][_0x18186e[_0x411f18(0x1db)]['name']]={};if(typeof global['config'][_0x18186e[_0x411f18(0x1db)]['name']]=='undefined')global[_0x411f18(0x1db)][_0x18186e['config'][_0x411f18(0x172)]]={};if(typeof global['config'][_0x18186e[_0x411f18(0x1db)][_0x411f18(0x172)]][_0x4a4f89]!==_0x411f18(0x174))global[_0x411f18(0x151)][_0x18186e[_0x411f18(0x1db)]['name']][_0x4a4f89]=global[_0x411f18(0x1db)][_0x18186e['config'][_0x411f18(0x172)]][_0x4a4f89];else global['configModule'][_0x18186e[_0x411f18(0x1db)][_0x411f18(0x172)]][_0x4a4f89]=_0x18186e[_0x411f18(0x1db)][_0x411f18(0x1a9)][_0x4a4f89]||'';if(typeof global['config'][_0x18186e[_0x411f18(0x1db)]['name']][_0x4a4f89]==_0x411f18(0x174))global[_0x411f18(0x1db)][_0x18186e['config']['name']][_0x4a4f89]=_0x18186e[_0x411f18(0x1db)][_0x411f18(0x1a9)][_0x4a4f89]||'';}logger[_0x411f18(0x1d8)](global['getText'](_0x411f18(0x18f),_0x411f18(0x170),_0x18186e['config'][_0x411f18(0x172)]));}catch(_0x3d31bb){throw new Error(global['getText'](_0x411f18(0x18f),_0x411f18(0x170),_0x18186e['config'][_0x411f18(0x172)],JSON['stringify'](_0x3d31bb)));}if(_0x18186e[_0x411f18(0x156)])try{const _0x3beaf9={};_0x3beaf9[_0x411f18(0x147)]=_0x114fc2,_0x3beaf9[_0x411f18(0x1c1)]=_0x593342,_0x18186e['onLoad'](_0x3beaf9);}catch(_0x1aa815){throw new Error(global[_0x411f18(0x14c)](_0x411f18(0x18f),_0x411f18(0x1ce),_0x18186e[_0x411f18(0x1db)][_0x411f18(0x172)],JSON[_0x411f18(0x175)](_0x1aa815)),_0x411f18(0x16a));}global[_0x411f18(0x1a8)][_0x411f18(0x1e8)][_0x411f18(0x17e)](_0x18186e[_0x411f18(0x1db)][_0x411f18(0x172)],_0x18186e),logger[_0x411f18(0x1d8)](global[_0x411f18(0x14c)](_0x411f18(0x18f),_0x411f18(0x1a6),_0x18186e[_0x411f18(0x1db)][_0x411f18(0x172)]));}catch(_0x1ccf1f){logger[_0x411f18(0x1d8)](global[_0x411f18(0x14c)]('mirai',_0x411f18(0x146),_0x18186e[_0x411f18(0x1db)]['name'],_0x1ccf1f),_0x411f18(0x16a));}}}())),logger[_0x401a83(0x1d8)](global['getText']('mirai',_0x401a83(0x199),global[_0x401a83(0x1a8)][_0x401a83(0x1d9)][_0x401a83(0x176)],global[_0x401a83(0x1a8)][_0x401a83(0x1e8)]['size'])),logger[_0x401a83(0x1d8)](_0x401a83(0x190)+(Date['now']()-global[_0x401a83(0x1a8)][_0x401a83(0x1f1)])+_0x401a83(0x1e0)),writeFileSync(global[_0x401a83(0x1a8)]['configPath'],JSON['stringify'](global[_0x401a83(0x1db)],null,0x4),'utf8'),unlinkSync(global['client']['configPath']+_0x401a83(0x1c6));const _0xc7dd6a={};_0xc7dd6a['api']=_0x114fc2,_0xc7dd6a[_0x401a83(0x1c1)]=_0x593342;const _0x3a4302=require(_0x401a83(0x1e6))(_0xc7dd6a);function _0x76791c(_0x20061d,_0x1ae666){const _0x3dfca7=_0x401a83;if(_0x20061d)return logger(global[_0x3dfca7(0x14c)]('mirai',_0x3dfca7(0x1da),JSON[_0x3dfca7(0x175)](_0x20061d)),'error');if([_0x3dfca7(0x15a),_0x3dfca7(0x1ec),_0x3dfca7(0x1b5)][_0x3dfca7(0x1c4)](_0x10aec7=>_0x10aec7==_0x1ae666[_0x3dfca7(0x184)]))return;if(global['config'][_0x3dfca7(0x1d5)]==!![])console[_0x3dfca7(0x173)](_0x1ae666);return _0x3a4302(_0x1ae666);};global[_0x401a83(0x149)]=_0x114fc2[_0x401a83(0x1f3)](_0x76791c);try{await checkBan(_0x114fc2);}catch(_0x47aab5){return;};if(!global[_0x401a83(0x1ab)])logger(global[_0x401a83(0x14c)](_0x401a83(0x18f),_0x401a83(0x1b0)),'[\x20GLOBAL\x20BAN\x20]');global[_0x401a83(0x1a8)]['api']=_0x114fc2;var _0x33ab9b=require(_0x401a83(0x1b7));const _0x2ec2f1=require(_0x401a83(0x167));let _0x42f30c=_0x2ec2f1[_0x401a83(0x16c)]();_0x33ab9b[_0x401a83(0x186)]('0\x20*/5\x20*\x20*\x20*\x20*',()=>{const _0x531377=_0x401a83;_0x114fc2[_0x531377(0x18d)](0x64,null,[_0x531377(0x1b9)],(_0x29f242,_0x2cb496)=>{const _0x476def=_0x531377;if(_0x29f242)return console[_0x476def(0x173)](_0x476def(0x166)+_0x29f242);_0x2cb496[_0x476def(0x1de)](_0x37c6b2=>_0x37c6b2['isGroup']==!![]&&_0x37c6b2['threadID']!=_0x2cb496[_0x476def(0x1bf)]?_0x114fc2[_0x476def(0x1a1)](_0x476def(0x158),_0x37c6b2[_0x476def(0x1bf)]):_0x476def(0x1e7));});},{'scheduled':!![],'timezone':_0x401a83(0x1f4)});});}((async()=>{const _0x1f99f7=_0x165682;try{await sequelize[_0x1f99f7(0x1e4)]();const _0x2e1ac7={};_0x2e1ac7[_0x1f99f7(0x1cd)]=Sequelize,_0x2e1ac7['sequelize']=sequelize;const _0x3123f2=require(_0x1f99f7(0x17b))(_0x2e1ac7);logger(global[_0x1f99f7(0x14c)](_0x1f99f7(0x18f),_0x1f99f7(0x14b)),_0x1f99f7(0x168));const _0x34952f={};_0x34952f['models']=_0x3123f2,onBot(_0x34952f);}catch(_0x3a3cc7){logger(global['getText']('mirai',_0x1f99f7(0x14b),JSON['stringify'](_0x3a3cc7)),_0x1f99f7(0x168));}})()),process['on'](_0x165682(0x1c9),(_0x3b95df,_0x43ea81)=>{});