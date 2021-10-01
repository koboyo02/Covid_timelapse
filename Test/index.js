/*Variable appelant les div de mes fichiers*/
var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map_image a')
var links = map.querySelectorAll('.map_list a')


if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function(callback) {
        [].forEach.call(this, callback)
    }
}

var activeArea = function(id) {

    map.querySelectorAll('.is-active').forEach(function(item) {
        item.classList.remove('is-active')
    })
    if (id !== undefined) {
        document.querySelector('#FRN-' + id).classList.add('is-active')
        document.querySelector('#L-' + id).classList.add('is-active')
    }
}

paths.forEach(function(path) {
    path.addEventListener('mouseenter', function(e) {
        var id = this.id.replace('L-', '')
        activeArea(id)
    })
})

links.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        var id = this.id.replace('FRN-', '')
        activeArea(id)
    })
})

map.addEventListener('mouseover', function() {
    activeArea()
})