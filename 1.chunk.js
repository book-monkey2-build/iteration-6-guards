webpackJsonp([1,5],{

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_delay_directive__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_routing_module__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_list_book_list_component__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_list_item_book_list_item_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_details_book_details_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_isbn_pipe__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_zoom_directive__ = __webpack_require__(681);
/* harmony export (binding) */ __webpack_require__.d(exports, "BookModule", function() { return BookModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BookModule = (function () {
    function BookModule() {
    }
    BookModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__book_routing_module__["a" /* BookRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__book_list_item_book_list_item_component__["a" /* BookListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__book_details_book_details_component__["a" /* BookDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_isbn_pipe__["a" /* IsbnPipe */],
                __WEBPACK_IMPORTED_MODULE_8__shared_zoom_directive__["a" /* ZoomDirective */],
                __WEBPACK_IMPORTED_MODULE_0__shared_delay_directive__["a" /* DelayDirective */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BookModule);
    return BookModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book.module.js.map

/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail__ = __webpack_require__(660);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Book; });
/* unused harmony reexport Thumbnail */

var Book = (function () {
    function Book(isbn, title, authors, published, subtitle, rating, thumbnails, description) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.subtitle = subtitle;
        this.rating = rating;
        this.thumbnails = thumbnails;
        this.description = description;
    }
    Book.empty = function () {
        return new Book('', '', [''], new Date(), '', 0, [{ url: '', title: '' }], '');
    };
    return Book;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book.js.map

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export Thumbnail */
var Thumbnail = (function () {
    function Thumbnail(url, title) {
        this.url = url;
        this.title = title;
    }
    return Thumbnail;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/thumbnail.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_book__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailsComponent = (function () {
    function BookDetailsComponent(bs, router, route) {
        this.bs = bs;
        this.router = router;
        this.route = route;
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book = __WEBPACK_IMPORTED_MODULE_2__shared_book__["a" /* Book */].empty();
        var params = this.route.snapshot.params;
        this.bs.getSingle(params['isbn'])
            .subscribe(function (b) { return _this.book = b; });
    };
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent.prototype.removeBook = function () {
        var _this = this;
        if (confirm('Buch wirklich löschen?')) {
            this.bs.remove(this.book.isbn)
                .subscribe(function (res) { return _this.router.navigate(['../'], { relativeTo: _this.route }); });
        }
    };
    BookDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-details',
            template: __webpack_require__(685)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], BookDetailsComponent);
    return BookDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-details.component.js.map

/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent(bs) {
        this.bs = bs;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.booksOb = this.bs.getAll();
    };
    BookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-list',
            template: __webpack_require__(687)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object])
    ], BookListComponent);
    return BookListComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-list.component.js.map

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(650);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListItemComponent = (function () {
    function BookListItemComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === 'function' && _a) || Object)
    ], BookListItemComponent.prototype, "book", void 0);
    BookListItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'a.bm-book-list-item',
            template: __webpack_require__(686)
        }), 
        __metadata('design:paramtypes', [])
    ], BookListItemComponent);
    return BookListItemComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-list-item.component.js.map

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_list_book_list_component__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_details_book_details_component__ = __webpack_require__(667);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__book_list_book_list_component__["a" /* BookListComponent */]
    },
    {
        path: ':isbn',
        component: __WEBPACK_IMPORTED_MODULE_3__book_details_book_details_component__["a" /* BookDetailsComponent */]
    }
];
var BookRoutingModule = (function () {
    function BookRoutingModule() {
    }
    BookRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], BookRoutingModule);
    return BookRoutingModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-routing.module.js.map

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DelayDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DelayDirective = (function () {
    function DelayDirective(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    DelayDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.viewContainerRef.createEmbeddedView(_this.templateRef);
        }, this.bmDelay);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DelayDirective.prototype, "bmDelay", void 0);
    DelayDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[bmDelay]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object])
    ], DelayDirective);
    return DelayDirective;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/delay.directive.js.map

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IsbnPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IsbnPipe = (function () {
    function IsbnPipe() {
    }
    IsbnPipe.prototype.transform = function (value, addPrefix) {
        if (!value || value.length !== 10 && value.length !== 13) {
            return null;
        }
        var prefix = '';
        if (addPrefix) {
            prefix = (value.length === 10) ? 'ISBN-10: ' : 'ISBN-13: ';
        }
        if (value.length === 10) {
            return prefix + value;
        }
        else {
            return "" + prefix + value.substr(0, 3) + "-" + value.substr(3);
        }
    };
    IsbnPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'isbn'
        }), 
        __metadata('design:paramtypes', [])
    ], IsbnPipe);
    return IsbnPipe;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/isbn-pipe.js.map

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ZoomDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZoomDirective = (function () {
    function ZoomDirective() {
    }
    ZoomDirective.prototype.onMouseEnter = function () {
        this.isZoomed = true;
    };
    ZoomDirective.prototype.onMouseLeave = function () {
        this.isZoomed = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.small'), 
        __metadata('design:type', Boolean)
    ], ZoomDirective.prototype, "isZoomed", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ZoomDirective.prototype, "onMouseEnter", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ZoomDirective.prototype, "onMouseLeave", null);
    ZoomDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[bmZoom]' }), 
        __metadata('design:paramtypes', [])
    ], ZoomDirective);
    return ZoomDirective;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/zoom.directive.js.map

