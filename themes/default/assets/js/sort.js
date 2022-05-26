const sortButtons = [...document.querySelectorAll(".flatSortBy")];

if(sortButtons){

    function sortItems(sortBy, order = 'asc'){

        var $people = $('#flatList'),
        $peopleli = $people.children('.flatItem');
    
    
        $peopleli.sort(function(a,b){
            var an = a.getAttribute(`data-${sortBy}`),
                bn = b.getAttribute(`data-${sortBy}`);
        
            switch(order){
                case 'desc':

                    if(an < bn) {
                        return 1;
                    }
                    if(an > bn) {
                        return -1;
                    }

                    break;
                case 'asc':

                    if(an > bn) {
                        return 1;
                    }
                    if(an < bn) {
                        return -1;
                    }

                    break;
                default:
                    return 0;
            }




        });
        
        $peopleli.detach().appendTo($people);

    }


    sortButtons.forEach(function(items){
        items.addEventListener("click", function(e){
            const sortBy = e.target.dataset.sortby;
            const order = e.target.dataset.order;

            sortItems(sortBy, order);


            sortButtons.forEach(function(button) {
                button.classList.remove("active");
                button.dataset.order = "asc";
            })
            items.classList.add("active");

            if(order == 'asc'){
                e.target.dataset.order = "desc";
            }else if(order == 'desc'){
                e.target.dataset.order = "asc";
            }

        })
    });

}


