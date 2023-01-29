$(document).ready(function(){

    console.log('Document is Ready')

    //  getting the date using Date() object and converting it to a string
    let date = new Date()
    let current_date = date.toDateString()

    //  display the date on the HTML page using JQUERY and JS
    $('#date').text('Date : ' + current_date)

    
    let review = ""
    let input_data = ""
    let product = ""
    let emotion = ""
    let emoji_url = ""

    //  making a function for AJAX request
    function ajax_request(api_url , input_data){

        $.ajax({

            // type of request
            type : 'POST',

            // url
            url : api_url,

            //  JSON data
            data : JSON.stringify(input_data),

            //  datatype of expected response
            dataType : 'json',

            //  content type
            contentType : 'application/json',

            //  success method
            success : function(result)
            {
                //  extract the sentiment and emoji path
                emotion = result.sentiment
                emoji_url = result.path

                //  update the emoticon and sentiment accordingly
                if (product  ==  'Smartphone'){
                    $('#m_emoji').attr('src' , emoji_url)
                    $('#m_emotion').text(emotion)
                    $('#m_emoji').show()
                    $('#m_emotion').show()
                }

                else if (product  ==  'Digital Camera'){
                    $('#c_emoji').attr('src' , emoji_url)
                    $('#c_emotion').text(emotion)
                    $('#c_emoji').show()
                    $('#c_emotion').show()
                }

                else if (product  ==  'Headphones'){
                    $('#h_emoji').attr('src' , emoji_url)
                    $('#h_emotion').text(emotion)
                    $('#h_emoji').show()
                    $('#h_emotion').show()
                }

                else if (product  ==  'Video Games'){
                    $('#v_emoji').attr('src' , emoji_url)
                    $('#v_emotion').text(emotion)
                    $('#v_emoji').show()
                    $('#v_emotion').show()
                }
            },

            //  error method
            error : function(result)
            {
                console.log(result)
            }

        })

        console.log('ajax request sent')
        
    }


    //  check if Submit button under 'smartphone' is clicked and get the review accordingly
   


})

    