/***/ },

/***/ 685:
/***/ function(module, exports) {

module.exports = "<div class=\"ui grid\" *ngIf=\"book\">\n  <div class=\"four wide column\">\n    <img class=\"ui large image\" [src]=\"book?.thumbnails && book?.thumbnails[0].url\">\n  </div>\n  <div class=\"twelve wide column\">\n    <h1 class=\"ui header\">{{ book?.title }}</h1>\n    <h3 class=\"ui header\">{{ book?.subtitle }}</h3>\n    <div class=\"ui divider\"></div>\n    <div class=\"ui grid\">\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Autoren</h4>\n        <span *ngFor=\"let author of book?.authors; let l=last\">\n          {{ author }}<span *ngIf=\"!l\">, </span>\n        </span>\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">ISBN</h4>\n        {{ book?.isbn | isbn:true }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Erschienen</h4>\n        {{ book?.published }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Rating</h4>\n        <span *ngFor=\"let r of getRating(book?.rating); let i = index\">\n          <i class=\"yellow star icon\" *bmDelay=\"500 + i * 200\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"sixteen wide column\">\n    <h3 class=\"ui header\">Beschreibung</h3>\n    {{ book?.description }}\n  </div>\n  <div class=\"sixteen wide column\">\n    <div class=\"ui small images\">\n      <img *ngFor=\"let thumbnail of book?.thumbnails\" [src]=\"thumbnail.url\">\n    </div>\n  </div>\n</div>\n\n<button class=\"ui tiny red labeled icon button\"\n        (click)=\"removeBook()\">\n  <i class=\"remove icon\"></i> Buch löschen\n</button>\n<a class=\"ui tiny yellow labeled icon button\"\n        [routerLink]=\"['../../admin', book?.isbn]\">\n  <i class=\"write icon\"></i> Buch bearbeiten\n</a>\n"

/***/ },

/***/ 686:
/***/ function(module, exports) {

module.exports = "<img class=\"ui tiny image\"\n     *ngIf=\"book.thumbnails\"\n     [src]=\"book.thumbnails[0].url\"\n     bmZoom>\n<div class=\"content\">\n  <div class=\"header\">{{ book?.title }}</div>\n  <div class=\"description\"> {{ book?.subtitle }} </div>\n  <div class=\"metadata\">\n    <span *ngFor=\"let author of book.authors; let l=last\">\n      {{ author }}<span *ngIf=\"!l\">, </span>\n    </span>\n  </div>\n  <div class=\"extra\">{{ book?.isbn | isbn:true }}</div>\n</div>\n"

/***/ },

/***/ 687:
/***/ function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <a class=\"bm-book-list-item item\"\n      *ngFor=\"let b of booksOb | async\"\n      [book]=\"b\"\n      [routerLink]=\"b.isbn\"></a>\n</div>\n"

/***/ }

});
//# sourceMappingURL=1.bundle.map