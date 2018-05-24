window.onload = init('paginator',null);



function init(ulClass, pagesData) {
    var paginatorContainer = getPaginatorContainer();
    paginatorContainer.textContent = '';
    paginatorContainer.appendChild(buildPaginator(ulClass, pagesData, null));
    paginatorContainer.onclick = null;
}

function getPaginatorContainer() {
    var paginatorContainer = document.getElementById('paginator-container');
    return paginatorContainer;
}

function buildPaginator(ulClass, pagesData, action) {
    // var paginatorDiv = document.createElement('div');
    // paginatorDiv.className = paginatorClass;

    if (pagesData == null) {
        pagesData = {url: "#", currentPage: 1, totalRecords: 2, rowsPerPage: 5, maxPages: 1};
    }

    var ul = document.createElement('ul');
    ul.className = ulClass;

    var junction = '';
    if (pagesData.url.indexOf('?') > -1) {
        junction = '&';x
    } else {
        junction = '?';
    }

    var disableClass = 'disable';



    var firstURL = this.hasPreviousPage(pagesData.currentPage) ? pagesData.url + junction + "page=1" : null;
    var previousURL = this.hasPreviousPage(pagesData.currentPage) ? pagesData.url + junction + "page=" + (pagesData.currentPage - 1) : null;
    var nextURL = this.hasNextPage(pagesData.currentPage, pagesData.maxPages) ? pagesData.url + junction + "page=" + (pagesData.currentPage + 1) : null;
    var lastURL = this.hasNextPage(pagesData.currentPage, pagesData.maxPages) ? pagesData.url + junction + "page=" + pagesData.maxPages : null;

    ul.appendChild(createSimpleLi('First', firstURL != null ? null : disableClass, firstURL != null ? function(){action(firstURL)} : null));
    ul.appendChild(createSimpleLi('Previous', previousURL != null ? null : disableClass, previousURL != null ? function(){action(previousURL)} : null));

    // // TODO: Show currentPage and some other pages...
    // // if (pagesData.currentPage === 1) {
    //
    //     // TODO: Validate the currentPage and minus the current page
    //     var maxPagesToShow = 0;
    //     if (pagesData.maxPages > 5) {
    //         maxPagesToShow = 5;
    //     } else {
    //         maxPagesToShow = pagesData.maxPages;
    //     }
    //
    //     // TODO: Validate if the maxPagesToShow is positive or better...
    //     // TODO: minus the current page and added to the negatives pages
    //     for (var page = 1; page < maxPagesToShow + 1; page++) {
    //         var pageClass = '';
    //         if (page === pagesData.currentPage) {
    //             pageClass = 'selected'
    //         }
    //         var pageURL = pagesData.url + junction + "page=" + page;
    //
    //         ul.appendChild(createSimpleLi(page, pageClass, function(){action(pageURL)}));
    //     }
    // // }

    ul.appendChild(createSimpleLi(pagesData.currentPage + ' from ' + pagesData.maxPages, 'paginator-resume', null));

    ul.appendChild(createSimpleLi('Next', nextURL != null ? null : disableClass, nextURL != null ? function(){action(nextURL)} : null));
    ul.appendChild(createSimpleLi('Last', lastURL != null ? null : disableClass, lastURL != null ? function(){action(lastURL)} : null));

    // paginatorDiv.appendChild(ul);

    // return paginatorDiv;
    return ul;
}

function hasPreviousPage(currentPage) {
    return currentPage > 1;
}

function hasNextPage(currentPage, maxPages) {
    return currentPage < maxPages;
}