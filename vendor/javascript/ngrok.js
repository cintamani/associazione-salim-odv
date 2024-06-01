import*as t from"got";import*as e from"uuid";import*as n from"child_process";import*as o from"path";import*as r from"os";import a from"process";import*as s from"util";import*as i from"yaml";import*as l from"fs";import*as u from"lodash.clonedeep";var c="default"in t?t.default:t;var d={};const f=c.default;class NgrokClientError$1 extends Error{constructor(t,e,n){super(t);this.name="NgrokClientError";this.response=e;this.body=n}}class NgrokClient$1{constructor(t){this.internalApi=f.extend({prefixUrl:t,retry:0})}async request(t,e,n={}){try{return"get"===t?await this.internalApi.get(e,{searchParams:n}).json():await this.internalApi[t](e,{json:n}).json()}catch(t){let e;if(t.response){try{const n=JSON.parse(t.response.body);e=new NgrokClientError$1(n.msg,t.response,n)}catch(n){e=new NgrokClientError$1(t.response.body,t.response,t.response.body)}throw e}throw t}}async booleanRequest(t,e,n={}){try{return await this.internalApi[t](e,{json:n}).then((t=>204===t.statusCode))}catch(t){const e=JSON.parse(t.response.body);throw new NgrokClientError$1(e.msg,t.response,e)}}listTunnels(){return this.request("get","api/tunnels")}startTunnel(t={}){return this.request("post","api/tunnels",t)}tunnelDetail(t){return this.request("get",`api/tunnels/${t}`)}stopTunnel(t){if("undefined"===typeof t||0===t.length)throw new Error("To stop a tunnel, please provide a name.");return this.booleanRequest("delete",`api/tunnels/${t}`)}listRequests(t){return this.request("get","api/requests/http",t)}replayRequest(t,e){return this.booleanRequest("post","api/requests/http",{id:t,tunnelName:e})}deleteAllRequests(){return this.booleanRequest("delete","api/requests/http")}requestDetail(t){if("undefined"===typeof t||0===t.length)throw new Error("To get the details of a request, please provide an id.");return this.request("get",`api/requests/http/${t}`)}}d={NgrokClient:NgrokClient$1,NgrokClientError:NgrokClientError$1};var p=d;var h="default"in o?o.default:o;var g="default"in r?r.default:r;var m={};const{join:w}=h;const k=g.platform();const v=w(new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname,"..","bin");const b="win32"===k?"ngrok.exe":"ngrok";const y=/starting web service.*addr=(\d+\.\d+\.\d+\.\d+:\d+)/;const P=/address already in use/;m={defaultDir:v,bin:b,ready:y,inUse:P};var C=m;var $="default"in n?n.default:n;var _="default"in o?o.default:o;var A={};var E=a;const{spawn:N}=$;const{join:q}=_;const{defaultDir:D,bin:R,ready:T,inUse:x}=C;let O,S;async function getProcess$1(t){if(O)return O;try{O=startProcess(t);return await O}catch(t){O=null;throw t}}function parseAddr(t){if("{"===t[0]){const e=JSON.parse(t);return e.addr}{const e=t.match(T);if(e)return e[1]}}async function startProcess(t){let e=D;const n=["start","--none","--log=stdout"];t.authtoken&&n.push(`--authtoken=${t.authtoken}`);t.region&&n.push(`--region=${t.region}`);t.configPath&&n.push(`--config=${t.configPath}`);t.binPath&&(e=t.binPath(e));const o=N(q(e,R),n,{windowsHide:true});let r,a;const s=new Promise(((t,e)=>{r=t;a=e}));o.stdout.on("data",(e=>{const n=e.toString().trim();t.onLogEvent&&t.onLogEvent(n);t.onStatusChange&&(n.match("client session established")?t.onStatusChange("connected"):n.match("session closed, starting reconnect loop")&&t.onStatusChange("closed"));const o=n.split(/\n/);o.forEach((t=>{const e=parseAddr(t);e?r(`http://${e}`):t.match(x)&&a(new Error(t.substring(0,1e4)))}))}));o.stderr.on("data",(t=>{const e=t.toString().substring(0,1e4);a(new Error(e))}));o.on("exit",(()=>{O=null;S=null;t.onTerminated&&t.onTerminated()}));try{const e=await s;S=o;return e}catch(t){o.kill();throw t}finally{t.onLogEvent||t.onStatusChange||o.stdout.removeAllListeners("data");o.stderr.removeAllListeners("data")}}function killProcess$1(){return S?new Promise((t=>{S.on("exit",(()=>t()));S.kill()})):Promise.resolve()}E.on("exit",(()=>{S&&S.kill()}));A={getProcess:getProcess$1,killProcess:killProcess$1};var j=A;var L="default"in s?s.default:s;var U="default"in n?n.default:n;var V="default"in o?o.default:o;var F={};const{promisify:H}=L;const{exec:J}=U;const{join:z}=V;const I=H(J);const{defaultDir:B,bin:G}=C;
/**
 * @param {Ngrok.Options | undefined} opts
 * @returns Promise<string>
 */async function getVersion$1(t={}){let e=B;t.binPath&&(e=t.binPath(e));const{stdout:n}=await I(`${z(e,G)} --version`);return n.replace("ngrok version","").trim()}F={getVersion:getVersion$1};var K=F;var M="default"in n?n.default:n;var Q="default"in o?o.default:o;var W={};const X=M;const{join:Y}=Q;const{defaultDir:Z,bin:tt}=C;function consolidateTokenAndOpts(t){const e="string"!==typeof t;const n=e?t:{};const o=e?n.authtoken:t;n.authtoken=o;return n}async function setAuthtoken$1(t){const e=consolidateTokenAndOpts(t);const n=["config","add-authtoken",e.authtoken];e.configPath&&n.push("--config="+e.configPath);let o=Z;e.binPath&&(o=e.binPath(o));const r=X.spawn(Y(o,tt),n,{windowsHide:true});const a=new Promise(((t,e)=>{r.stdout.once("data",(()=>t()));r.stderr.once("data",(()=>e(new Error("cant set authtoken"))))}));try{return await a}finally{r.kill()}}W={setAuthtoken:setAuthtoken$1};var et=W;var nt="default"in n?n.default:n;var ot="default"in o?o.default:o;var rt={};const{spawn:at}=nt;const{join:st}=ot;const{defaultDir:it,bin:lt}=C;
