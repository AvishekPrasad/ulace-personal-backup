
$(document).ready(function(){
    let main_container_ele = $(".pdp-color-swatch-list");
    let swatch_container_height = document.querySelector(".pdp-color-swatch-list .list-prod").offsetHeight;
    let rows_tobe_shown = $(".pdp-color-swatch-list").data("variant_columns_number");
    let numberof_row_counter = 1;
    main_container_ele.css("height",swatch_container_height);
    let main_container_height = main_container_ele.height();
    if( numberof_row_counter == 1 ){
        $(".see_less_colors").css("display","none");  
        $(".see_more_colors").addClass("btn_center_alignment");
    }
    $(document).on("click",".see_more_colors", function(){
        if( numberof_row_counter < rows_tobe_shown ){
            main_container_height = main_container_height + swatch_container_height;
            main_container_ele.css("height", main_container_height );
            numberof_row_counter++;
            if( numberof_row_counter == rows_tobe_shown){
                $(".see_more_colors").css("display","none");
                $(".see_less_colors").css("margin-left","0");
            } else if(numberof_row_counter > 1 && numberof_row_counter < rows_tobe_shown ){
                $(".see_less_colors").css("margin-left","auto");
                $(".see_more_colors").removeClass("btn_center_alignment");
            } else if ( numberof_row_counter == 1 ){
                $(".see_less_colors").css("display","none");  
                $(".see_more_colors").addClass("btn_center_alignment");
                $(".see_less_colors").css("margin-left","auto");
            }
            if( numberof_row_counter > 1 ){
                $(".see_less_colors").css("display","inline-block");
            }
        }
    });
    $(document).on("click",".see_less_colors", function(){
        if( numberof_row_counter > 1 ){
            main_container_height = main_container_height - swatch_container_height;
            main_container_ele.css("height", main_container_height );
            numberof_row_counter--;
            if( numberof_row_counter == 1 ){
                $(".see_less_colors").css("display","none");
            }
            if( numberof_row_counter < rows_tobe_shown ){
                $(".see_more_colors").css("display","inline-block");
                $(".see_less_colors").css("margin-left","auto");
            }
        }
    });


    // Add to cart button
    

})