$wnd.com_esofthead_mycollab_widgetset_MyCollabMobileWidgetSet.runAsyncCallback25("function EHc(){}\nfunction GHc(){}\nfunction IHc(){}\nfunction Zod(){a$b.call(this)}\nfunction b1b(a,b){return IL(a.G.lo(b))}\nfunction hTd(){EZb.call(this);this.I=HFe;this.a=new O3d}\nfunction hTc(c,a){var b=c;a.notifyChildrenOfSizeChange=A8d(function(){b.Wk()})}\nfunction pTc(b){try{b!=null&&eval('{ var document = $doc; var window = $wnd; '+b+'}')}catch(a){}}\nfunction eTc(b){if(b&&b.iLayoutJS){try{b.iLayoutJS();return true}catch(a){return false}}else{return false}}\nfunction dTc(a,b){var c,d;for(c=h0d(new i0d(a.f));c.a.Ug();){d=IL(n0d(c));if(PL(a.f.lo(d))===PL(b)){return d}}return null}\nfunction iTc(a,b){var c,d;d=dTc(a,b);d!=null&&a.f.oo(d);c=GL(a.a.lo(b),518);if(c){a.a.oo(b);return bd(a,c)}else if(b){return bd(a,b)}return false}\nfunction fTc(a){var b,c,d;d=(kub(),a._b).getElementsByTagName('IMG');for(b=0;b<d.length;b++){c=d[b];iub.Ag(c,zee)}}\nfunction jTc(a,b){var c,d,e;if((Zt(),b).hasAttribute(Uze)){e=cu(b,Uze);a.e.no(e,b);It(b,'')}else{d=(kub(),twb(b));for(c=0;c<d;c++){jTc(a,swb(b,c))}}}\nfunction kTc(a,b,c){var d,e;if(!b){return}d=HL(a.e.lo(c));if(!d&&a.d){throw new KYd('No location '+c+nqe)}e=GL(a.f.lo(c),9);if(e==b){return}!!e&&iTc(a,e);a.d||(d=(kub(),a._b));Tc(a,b,(kub(),d));a.f.no(c,b)}\nfunction lTc(a,b){var c,d,e;d=b.Pd();e=GL(a.a.lo(d),518);if(r9b(b.Nd())){if(!e){c=dTc(a,d);bd(a,d);e=new z9b(b,a.b);Sc(a,e,HL(a.e.lo(c)));a.a.no(d,e)}m9b(e.a)}else{if(e){c=dTc(a,d);bd(a,e);Sc(a,d,HL(a.e.lo(c)));a.a.oo(d)}}}\nfunction AHc(c){var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.ok(Xlb,DFe,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.ok(Xlb,EFe,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.ok(Xlb,FFe,d)}\nfunction mTc(){var a;cd.call(this);this.e=new O3d;this.f=new O3d;this.a=new O3d;lb(this,(kub(),Ov($doc)));a=this._b.style;Kx(a,Wne,(Qx(),M8d));Kx(a,jqe,(sB(),qae));Kx(a,Dqe,qae);(B3b(),!A3b&&(A3b=new S3b),B3b(),A3b).a.g&&Kx(a,b9d,(xA(),F9d));Gt(this._b,HFe);Hb(this._b,Fye,true)}\nfunction Yod(a){var b,c;if(a.a){return}c=(!a.F&&(a.F=rg(a)),GL(GL(GL(a.F,6),114),387)).c;b=(!a.F&&(a.F=rg(a)),GL(GL(GL(a.F,6),114),387)).b;if(c!=null){b=b1b(a.u,'layouts/'+c+'.html');b==null&&It(bb(GL(Zg(a),242)),'<em>Layout file layouts/'+c+'.html is missing. Components will be drawn for debug purposes.<\\/em>')}b!=null&&gTc(GL(Zg(a),242),b,c1b(a.u));a.a=true}\nfunction gTc(a,b,c){var d;b=cTc(a,b);d=ubc(c+'/layouts/');b=OZd(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=\"((?![a-z]+:)[^/][^\"]+)\"',GFe+d+'$3\"');b=OZd(b,'<((?:img)|(?:IMG))\\\\s([^>]*)src=[^\"]((?![a-z]+:)[^/][^ />]+)[ />]',GFe+d+'$3\"');b=OZd(b,'(<[^>]+style=\"[^\"]*url\\\\()((?![a-z]+:)[^/][^\"]+)(\\\\)[^>]*>)','$1 '+d+'$2 $3');It((kub(),a._b),b);a.e.Ic();jTc(a,a._b);fTc(a);a.c=rub(a._b);!a.c&&(a.c=a._b);hTc(a,a.c);a.d=true}\nfunction cTc(a,b){var c,d,e,f,g,h,i,j;b=OZd(b,'_UID_',a.g+'__');a.i='';d=0;f=b.toLowerCase();h='';i=f.indexOf('<script',0);while(i>0){h+=b.substr(d,i-d);i=f.indexOf('>',i);e=f.indexOf('<\\/script>',i);a.i+=b.substr(i+1,e-(i+1))+';';g=d=e+9;i=f.indexOf('<script',g)}h+=YZd(b,d,b.length-d);f=h.toLowerCase();j=f.indexOf('<body');if(j<0){h=h}else{j=f.indexOf('>',j)+1;c=f.indexOf('<\\/body>',j);c>j?(h=h.substr(j,c-j)):(h=YZd(h,j,h.length-j))}return h}\nvar DFe='templateContents',EFe='childLocations',FFe='templateName',GFe='<$1 $2src=\"',HFe='v-customlayout';wqb(1790,1,Ipe);_.Ie=function DHc(){YJc(this.b,Xlb,mlb);OJc(this.b,jue,Rfb);QJc(this.b,Rfb,kue,new EHc);QJc(this.b,Xlb,kue,new GHc);QJc(this.b,Vab,kue,new IHc);WJc(this.b,Rfb,S9d,new GJc(Xlb));WJc(this.b,Rfb,bae,new GJc(Vab));AHc(this.b);UJc(this.b,Xlb,DFe,new GJc(mob));UJc(this.b,Xlb,EFe,new HJc(_ve,zL(vL(q9,1),lue,4,0,[new GJc(Qkb),new GJc(mob)])));UJc(this.b,Xlb,FFe,new GJc(mob));Mpc((!Fpc&&(Fpc=new Spc),Fpc),this.a.d)};wqb(1792,1,uxe,EHc);_.ik=function FHc(a,b){return new Zod};var s8=$Xd(tse,'ConnectorBundleLoaderImpl/25/1/1',1792);wqb(1793,1,uxe,GHc);_.ik=function HHc(a,b){return new hTd};var t8=$Xd(tse,'ConnectorBundleLoaderImpl/25/1/2',1793);wqb(1794,1,uxe,IHc);_.ik=function JHc(a,b){return new mTc};var u8=$Xd(tse,'ConnectorBundleLoaderImpl/25/1/3',1794);wqb(242,201,{14:1,11:1,13:1,12:1,24:1,30:1,15:1,26:1,10:1,9:1,242:1,19:1},mTc);_.Hc=function nTc(a){throw new z$d};_.Ic=function oTc(){Nc(this);this.f.Ic();this.a.Ic()};_.Wk=function qTc(){};_.sc=function rTc(a){Ub(this,a);kub();if(fwb((Zt(),a).type)==zee){c9b(this,true);ewb(a,true)}};_.tc=function sTc(){Vb(this);!!this.c&&(this.c.notifyChildrenOfSizeChange=null,undefined)};_.Jc=function tTc(a){return iTc(this,a)};_.jc=function uTc(a){Gt((kub(),this._b),a);Hb(this._b,Fye,true)};_.d=false;_.i='';var Vab=$Xd(U9d,'VCustomLayout',242);wqb(1791,499,{7:1,16:1,120:1,91:1,132:1,25:1,34:1,33:1,31:1,151:1,248:1,32:1,3:1},Zod);_.Nd=function $od(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.zd=function _od(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.yi=function apd(){return !this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)};_.Pd=function bpd(){return GL(Zg(this),242)};_.Bd=function cpd(){GL(Zg(this),242).b=this.u;GL(Zg(this),242).g=this.w};_.Fi=function dpd(){eTc((GL(Zg(this),242),rub(bb(GL(Zg(this),242)))))};_.ke=function epd(b){var c,d,e,f,g,h;Yod(this);for(d=Zh(this).Pc();d.Ug();){c=GL(d.Vg(),16);e=IL((!this.F&&(this.F=rg(this)),GL(GL(GL(this.F,6),114),387)).a.lo(c));try{kTc(GL(Zg(this),242),c.Pd(),e)}catch(a){a=tqb(a);if(!KL(a,38))throw sqb(a)}}for(g=b.a.Pc();g.Ug();){f=GL(g.Vg(),16);if(f.xd()==this){continue}h=f.Pd();h.qc()&&iTc(GL(Zg(this),242),h)}};_.Dd=function fpd(a){_g(this,a);Yod(this);pTc(GL(Zg(this),242).i);GL(Zg(this),242).i=null};_.le=function gpd(a){lTc(GL(Zg(this),242),a)};_.ji=function hpd(a,b){};_.a=false;var Rfb=$Xd('com.vaadin.client.ui.customlayout',Vxe,1791);wqb(387,114,{6:1,41:1,114:1,387:1,3:1},hTd);var Xlb=$Xd('com.vaadin.shared.ui.customlayout','CustomLayoutState',387);A8d(Vq)(25);\n//# sourceURL=com.esofthead.mycollab.widgetset.MyCollabMobileWidgetSet-25.js\n")