/**
 *
 * Upgrades ngrok config file for use with ngrok version 3. See https://ngrok.com/docs/guides/upgrade-v2-v3#upgrading-the-ngrok-agent-config for more details
 *
 * @param {Object} opts - Options for upgrading your config file
 * @param {boolean} opts.relocate - Whether to relocate your config to the default directory
 * @param {string} opts.configPath - The path to your config file
 * @param {(defaultPath: string) => string} opts.binPath - Custom binary path, eg for prod in electron
 */async function upgradeConfig$1(t){const e=["config","upgrade"];t.relocate&&e.push("--relocate");t.configPath&&e.push(`--config=${t.configPath}`);let n=it;t.binPath&&(n=t.binPath(n));const o=at(st(n,lt),e,{windowsHide:true});const r=new Promise(((t,e)=>{o.stdout.once("data",(()=>t()));o.stderr.once("data",(()=>e(new Error("Error upgrading config"))))}));try{return await r}finally{o.kill()}}rt={upgradeConfig:upgradeConfig$1};var ut=rt;var ct="default"in r?r.default:r;var dt="default"in o?o.default:o;var ft="default"in i?i.default:i;var pt="default"in l?l.default:l;var ht="default"in u?u.default:u;var gt={};const{homedir:mt,platform:wt}=ct;const{join:kt}=dt;const{parse:vt}=ft;const{readFileSync:bt}=pt;const yt=ht;function normalizedPlatform(){const t=wt();return"darwin"===t||"win32"===t?t:"linux"}function defaultConfigPath$1(){const t=mt();const e=normalizedPlatform();const n={darwin:kt(t,"Library","Application Support","ngrok","ngrok.yml"),linux:kt(t,".config","ngrok","ngrok.yml"),win32:kt(t,"AppData","Local","ngrok","ngrok.yml")};return n[e]}function oldDefaultConfigPath$1(){const t=mt();return kt(t,".ngrok2","ngrok.yml")}const Pt=["addr","metadata","basic_auth","circuit_breaker","host_header","hostname","inspect","ip_restriction.allow_cidrs","ip_restriction.deny_cidrs","mutual_tls_cas","oauth.allow_domains","oauth.allow_emails","oauth.scopes","oauth.provider","oidc.client_id","oidc.client_secret","oidc.scopes","oidc.issuer_url","proto","proxy_proto","request_header.add","request_header.remove","response_header.add","response_header.remove","schemes","subdomain","verify_webhook.provider","verify_webhook.secret","websocket_tcp_converter","remote_addr","crt","key","terminate_at","labels"];const Ct=["authtoken","region","web_addr","configPath","binPath","onLogEvent","onStatusChange","onTerminated"];function optsFromAvailable(t,e){const n={};e.forEach((e=>{t.hasOwnProperty(e)&&(n[e]=t[e])}));return n}function defaults$1(t){"function"===typeof t&&(t={proto:"http",addr:80});"object"!==typeof t&&(t={proto:"http",addr:t});t=yt(t)||{proto:"http",addr:80};let e=optsFromAvailable(t,Pt);const n=optsFromAvailable(t,Ct);if(t.name){const o=n.configPath||defaultConfigPath$1();const r=vt(bt(o,"utf8"));r.tunnels&&r.tunnels[t.name]&&(e=Object.assign(e,r.tunnels[t.name]))}e.proto||(e.proto="http");e.addr||(e.addr=t.port||t.host||80);e.hasOwnProperty("basic_auth")&&!Array.isArray(e.basic_auth)&&(e.basic_auth=[e.basic_auth]);return{tunnelOpts:e,globalOpts:n}}function validate$1(t){if(false===t.web_addr||"false"===t.web_addr)throw new Error("web_addr:false is not supported, module depends on internal ngrok api")}function isRetriable$1(t){if(!t.response)return false;const e=t.response.statusCode;const n=t.body;const o=500===e&&/panic/.test(n);const r=502===e&&n.details&&"tunnel session not ready yet"===n.details.err;const a=503===e&&n.details&&"a successful ngrok tunnel session has not yet been established"===n.details.err;return o||r||a}gt={defaults:defaults$1,validate:validate$1,isRetriable:isRetriable$1,defaultConfigPath:defaultConfigPath$1,oldDefaultConfigPath:oldDefaultConfigPath$1};var $t=gt;var _t="default"in e?e.default:e;var At={};const{NgrokClient:Et,NgrokClientError:Nt}=p;const qt=_t;const{getProcess:Dt,killProcess:Rt}=j;const{getVersion:Tt}=K;const{setAuthtoken:xt}=et;const{upgradeConfig:Ot}=ut;const{defaults:St,validate:jt,isRetriable:Lt,defaultConfigPath:Ut,oldDefaultConfigPath:Vt}=$t;
