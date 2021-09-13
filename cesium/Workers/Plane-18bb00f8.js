define(["exports","./Matrix2-ccd5b911","./RuntimeError-346a3079","./when-4bbc8319","./ComponentDatatype-93750d1a"],function(n,r,e,i,a){"use strict";function s(n,e){this.normal=r.Cartesian3.clone(n),this.distance=e}s.fromPointNormal=function(n,e,a){n=-r.Cartesian3.dot(e,n);return i.defined(a)?(r.Cartesian3.clone(e,a.normal),a.distance=n,a):new s(e,n)};var t=new r.Cartesian3;s.fromCartesian4=function(n,e){var a=r.Cartesian3.fromCartesian4(n,t),n=n.w;return i.defined(e)?(r.Cartesian3.clone(a,e.normal),e.distance=n,e):new s(a,n)},s.getPointDistance=function(n,e){return r.Cartesian3.dot(n.normal,e)+n.distance};var o=new r.Cartesian3;s.projectPointOntoPlane=function(n,e,a){i.defined(a)||(a=new r.Cartesian3);var t=s.getPointDistance(n,e),t=r.Cartesian3.multiplyByScalar(n.normal,t,o);return r.Cartesian3.subtract(e,t,a)};var c=new r.Matrix4,l=new r.Cartesian4,C=new r.Cartesian3;s.transform=function(n,e,a){var t=n.normal,n=n.distance,e=r.Matrix4.inverseTranspose(e,c),n=r.Cartesian4.fromElements(t.x,t.y,t.z,n,l),n=r.Matrix4.multiplyByVector(e,n,n),e=r.Cartesian3.fromCartesian4(n,C);return n=r.Cartesian4.divideByScalar(n,r.Cartesian3.magnitude(e),n),s.fromCartesian4(n,a)},s.clone=function(n,e){return i.defined(e)?(r.Cartesian3.clone(n.normal,e.normal),e.distance=n.distance,e):new s(n.normal,n.distance)},s.equals=function(n,e){return n.distance===e.distance&&r.Cartesian3.equals(n.normal,e.normal)},s.ORIGIN_XY_PLANE=Object.freeze(new s(r.Cartesian3.UNIT_Z,0)),s.ORIGIN_YZ_PLANE=Object.freeze(new s(r.Cartesian3.UNIT_X,0)),s.ORIGIN_ZX_PLANE=Object.freeze(new s(r.Cartesian3.UNIT_Y,0)),n.Plane=s});
