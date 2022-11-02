import{d as F,o as c,c as C,w as l,l as e,I as M,u as V,N as K,D as B,y as z,e as W,Q as j,cm as G,cp as H,cU as g,k as O,j as w,a as i,t as D,m as p,cF as S,F as b,n as N,b as u,cV as P,v as _,z as I,i as v}from"./index.3a3d021f.js";import{j as q}from"./index.58caa11d.js";import{k as R}from"./kumaDpServerUrl.8cd5871a.js";import{_ as Y}from"./CodeBlock.vue_vue_type_style_index_0_lang.1ff82bc9.js";import{F as L,S as Z,E as Q}from"./EntityScanner.e61620d5.js";import{E as J}from"./EnvironmentSwitcher.77172fda.js";import"./_commonjsHelpers.f037b798.js";const X=e("a",null,"?",-1),$=F({__name:"HelperTooltip",setup(n){return(t,s)=>(c(),C(V(K),{trigger:"hover",class:"help-icon"},{content:l(()=>[e("div",null,[M(t.$slots,"default")])]),default:l(()=>[X]),_:3}))}}),ee={type:"Dataplane",mesh:null,name:null,networking:{}},te={name:"DataplaneWizardUniversal",components:{CodeBlock:Y,FormFragment:L,StepSkeleton:Z,EnvironmentSwitcher:J,HelperTooltip:$,EntityScanner:Q,KAlert:z,KButton:W,KCard:j},data(){return{productName:G,randString:Math.random().toString(36).substring(2,8),schema:ee,steps:[{label:"General",slug:"general"},{label:"Topology",slug:"topology"},{label:"Networking",slug:"networking"},{label:"Install",slug:"complete"}],tabs:[{hash:"#universal",title:"Universal"}],sidebarContent:[{name:"dataplane"},{name:"example"},{name:"switch"}],startScanner:!1,scanFound:!1,hideScannerSiblings:!1,scanError:!1,isComplete:!1,validate:{meshName:"",univDataplaneType:"dataplane-type-service",univDataplaneServiceName:"",univDataplaneId:"",univDataplaneCustomIdDisabled:!0,univDataplaneNetworkAddress:null,univDataplaneNetworkServicePort:null,univDataplaneNetworkServiceAddress:"127.0.0.1",univDataplaneNetworkDPPort:null,univDataplaneNetworkProtocol:"tcp"},formFields:{protocols:["tcp","http","grpc"]}}},computed:{...H({title:"config/getTagline",version:"config/getVersion",environment:"config/getEnvironment",meshes:"getMeshList"}),getDataplaneSchema(){const n=Object.assign({},this.schema),{meshName:t,univDataplaneType:s,univDataplaneServiceName:h,univDataplaneId:a,univDataplaneNetworkAddress:r,univDataplaneNetworkServicePort:k,univDataplaneNetworkServiceAddress:d,univDataplaneNetworkDPPort:f,univDataplaneNetworkProtocol:m}=this.validate;if(!!t)return n.name=a,n.mesh=t,s==="dataplane-type-service"?(n.networking.gateway&&delete n.networking.gateway,n.networking={address:r,inbound:[{port:f,servicePort:k,serviceAddress:d,tags:{"kuma.io/service":h,"kuma.io/protocol":m}}]}):s==="dataplane-type-gateway"&&(n.networking.inbound&&delete n.networking.inbound,n.networking={address:r,gateway:{tags:{"kuma.io/service":h}}}),n},generateDpTokenCodeOutput(){const{univDataplaneId:n}=this.validate;return`kumactl generate dataplane-token --name=${n} > kuma-token-${n}`},startDpCodeOutput(){const{univDataplaneId:n}=this.validate;return`kuma-dp run \\
      --cp-address=${R()} \\
      --dataplane=${`"${q(this.getDataplaneSchema)}"`} \\
      --dataplane-token-file=kuma-token-${n}`},nextDisabled(){const{meshName:n,univDataplaneServiceName:t,univDataplaneId:s,univDataplaneNetworkAddress:h,univDataplaneNetworkServicePort:a,univDataplaneNetworkDPPort:r,univDataplaneNetworkProtocol:k}=this.validate;return n.length?this.$route.query.step==="1"?!(t&&s):this.$route.query.step==="2"?!(h&&a&&r&&k):!1:!0}},watch:{"validate.univDataplaneId"(n){this.validate.univDataplaneId=g(n)},"validate.univDataplaneServiceName"(n){const t=g(n);this.validate.univDataplaneServiceName=t,this.validate.univDataplaneServiceName===""?this.validate.univDataplaneId="":this.validate.univDataplaneId=g(`${n}-${this.randString}`)},"validate.univDataplaneNetworkServicePort"(n){const t=n.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkServicePort=t},"validate.univDataplaneNetworkDPPort"(n){const t=n.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkDPPort=t}},methods:{hideSiblings(){this.hideScannerSiblings=!0},scanForEntity(){const{meshName:n,univDataplaneId:t}=this.validate;this.scanComplete=!1,this.scanError=!1,!(!n||!t)&&O.getDataplaneFromMesh({mesh:n,name:t}).then(s=>{var h;((h=s==null?void 0:s.name)==null?void 0:h.length)>0?(this.isRunning=!0,this.scanFound=!0):this.scanError=!0}).catch(s=>{this.scanError=!0,console.error(s)}).finally(()=>{this.scanComplete=!0})},compeleteDataPlaneSetup(){this.$store.dispatch("updateSelectedMesh",this.validate.meshName),this.$router.push({name:"data-plane-list-view",params:{mesh:this.validate.meshName}})}}},ae={class:"wizard"},ne={class:"wizard__content"},le=e("h3",null," Create Universal Dataplane ",-1),oe=e("h3",null," To get started, please select on what Mesh you would like to add the Dataplane: ",-1),ie=e("p",null," If you've got an existing Mesh that you would like to associate with your Dataplane, you can select it below, or create a new one using our Mesh Wizard. ",-1),se=e("small",null,"Would you like to see instructions for Kubernetes? Use sidebar to change wizard!",-1),re=e("option",{disabled:"",value:""}," Select an existing Mesh\u2026 ",-1),de=["value"],ue=e("label",{class:"k-input-label mr-4"}," or ",-1),pe=e("h3",null," Setup Dataplane Mode ",-1),ce=e("p",null," You can create a data plane for a service or a data plane for a Gateway. ",-1),ve={for:"service-dataplane"},he=e("span",null," Service Dataplane ",-1),me={for:"gateway-dataplane"},we=e("span",null," Gateway Dataplane ",-1),De=["disabled"],ke=e("h3",null," Networking ",-1),_e=e("p",null," It's time to now configure the networking settings so that the Dataplane can connect to the local service, and other data planes can consume your service. ",-1),fe=e("p",null,[e("strong",null,"All fields below are required to proceed.")],-1),ge=["value","selected"],ye={key:0},Se={key:0},be=e("h3",null," Auto-Inject DPP ",-1),Ne=e("h4",null,"Generate Dataplane Token",-1),Pe=e("h4",null,"Start Dataplane Process",-1),Ie=e("h3",null,"Searching\u2026",-1),Ce=e("p",null,"We are looking for your dataplane.",-1),Te=e("h3",null,"Done!",-1),Ae={key:0},xe=e("p",null," Proceed to the next step where we will show you your new Dataplane. ",-1),Ee=e("h3",null,"Dataplane not found",-1),Ue=e("p",null,"We were unable to find your dataplane.",-1),Fe=e("p",null," Please return to the first step and make sure to select an existing Mesh, or create a new one. ",-1),Me=e("h3",null,"Dataplane",-1),Ve=e("h3",null,"Example",-1),Ke=e("p",null," Below is an example of a Dataplane resource output: ",-1),Be=e("code",{class:"block"},[e("pre",null,`type: Dataplane
mesh: default
name: dp-echo-1
networking:
  address: 10.0.0.1
  inbound:
  - port: 10000
    servicePort: 9000
    tags:
      kuma.io/service: echo`)],-1);function ze(n,t,s,h,a,r){const k=v("KButton"),d=v("FormFragment"),f=v("KCard"),m=v("HelperTooltip"),y=v("CodeBlock"),T=v("EntityScanner"),A=v("KAlert"),x=v("EnvironmentSwitcher"),E=v("StepSkeleton");return c(),w("div",ae,[e("div",ne,[i(E,{steps:a.steps,"sidebar-content":a.sidebarContent,"footer-enabled":a.hideScannerSiblings===!1,"next-disabled":r.nextDisabled},{general:l(()=>[le,e("p",null," Welcome to the wizard to create a new Dataplane resource in "+D(n.title)+". We will be providing you with a few steps that will get you started. ",1),e("p",null," As you know, the "+D(a.productName)+" GUI is read-only. ",1),oe,ie,se,i(f,{class:"my-6","has-shadow":""},{body:l(()=>[i(d,{title:"Choose a Mesh","for-attr":"dp-mesh","all-inline":""},{default:l(()=>[e("div",null,[p(e("select",{id:"dp-mesh","onUpdate:modelValue":t[0]||(t[0]=o=>a.validate.meshName=o),class:"k-input w-100","data-testid":"mesh-select"},[re,(c(!0),w(b,null,N(n.meshes.items,o=>(c(),w("option",{key:o.name,value:o.name},D(o.name),9,de))),128))],512),[[S,a.validate.meshName]])]),e("div",null,[ue,i(k,{to:{name:"create-mesh"},appearance:"secondary"},{default:l(()=>[u(" Create a new Mesh ")]),_:1})])]),_:1})]),_:1})]),topology:l(()=>[pe,ce,i(d,{"all-inline":"","equal-cols":"","hide-label-col":"","shift-right":""},{default:l(()=>[e("div",null,[e("label",ve,[p(e("input",{id:"service-dataplane","onUpdate:modelValue":t[1]||(t[1]=o=>a.validate.univDataplaneType=o),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-service",checked:""},null,512),[[P,a.validate.univDataplaneType]]),he]),e("label",me,[p(e("input",{id:"gateway-dataplane","onUpdate:modelValue":t[2]||(t[2]=o=>a.validate.univDataplaneType=o),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-gateway"},null,512),[[P,a.validate.univDataplaneType]]),we])])]),_:1}),i(d,{"all-inline":"",title:"Service name","for-attr":"service-name"},{default:l(()=>[p(e("input",{id:"service-name","onUpdate:modelValue":t[3]||(t[3]=o=>a.validate.univDataplaneServiceName=o),"data-testid":"service-name",type:"text",class:"k-input w-100 mr-4"},null,512),[[_,a.validate.univDataplaneServiceName]])]),_:1}),i(d,{"all-inline":"",title:"Dataplane ID","for-attr":"dataplane-id"},{default:l(()=>[e("div",null,[p(e("input",{id:"dataplane-id","onUpdate:modelValue":t[4]||(t[4]=o=>a.validate.univDataplaneId=o),type:"text",class:"k-input w-100",disabled:a.validate.univDataplaneCustomIdDisabled},null,8,De),[[_,a.validate.univDataplaneId]])]),e("div",null,[i(k,{appearance:"secondary",onClick:t[5]||(t[5]=o=>a.validate.univDataplaneCustomIdDisabled=!1)},{default:l(()=>[u(" Edit ")]),_:1}),i(m,null,{default:l(()=>[u(" This is a unique ID for the Dataplane instance. ")]),_:1})])]),_:1})]),networking:l(()=>[ke,_e,fe,i(d,{"all-inline":"",title:"Data Plane IP Address","for-attr":"network-address"},{default:l(()=>[p(e("input",{id:"network-address","onUpdate:modelValue":t[6]||(t[6]=o=>a.validate.univDataplaneNetworkAddress=o),type:"text",class:"k-input w-100"},null,512),[[_,a.validate.univDataplaneNetworkAddress]]),i(m,null,{default:l(()=>[u(" The IP address that other services will use to consume this data plane. ")]),_:1})]),_:1}),i(d,{"all-inline":"","fill-first":"",title:"Data Plane Port","for-attr":"network-dataplane-port"},{default:l(()=>[p(e("input",{id:"network-dataplane-port","onUpdate:modelValue":t[7]||(t[7]=o=>a.validate.univDataplaneNetworkDPPort=o),type:"text",class:"k-input w-100"},null,512),[[_,a.validate.univDataplaneNetworkDPPort]]),i(m,null,{default:l(()=>[u(" The data plane port (that other services will use to consume this service). ")]),_:1})]),_:1}),i(d,{"all-inline":"",title:"Service IP Address","for-attr":"network-service-address"},{default:l(()=>[p(e("input",{id:"network-service-address","onUpdate:modelValue":t[8]||(t[8]=o=>a.validate.univDataplaneNetworkServiceAddress=o),type:"text",class:"k-input w-100"},null,512),[[_,a.validate.univDataplaneNetworkServiceAddress]]),i(m,null,{default:l(()=>[u(" The address where your service is listening on the machine. ")]),_:1})]),_:1}),i(d,{"all-inline":"",title:"Service Port","for-attr":"network-service-port"},{default:l(()=>[p(e("input",{id:"network-service-port","onUpdate:modelValue":t[9]||(t[9]=o=>a.validate.univDataplaneNetworkServicePort=o),type:"text",class:"k-input w-100"},null,512),[[_,a.validate.univDataplaneNetworkServicePort]]),i(m,null,{default:l(()=>[u(" The port where your service is listening on the machine. ")]),_:1})]),_:1}),i(d,{"all-inline":"",title:"Protocol","for-attr":"network-dataplane-protocol"},{default:l(()=>[p(e("select",{id:"network-dataplane-protocol","onUpdate:modelValue":t[10]||(t[10]=o=>a.validate.univDataplaneNetworkProtocol=o),class:"k-input w-100",name:"network-dataplane-protocol"},[(c(!0),w(b,null,N(a.formFields.protocols,(o,U)=>(c(),w("option",{key:U,value:o,selected:a.validate.univDataplaneNetworkProtocol===o},D(o),9,ge))),128))],512),[[S,a.validate.univDataplaneNetworkProtocol]]),i(m,null,{default:l(()=>[u(" The protocol of the service. ")]),_:1})]),_:1})]),complete:l(()=>[a.validate.meshName?(c(),w("div",ye,[a.hideScannerSiblings===!1?(c(),w("div",Se,[be,e("p",null," It's time to first generate the credentials so that "+D(n.title)+" will allow the Dataplane to successfully authenticate itself with the control plane, and then finally install the Dataplane process (powered by Envoy). ",1),Ne,i(y,{id:"code-block-generate-token-command",language:"bash",code:r.generateDpTokenCodeOutput},null,8,["code"]),Pe,i(y,{id:"code-block-stard-dp-command",language:"bash",code:r.startDpCodeOutput},null,8,["code"])])):I("",!0),i(T,{"loader-function":r.scanForEntity,"should-start":!0,"has-error":a.scanError,"can-complete":a.scanFound,onHideSiblings:r.hideSiblings},{"loading-title":l(()=>[Ie]),"loading-content":l(()=>[Ce]),"complete-title":l(()=>[Te]),"complete-content":l(()=>[e("p",null,[u(" Your Dataplane "),a.validate.univDataplaneId?(c(),w("strong",Ae,D(a.validate.univDataplaneId),1)):I("",!0),u(" was found! ")]),xe,e("p",null,[i(k,{appearance:"primary",onClick:r.compeleteDataPlaneSetup},{default:l(()=>[u(" View Your Dataplane ")]),_:1},8,["onClick"])])]),"error-title":l(()=>[Ee]),"error-content":l(()=>[Ue]),_:1},8,["loader-function","has-error","can-complete","onHideSiblings"])])):(c(),C(A,{key:1,appearance:"danger"},{alertMessage:l(()=>[Fe]),_:1}))]),dataplane:l(()=>[Me,e("p",null," In "+D(n.title)+", a Dataplane resource represents a data plane proxy running alongside one of your services. Data plane proxies can be added in any Mesh that you may have created, and in Kubernetes, they will be auto-injected by "+D(n.title)+". ",1)]),example:l(()=>[Ve,Ke,Be]),switch:l(()=>[i(x)]),_:1},8,["steps","sidebar-content","footer-enabled","next-disabled"])])])}const Ye=B(te,[["render",ze]]);export{Ye as default};