/**
 * @type string | null
 */let Ft=null;
/**
 * @type NgrokClient | null
 */let Ht=null;
/**
 *
 * @param {Object | string} opts
 * @returns Promise<string>
 */async function connect(t){const{tunnelOpts:e,globalOpts:n}=St(t);jt(n);Ft=await Dt(n);Ht=new Et(Ft);return connectRetry(e)}async function connectRetry(t,e=0){t.name=String(t.name||qt.v4());try{const e=await Ht.startTunnel(t);return e.public_url}catch(n){if(!Lt(n)||e>=100)throw n;await new Promise((t=>setTimeout(t,200)));return connectRetry(t,++e)}}
/**
 *
 * @param {string} publicUrl
 * @returns Promise<void>
 */async function disconnect(t){if(!Ht)return;const e=(await Ht.listTunnels()).tunnels;if(!t){const t=e.map((t=>disconnect(t.public_url)));return Promise.all(t)}const n=e.find((e=>e.public_url===t));if(!n)throw new Error(`there is no tunnel with url: ${t}`);return Ht.stopTunnel(n.name)}
/**
 *
 * @returns Promise<void>
 */async function kill(){if(Ht){await Rt();Ht=null}}
/**
 *
 * @returns string | null
 */function getUrl(){return Ft}
/**
 *
 * @returns NgrokClient | null
 */function getApi(){return Ht}At={connect:connect,disconnect:disconnect,authtoken:xt,defaultConfigPath:Ut,oldDefaultConfigPath:Vt,upgradeConfig:Ot,kill:kill,getUrl:getUrl,getApi:getApi,getVersion:Tt,NgrokClient:Et,NgrokClientError:Nt};var Jt=At;const zt=At.authtoken;const It=At.connect,Bt=At.disconnect,Gt=At.defaultConfigPath,Kt=At.oldDefaultConfigPath,Mt=At.upgradeConfig,Qt=At.kill,Wt=At.getUrl,Xt=At.getApi,Yt=At.getVersion,Zt=At.NgrokClient,te=At.NgrokClientError;export{Zt as NgrokClient,te as NgrokClientError,zt as authtoken,It as connect,Jt as default,Gt as defaultConfigPath,Bt as disconnect,Xt as getApi,Wt as getUrl,Yt as getVersion,Qt as kill,Kt as oldDefaultConfigPath,Mt as upgradeConfig};

