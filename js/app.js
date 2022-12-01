$(function () {
  let showButton = $(".align-icon");
  showButton.click(function () {
    let logo = $(".navbar .navbar-brand");
    logo.toggleClass("activeLogo");
    let menu = $("#my-custom-nav ul ");
    menu.toggleClass("activeMenu");
  });
  // slick slider for services
  $(".services-slider").slick(
    {
      slidesToShow :3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            
          }
        },
      ]      
    }
  );
  // slick slider for portfolio
  $(".portfolioSlider").slick(
    {
      slidesToShow :4,
    arrows :false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          
        }
      },
    ]
    }

  )  
  // slick for blog
  $(".blogSlider").slick(
    {
      slidesToShow:3,
      centerMode: true,
      centerPadding: "0px",
      prevArrow: ".blogleftarrow",
      nextArrow: ".blogrightarrow"
    }
  )
  // slick for testimonial items
  $(".testimonialTextSlide").slick(
    {
      arrows:true,
    }
  )

});
