var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};(function(e,n){n(t)})(t,(function(t){function simple(e,t,n,r,i){n||(n=o);(function c(e,r,o){var i=o||e.type,a=t[i];n[i](e,r,c);a&&a(e,r)})(e,r,i)}function ancestor(e,t,n,r){var i=[];n||(n=o);(function c(e,r,o){var a=o||e.type,s=t[a];var u=e!==i[i.length-1];u&&i.push(e);n[a](e,r,c);s&&s(e,r||i,i);u&&i.pop()})(e,r)}function recursive(e,t,n,r,o){var i=n?make(n,r||void 0):r;(function c(e,t,n){i[n||e.type](e,t,c)})(e,t,o)}function makeTest(e){return"string"===typeof e?function(t){return t===e}:e||function(){return true}}var n=function Found(t,n){(this||e).node=t;(this||e).state=n};function full(e,t,n,r,i){n||(n=o);(function c(e,r,o){var i=o||e.type;n[i](e,r,c);o||t(e,r,i)})(e,r,i)}function fullAncestor(e,t,n,r){n||(n=o);var i=[];(function c(e,r,o){var a=o||e.type;var s=e!==i[i.length-1];s&&i.push(e);n[a](e,r,c);o||t(e,r||i,i,a);s&&i.pop()})(e,r)}function findNodeAt(e,t,r,i,a,s){a||(a=o);i=makeTest(i);try{(function c(e,o,s){var u=s||e.type;(null==t||e.start<=t)&&(null==r||e.end>=r)&&a[u](e,o,c);if((null==t||e.start===t)&&(null==r||e.end===r)&&i(u,e))throw new n(e,o)})(e,s)}catch(e){if(e instanceof n)return e;throw e}}function findNodeAround(e,t,r,i,a){r=makeTest(r);i||(i=o);try{(function c(e,o,a){var s=a||e.type;if(!(e.start>t||e.end<t)){i[s](e,o,c);if(r(s,e))throw new n(e,o)}})(e,a)}catch(e){if(e instanceof n)return e;throw e}}function findNodeAfter(e,t,r,i,a){r=makeTest(r);i||(i=o);try{(function c(e,o,a){if(!(e.end<t)){var s=a||e.type;if(e.start>=t&&r(s,e))throw new n(e,o);i[s](e,o,c)}})(e,a)}catch(e){if(e instanceof n)return e;throw e}}function findNodeBefore(e,t,r,i,a){r=makeTest(r);i||(i=o);var s;(function c(e,o,a){if(!(e.start>t)){var u=a||e.type;e.end<=t&&(!s||s.node.end<e.end)&&r(u,e)&&(s=new n(e,o));i[u](e,o,c)}})(e,a);return s}var r=Object.create||function(e){function Ctor(){}Ctor.prototype=e;return new Ctor};function make(e,t){var n=r(t||o);for(var i in e)n[i]=e[i];return n}function skipThrough(e,t,n){n(e,t)}function ignore(e,t,n){}var o={};o.Program=o.BlockStatement=function(e,t,n){for(var r=0,o=e.body;r<o.length;r+=1){var i=o[r];n(i,t,"Statement")}};o.Statement=skipThrough;o.EmptyStatement=ignore;o.ExpressionStatement=o.ParenthesizedExpression=function(e,t,n){return n(e.expression,t,"Expression")};o.IfStatement=function(e,t,n){n(e.test,t,"Expression");n(e.consequent,t,"Statement");e.alternate&&n(e.alternate,t,"Statement")};o.LabeledStatement=function(e,t,n){return n(e.body,t,"Statement")};o.BreakStatement=o.ContinueStatement=ignore;o.WithStatement=function(e,t,n){n(e.object,t,"Expression");n(e.body,t,"Statement")};o.SwitchStatement=function(e,t,n){n(e.discriminant,t,"Expression");for(var r=0,o=e.cases;r<o.length;r+=1){var i=o[r];i.test&&n(i.test,t,"Expression");for(var a=0,s=i.consequent;a<s.length;a+=1){var u=s[a];n(u,t,"Statement")}}};o.SwitchCase=function(e,t,n){e.test&&n(e.test,t,"Expression");for(var r=0,o=e.consequent;r<o.length;r+=1){var i=o[r];n(i,t,"Statement")}};o.ReturnStatement=o.YieldExpression=o.AwaitExpression=function(e,t,n){e.argument&&n(e.argument,t,"Expression")};o.ThrowStatement=o.SpreadElement=function(e,t,n){return n(e.argument,t,"Expression")};o.TryStatement=function(e,t,n){n(e.block,t,"Statement");e.handler&&n(e.handler,t);e.finalizer&&n(e.finalizer,t,"Statement")};o.CatchClause=function(e,t,n){e.param&&n(e.param,t,"Pattern");n(e.body,t,"ScopeBody")};o.WhileStatement=o.DoWhileStatement=function(e,t,n){n(e.test,t,"Expression");n(e.body,t,"Statement")};o.ForStatement=function(e,t,n){e.init&&n(e.init,t,"ForInit");e.test&&n(e.test,t,"Expression");e.update&&n(e.update,t,"Expression");n(e.body,t,"Statement")};o.ForInStatement=o.ForOfStatement=function(e,t,n){n(e.left,t,"ForInit");n(e.right,t,"Expression");n(e.body,t,"Statement")};o.ForInit=function(e,t,n){"VariableDeclaration"===e.type?n(e,t):n(e,t,"Expression")};o.DebuggerStatement=ignore;o.FunctionDeclaration=function(e,t,n){return n(e,t,"Function")};o.VariableDeclaration=function(e,t,n){for(var r=0,o=e.declarations;r<o.length;r+=1){var i=o[r];n(i,t)}};o.VariableDeclarator=function(e,t,n){n(e.id,t,"Pattern");e.init&&n(e.init,t,"Expression")};o.Function=function(e,t,n){e.id&&n(e.id,t,"Pattern");for(var r=0,o=e.params;r<o.length;r+=1){var i=o[r];n(i,t,"Pattern")}n(e.body,t,e.expression?"ScopeExpression":"ScopeBody")};o.ScopeBody=function(e,t,n){return n(e,t,"Statement")};o.ScopeExpression=function(e,t,n){return n(e,t,"Expression")};o.Pattern=function(e,t,n){"Identifier"===e.type?n(e,t,"VariablePattern"):"MemberExpression"===e.type?n(e,t,"MemberPattern"):n(e,t)};o.VariablePattern=ignore;o.MemberPattern=skipThrough;o.RestElement=function(e,t,n){return n(e.argument,t,"Pattern")};o.ArrayPattern=function(e,t,n){for(var r=0,o=e.elements;r<o.length;r+=1){var i=o[r];i&&n(i,t,"Pattern")}};o.ObjectPattern=function(e,t,n){for(var r=0,o=e.properties;r<o.length;r+=1){var i=o[r];if("Property"===i.type){i.computed&&n(i.key,t,"Expression");n(i.value,t,"Pattern")}else"RestElement"===i.type&&n(i.argument,t,"Pattern")}};o.Expression=skipThrough;o.ThisExpression=o.Super=o.MetaProperty=ignore;o.ArrayExpression=function(e,t,n){for(var r=0,o=e.elements;r<o.length;r+=1){var i=o[r];i&&n(i,t,"Expression")}};o.ObjectExpression=function(e,t,n){for(var r=0,o=e.properties;r<o.length;r+=1){var i=o[r];n(i,t)}};o.FunctionExpression=o.ArrowFunctionExpression=o.FunctionDeclaration;o.SequenceExpression=o.TemplateLiteral=function(e,t,n){for(var r=0,o=e.expressions;r<o.length;r+=1){var i=o[r];n(i,t,"Expression")}};o.UnaryExpression=o.UpdateExpression=function(e,t,n){n(e.argument,t,"Expression")};o.BinaryExpression=o.LogicalExpression=function(e,t,n){n(e.left,t,"Expression");n(e.right,t,"Expression")};o.AssignmentExpression=o.AssignmentPattern=function(e,t,n){n(e.left,t,"Pattern");n(e.right,t,"Expression")};o.ConditionalExpression=function(e,t,n){n(e.test,t,"Expression");n(e.consequent,t,"Expression");n(e.alternate,t,"Expression")};o.NewExpression=o.CallExpression=function(e,t,n){n(e.callee,t,"Expression");if(e.arguments)for(var r=0,o=e.arguments;r<o.length;r+=1){var i=o[r];n(i,t,"Expression")}};o.MemberExpression=function(e,t,n){n(e.object,t,"Expression");e.computed&&n(e.property,t,"Expression")};o.ExportNamedDeclaration=o.ExportDefaultDeclaration=function(e,t,n){e.declaration&&n(e.declaration,t,"ExportNamedDeclaration"===e.type||e.declaration.id?"Statement":"Expression");e.source&&n(e.source,t,"Expression")};o.ExportAllDeclaration=function(e,t,n){n(e.source,t,"Expression")};o.ImportDeclaration=function(e,t,n){for(var r=0,o=e.specifiers;r<o.length;r+=1){var i=o[r];n(i,t)}n(e.source,t,"Expression")};o.ImportSpecifier=o.ImportDefaultSpecifier=o.ImportNamespaceSpecifier=o.Identifier=o.Literal=ignore;o.TaggedTemplateExpression=function(e,t,n){n(e.tag,t,"Expression");n(e.quasi,t,"Expression")};o.ClassDeclaration=o.ClassExpression=function(e,t,n){return n(e,t,"Class")};o.Class=function(e,t,n){e.id&&n(e.id,t,"Pattern");e.superClass&&n(e.superClass,t,"Expression");n(e.body,t)};o.ClassBody=function(e,t,n){for(var r=0,o=e.body;r<o.length;r+=1){var i=o[r];n(i,t)}};o.MethodDefinition=o.Property=function(e,t,n){e.computed&&n(e.key,t,"Expression");n(e.value,t,"Expression")};t.simple=simple;t.ancestor=ancestor;t.recursive=recursive;t.full=full;t.fullAncestor=fullAncestor;t.findNodeAt=findNodeAt;t.findNodeAround=findNodeAround;t.findNodeAfter=findNodeAfter;t.findNodeBefore=findNodeBefore;t.make=make;t.base=o;Object.defineProperty(t,"__esModule",{value:true})}));const n=t.simple,r=t.ancestor,o=t.recursive,i=t.full,a=t.fullAncestor,s=t.findNodeAt,u=t.findNodeAround,f=t.findNodeAfter,p=t.findNodeBefore,l=t.make,d=t.base,m=t.__esModule;export default t;export{m as __esModule,r as ancestor,d as base,f as findNodeAfter,u as findNodeAround,s as findNodeAt,p as findNodeBefore,i as full,a as fullAncestor,l as make,o as recursive,n as simple};

