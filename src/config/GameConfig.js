/** Shared game data and initial state. */

export const LINES = {
    "rain_monsoon": { speaker: "narrator", or: "ମୌସୁମୀ ବର୍ଷା ଆରମ୍ଭ! ରାସ୍ତା ଖସଡ଼ା ହୋଇପାରେ, ସାବଧାନରେ ଗାଡ଼ି ଚଲାନ୍ତୁ।", hi: "मानसून बारिश शुरू! सड़कें फिसलनी हो सकती हैं, सावधानी से चलाएं।", en: "Monsoon rains have begun! The roads may be slippery, drive carefully." },
    "announcer": { speaker: "announcer", or: "ଓଡ଼ିଶାର ରାଜଧାନୀ ଭୁବନେଶ୍ୱରରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ। ବାରମୁଣ୍ଡା ବସ୍ ଟର୍ମିନାଲ୍ରେ ରଘୁଙ୍କ ଦହିବରା-ଆଳୁଦମ୍ ବାସ୍ନା ଆସୁଛି!", hi: "ओडिशा की राजधानी भुवनेश्वर में आपका स्वागत है। बारामुंडा बस टर्मिनल पर रघु के दहीबड़ा-आलूदम की खुशबू आ रही है!", en: "Welcome to Bhubaneswar, the Temple Capital of Odisha! Raghu's Dahibara-Aloodum aroma fills the Baramunda bus terminal!" },
    "babu_arrival": { speaker: "babu", or: "ଆହା! ଶେଷରେ ଭୁବନେଶ୍ୱର ପହଞ୍ଚିଗଲି। ପେଟରେ ଭୋକ ହେଲାଣି, ଆଗେ ଗରମ ଦହିବରା-ଆଳୁଦମ୍ ଖାଇବି, ତା'ପରେ ଅଟୋ କିମ୍ବା ସ୍କୁଟିରେ ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ ବାହାରିବି।", hi: "आहा! आख़िरकार भुवनेश्वर पहुँच गया। भूख लगी है, पहले गरमा-गरम दहीबड़ा-आलूदम खाऊंगा, फिर ऑटो या स्कूटी से मास्टर कैंटीन निकलूंगा।", en: "Aha! Finally arrived in Bhubaneswar. I'm starving! First I'll taste piping hot Dahibara-Aloodum, then ride an auto or scooty to Master Canteen!" },
    "dahibara_raghu": { speaker: "dahibara", or: "ଆସନ୍ତୁ ବାବୁ! ଆମ ବାରମୁଣ୍ଡା ସ୍ପେଶାଲ୍ ଦହିବରା-ଆଳୁଦମ୍ ଖାଇବେ? ଦହି ଖଟା-ମିଠା, ଝୋଳ ତତଲା-ରାଗ, ଉପରେ ପିଆଜ-ଧନିଆ-ସେଓ୍ୱ! ₹୨୦ ପ୍ଲେଟ୍!", hi: "आइए बाबू! हमारे बारामुंडा का प्रसिद्ध दहीबड़ा-आलूदम खाइए! दही खट्टा-मीठा, तरी मसालेदार, ऊपर से प्याज-धनिया-सेव! ₹20 प्लेट!", en: "Welcome Babu! Try our Baramunda special Dahibara-Aloodum! Sweet-tangy dahi, sizzling spicy gravy, topped with onions, coriander and sev! ₹20 a plate!" },
    "dahibara_spicy": { speaker: "babu", or: "ଗୋଟେ ପ୍ଲେଟ୍ ଦହିବରା ଟିକେ ରାଗ ଆଳୁଦମ୍ ଆଉ ଦହି-ପାଣି ଗ୍ଲାସେ ଦିଅନ୍ତୁ!", hi: "एक प्लेट दहीबड़ा थोड़ा तीखा आलूदम और एक गिलास दही-पानी दीजिए!", en: "Give me one plate of Dahibara with extra spicy Aloodum and a tall glass of cold Dahi-Pani!" },
    "dahibara_bargain": { speaker: "babu", or: "ଭାଇ କଲେଜ ପିଲା, ₹୧୫ ରେ ଗୋଟେ ପ୍ଲେଟ୍ ଦିଅନ୍ତୁ!", hi: "भाई कॉलेज का छात्र हूँ, ₹15 में एक प्लेट दीजिए!", en: "Bhai, I'm a college student, please give me a plate for ₹15!" },
    "dahibara_pani_only": { speaker: "babu", or: "ଭାଇ ଖାଲି ଥଣ୍ଡା ମସଲା ଦହି-ପାଣି ଗ୍ଲାସେ ଦିଅନ୍ତୁ! (₹୫)", hi: "भाई सिर्फ ठंडा मसाला दही-पानी का एक गिलास दीजिए! (₹5)", en: "Bhai, just give me a glass of refreshing spiced Dahi-Pani! (₹5)" },
    "dahibara_yum": { speaker: "babu", or: "ଆହାଃ! କି ଅମୃତ ସ୍ୱାଦ! କଟକ-ଭୁବନେଶ୍ୱର ଦହିବରା-ଆଳୁଦମ୍‌ର କୌଣସି ତୁଳନା ନାହିଁ! (ଶକ୍ତି ଓ +୨୫% ସ୍ପୀଡ୍ ବୁଷ୍ଟ ମିଳିଲା)", hi: "आहा! क्या लाजवाब स्वाद है! कटक-भुवनेश्वर के दहीबड़ा-आलूदम का कोई मुकाबला नहीं! (ऊर्जा व +25% स्पीड बूस्ट मिला)", en: "Ah! Divine taste! Nothing matches Cuttack-Bhubaneswar Dahibara-Aloodum! (Energy & +25% Speed Boost received)" },
    "cow_warning": { speaker: "auto", or: "ଆରେ ଦେଖି ଚଳାନ୍ତୁ! ଗୋ-ମାତା ରାସ୍ତା ମଝିରେ ବସିଛନ୍ତି!", hi: "अरे देख के चलाइए! गोमाता रास्ते के बीच में बैठी हैं!", en: "Hey, drive carefully! Sacred Go-Mata is resting right in the middle of the road!" },
    "babu_cow": { speaker: "babu", or: "ନମସ୍କାର ଗୋମାତା! ଆମକୁ ରାସ୍ତା ଛାଡ଼ିଦିଅନ୍ତୁ!", hi: "नमस्ते गोमाता! हमें रास्ता दे दीजिए!", en: "Namaskar Go-Mata! Please grant us safe passage!" },
    "cow_pranam": { speaker: "babu", or: "ଜୟ ଗୋ-ମାତା! ଭୁବନେଶ୍ୱର ଯାତ୍ରା ନିର୍ବିଘ୍ନ ଓ ସୁରକ୍ଷିତ ହେଉ। (+୧୦୦ XP ଆଶୀର୍ବାଦ)", hi: "जय गोमाता! भुवनेश्वर यात्रा सुरक्षित और शुभ हो। (+100 XP आशीर्वाद)", en: "Jai Go-Mata! May our journey through Bhubaneswar be peaceful and blessed. (+100 XP Blessing)" },
    "auto_q1": { speaker: "auto", or: "ବାବୁ! କୁଆଡ଼େ ଯିବେ?", hi: "बाबू! कहाँ जाना है?", en: "Babu! Where do you want to go?" },
    "babu_mc": { speaker: "babu", or: "ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ ଯିବି ଭାଇ, କେତେ ନେବେ?", hi: "मास्टर कैंटीन जाना है भाई, कितना लोगे?", en: "Going to Master Canteen brother, how much will you charge?" },
    "auto_offer_50": { speaker: "auto", or: "ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ ଯିବେ? ₹୫୦ ଲାଗିବ ବାବୁ! ପେଟ୍ରୋଲ ₹୧୦୬ ହେଲାଣି!", hi: "मास्टर कैंटीन जाना है? ₹50 लगेगा बाबू! पेट्रोल ₹106 हो गया है!", en: "Going to Master Canteen? That's ₹50, sir! Petrol is ₹106 now!" },
    "babu_counter_30": { speaker: "babu", or: "ଆରେ କାଳିଆ ଭାଇ! ପ୍ରତିଦିନ ₹୩୦ ଚାଲେ, ଆମେ ଲୋକାଲ ପିଲା!", hi: "अरे कालिया भाई! रोज़ ₹30 लगता है, हम लोकल हैं!", en: "Arrey Kalia Bhai! It's ₹30 everyday, we are local passengers!" },
    "auto_counter_40": { speaker: "auto", or: "ଆରେ ବାବୁ, ତମେ ଛାତ୍ର ଜଣାପଡୁଛ, ଆଚ୍ଛା ₹୪୦ ଦିଅ, ଆସ ବସନ୍ତୁ!", hi: "अरे बाबू, छात्र लगते हो, अच्छा ₹40 दो, बैठो!", en: "Arrey Babu, you look like a student. Okay, pay ₹40 and hop in!" },
    "babu_demand_meter": { speaker: "babu", or: "ମିଟର ଚଲାନ୍ତୁ ଭାଇ! ସରକାରୀ ନିୟମ ଅନୁସାରେ ଯିବି!", hi: "मीटर चाइए भाई! सरकारी नियम से चलेंगे!", en: "Please turn on the meter! I'll travel strictly by official government rates!" },
    "auto_meter_excuse": { speaker: "auto", or: "ଆରେ ଭାଇ, ମିଟରରେ ଗଲେ ₹୬୦ ଉଠିବ! ରାଜମହଲ ଜାମ୍ ଅଛି! ₹୪୦ ଫିକ୍ସ କରନ୍ତୁ!", hi: "अरे भाई, मीटर से ₹60 आएगा! राजमहल में जाम है! ₹40 तय करो!", en: "Arrey bhai, by meter it'll reach ₹60! Raj Mahal has traffic jam! Settle on ₹40 fixed!" },
    "babu_bluff_mobus": { speaker: "babu", or: "ଠିକ୍ ଅଛି ଭାଇ, ମୁଁ 'ମୋ ବସ୍' (Mo Bus) ରେ ₹୨୦ ରେ ଚାଲିଯିବି!", hi: "ठीक है भाई, मैं 'मो बस' (Mo Bus) से ₹20 में चला जाऊँगा!", en: "Alright brother, I'll take the air-conditioned Mo Bus for just ₹20!" },
    "auto_call_back": { speaker: "auto", or: "ଆରେ ଆରେ ରୁହ ବାବୁ! ଖରାରେ କାହିଁକି ବସ୍ ଖୋଜିବ? ଆସ ₹୩୫ ରେ ଛାଡ଼ିଦେବି!", hi: "अरे अरे रुको बाबू! धूप में बस क्यों ढूँढोगे? आओ ₹35 में छोड़ दूंगा!", en: "Wait, wait Babu! Why search for buses in this blazing sun? Come, I'll drop you for ₹35!" },
    "babu_pay_full": { speaker: "babu", or: "ଠିକ୍ ଅଛି, ଏଇ ନିଅନ୍ତୁ ₹୫୦!", hi: "ठीक है, ये लीजिए ₹50!", en: "Alright brother, here is ₹50!" },
    "auto_offer": { speaker: "auto", or: "୫୦ ଟଙ୍କା ହେବ ବାବୁ!", hi: "50 रुपये लगेगा बाबू!", en: "That will be 50 rupees, Babu!" },
    "babu_negotiate": { speaker: "babu", or: "ଆରେ ୪୦ ଟଙ୍କାରେ ଚାଲନ୍ତୁ ନା ଭାଇ!", hi: "अरे 40 रुपये में चलिए ना भाई!", en: "Arrey, please come for 40 rupees brother!" },
    "auto_accept": { speaker: "auto", or: "ଠିକ୍ ଅଛି ବାବୁ, ବସନ୍ତୁ! କିନ୍ତୁ ଆଜି ଟ୍ରାଫିକ୍ ବହୁତ!", hi: "ठीक है बाबू, बैठिए! लेकिन आज ट्रैफिक बहुत है!", en: "Alright Babu, hop in! But traffic is heavy today!" },
    "auto_lingaraj": { speaker: "auto", or: "ବାବୁ, ଆଗେ ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ କାମ ସାରନ୍ତୁ, ପରେ ଲିଙ୍ଗରାଜ ଦର୍ଶନ କରାଇଦେବି!", hi: "बाबू, पहले मास्टर कैंटीन का काम निपटा लीजिए, फिर लिंगराज दर्शन करा दूँगा!", en: "Babu, first finish your work at Master Canteen, later I'll take you for Lingaraj Temple darshan!" },
    "auto_tea": { speaker: "auto", or: "ପ୍ରଥମେ ଗରମ ଚା' ପିଇନିଅନ୍ତୁ, ସାମ୍ନାରେ ଦୋକାନ ଅଛି!", hi: "पहले गरमा-गरम चाय पी लीजिए, सामने दुकान है!", en: "First let's have a hot cup of tea, there's a stall right ahead!" },
    "tutorial": { speaker: "announcer", or: "W/A/S/D କିମ୍ବା ତୀର ଚିହ୍ନରେ ଗାଡ଼ି ଚଲାନ୍ତୁ। ସ୍ପେସ୍ ମାରିଲେ ବ୍ରେକ୍ ଲାଗିବ।", hi: "W/A/S/D या एरो कीज़ से गाड़ी चलाएं। स्पेस से ब्रेक लगेगा।", en: "Drive with W/A/S/D or Arrow keys. Press Spacebar for brake." },
    "bike_overtake": { speaker: "bike", or: "ହେ ବାବୁ! ସାଇଡ୍ କର, ଜଲ୍ଦି ଅଛି!", hi: "ए बाबू! साइड करो, जल्दी है!", en: "Hey Babu! Move aside, I'm in a hurry!" },
    "babu_bike": { speaker: "babu", or: "ଆରେ ଭାଇ, ଏତେ ଜଲ୍ଦି କ'ଣ! ସମ୍ଭାଳିକି ଚଳାଅ!", hi: "अरे भाई, इतनी जल्दी क्या है! संभलकर चलाओ!", en: "Arrey brother, what's the rush! Drive safely!" },
    "scooty_ride": { speaker: "babu", or: "ବାଃ! ୧୧୦cc ହୋଣ୍ଡା ଏକ୍ଟିଭା ସ୍କୁଟି! ଏଥିରେ ଭୁବନେଶ୍ୱର ରାସ୍ତାରେ ବୁଲିବା କି ଆନନ୍ଦ!", hi: "वाह! 110cc होंडा एक्टिवा स्कूटी! इससे भुवनेश्वर की सड़कों पर घूमने का मज़ा ही कुछ और है!", en: "Wow! 110cc Honda Activa scooty! Cruising the streets of Bhubaneswar feels so exhilarating!" },
    "tea_seller": { speaker: "tea", or: "ଆସନ୍ତୁ ବାବୁ! ଧବଳେଶ୍ୱର ସ୍ପେଶାଲ୍ ଅଦା ଚା' ଅଛି!", hi: "आइए बाबू! धबलेश्वर स्पेशल अदरक चाय है!", en: "Welcome Babu! We have special Dhabaleswar ginger tea!" },
    "babu_tea_no": { speaker: "babu", or: "ଏବେ ନୁହେଁ ଭାଇ, ଫେରିବା ବେଳେ ପିଇବି!", hi: "अभी नहीं भाई, लौटते समय पिएंगे!", en: "Not now brother, I'll drink on my way back!" },
    "babu_tea_yes": { speaker: "babu", or: "ଗୋଟେ କୁଲ୍ଲଡ଼ ଚା' ଦିଅନ୍ତୁ ଭାଇ! ମନ ତାଜା ହୋଇଗଲା!", hi: "एक कुल्हड़ चाय दीजिए भाई! मन तरोताज़ा हो गया!", en: "Give me one kulhad chai brother! So refreshing!" },
    "ram_mandir_darshan": { speaker: "babu", or: "ଜୟ ଶ୍ରୀରାମ! ଜନପଥର ଏଇ ଭବ୍ୟ ରାମ ମନ୍ଦିର ଚିତ୍ତାକର୍ଷକ!", hi: "जय श्रीराम! जनपथ का यह भव्य राम मंदिर अति सुंदर है!", en: "Jai Shri Ram! This magnificent Ram Mandir on Janpath is truly breathtaking!" },
    "priest_blessing": { speaker: "priest", or: "କଲ୍ୟାଣ ହେଉ ବାବୁ! ପ୍ରଭୁ ଶ୍ରୀରାମ ତୁମର ମନସ୍କାମନା ପୂର୍ଣ୍ଣ କରନ୍ତୁ!", hi: "कल्याण हो बाबू! प्रभु श्रीराम तुम्हारी मनोकामना पूर्ण करें!", en: "May you be blessed Babu! May Lord Shri Ram fulfill all your noble wishes!" },
    "flyover_kalia": { speaker: "auto", or: "ଏଇଟା ରାଜମହଲ ଫ୍ଲାଏଓଭର ବାବୁ, ଏଠାରୁ ଟ୍ରାଫିକ୍ ଉପରେ ସିଧା ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍!", hi: "ये राजमहल फ्लाईओवर है बाबू, यहाँ से सीधे मास्टर कैंटीन!", en: "This is Raj Mahal flyover Babu, from here we glide straight over traffic into Master Canteen!" },
    "flyover_babu": { speaker: "babu", or: "କାଳିଆ ଭାଇ, କ'ଣ ସ୍ପୀଡ୍ ନେଉଛ ଗାଡ଼ିକୁ!", hi: "कालिया भाई, क्या गज़ब स्पीड पकड़ी है गाड़ी ने!", en: "Kalia Bhai, what incredible speed this auto has picked up!" },
    "drop_driver": { speaker: "auto", or: "ବାସ୍ ବାବୁ, ଏଇଠି। ଆଗ ରାସ୍ତା ବନ୍ଦ ଅଛି। ୬୦ ଟଙ୍କା ଦିଅନ୍ତୁ।", hi: "बस बाबू, यहीं तक। आगे रास्ता बंद है। 60 रुपये दीजिए।", en: "That's it Babu, right here. Road ahead is closed. Give me 60 rupees." },
    "babu_argue": { speaker: "babu", or: "ଆରେ ଭାଇ, ମ୍ୟାପ୍ ଦେଖନ୍ତୁ! ରାସ୍ତା ତ ଖୋଲା ଅଛି। ୪୦ ଟଙ୍କା କଥା ହୋଇଥିଲା।", hi: "अरे भाई, मैप देखिए! रास्ता तो खुला है। 40 रुपये की बात हुई थी।", en: "Arrey brother, check the GPS map! The road is wide open. We agreed on 40 rupees." },
    "driver_giveup": { speaker: "auto", or: "ଆଚ୍ଛା ଆଚ୍ଛା, ବସନ୍ତୁ, ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ ଘୋଡ଼ା ପାଖରେ ଓହ୍ଲାଇଦେବି।", hi: "अच्छा अच्छा, बैठिए, मास्टर कैंटीन घोड़े के पास छोड़ देता हूँ।", en: "Alright alright, sit, I'll drop you right beside the Master Canteen Konark War Horse statue." },
    "babu_walk": { speaker: "babu", or: "ଠିକ୍ ଅଛି, ଏଇ ନିଅନ୍ତୁ ୩୦ ଟଙ୍କା। ବାକି ମୁଁ ଚାଲିକି ଯିବି।", hi: "ठीक है, ये लीजिए 30 रुपये। बाकी मैं पैदल चला जाऊँगा।", en: "Alright, take 30 rupees. I'll walk the rest of the way." },
    "babu_payextra": { speaker: "babu", or: "ଠିକ୍ ଅଛି, ୬୦ ନିଅନ୍ତୁ।", hi: "ठीक है, 60 ले लीजिए।", en: "Alright, take 60 rupees." },
    "driver_arrived": { speaker: "auto", or: "ନିଅନ୍ତୁ ବାବୁ, କୋଣାର୍କ ଯୁଦ୍ଧ-ଘୋଡ଼ା ସ୍ମାରକ ପାଖରେ ପହଞ୍ଚିଗଲୁ।", hi: "लीजिए बाबू, कोणार्क युद्ध-अश्व स्मारक के पास पहुँच गए।", en: "Here we are Babu, right beside the Konark War Stallion monument." },
    "babu_thanks": { speaker: "babu", or: "ଧନ୍ୟବାଦ କାଳିଆ ଭାଇ! ବହୁତ ବଢ଼ିଆ ଚଳାଇଲ!", hi: "धन्यवाद कालिया भाई! बहुत बढ़िया चलाया!", en: "Thank you Kalia Bhai! You drove wonderfully!" },
    "driver_bye": { speaker: "auto", or: "ଆଉ କେବେ ଆସିବେ! ଭୁବନେଶ୍ୱର ବୁଲାଇଦେବି!", hi: "फिर कभी आइएगा! पूरा भुवनेश्वर घुमा दूँगा!", en: "Come visit again! I'll show you all of Bhubaneswar!" },
    "broker_hello": { speaker: "broker", or: "ନମସ୍କାର ବାବୁ! ନୂଆ ଆସିଛନ୍ତି କି? ଶସ୍ତାରେ ୧-BHK ରୁମ୍ ଦରକାର କି?", hi: "नमस्ते बाबू! नए आए हो? सस्ते में 1-BHK रूम चाहिए क्या?", en: "Namaskar Babu! Are you new here? Looking for an affordable 1-BHK room?" },
    "broker_scam": { speaker: "broker", or: "ରୁମ୍ ଭଡ଼ା ମାତ୍ର ₹୨୫୦୦! କିନ୍ତୁ ଆଜି ହିଁ ₹୨୦୦୦ ଆଡଭାନ୍ସ ଦେବାକୁ ପଡ଼ିବ!", hi: "रूम का किराया सिर्फ ₹2500! लेकिन आज ही ₹2000 एडवांस देना होगा!", en: "Room rent is only ₹2,500! But you must pay ₹2,000 cash advance today!" },
    "broker_room": { speaker: "broker", or: "ଆସନ୍ତୁ ବାବୁ, ଏଇ ରୁମ୍ ଦେଖନ୍ତୁ! ବାଥରୁମ୍ ଆଟାଚ୍ଡ୍, ଫ୍ୟାନ୍ ଚାଲୁଛି, ମାତ୍ର ₹୨୫୦୦!", hi: "आइए बाबू, ये कमरा देखिए! बाथरूम अटैच्ड, पंखा चल रहा है, सिर्फ ₹2500!", en: "Come Babu, see this room! Attached bathroom, working fan, only ₹2,500!" },
    "broker_noagree": { speaker: "broker", or: "ଏଗ୍ରିମେଣ୍ଟ ପରେ ହେବ ବାବୁ, ଏଠି ବିଶ୍ୱାସରେ କାମ ଚାଲେ!", hi: "एग्रीमेंट बाद में होगा बाबू, यहाँ विश्वास पर काम चलता है!", en: "Agreement will be made later Babu, here everything runs on mutual trust!" },
    "neighbour_warn": { speaker: "neighbour", or: "ବାବୁ! ଏ ଦଲାଲ କଥାରେ ପଡ଼ନି! ଏ ଘର ମାଲିକ କଲିକତାରେ ରହନ୍ତି, ଏ ଠକ ଲୋକ!", hi: "बाबू! इस दलाल के चक्कर में मत पड़ो! इस घर के मालिक कोलकाता में रहते हैं, यह धोखेबाज़ है!", en: "Babu! Don't fall for this broker's trap! The real owner lives in Kolkata, he is a fraudster!" },
    "police_catch": { speaker: "police", or: "ରଘୁ ଦଲାଲ! ତୋତେ ଖୋଜୁଥିଲୁ! ଚାଲ ଥାନାକୁ! ବାବୁ, ଆପଣ ବହୁତ ଚାଲାକ୍!", hi: "रघु दलाल! तुम्हें ही ढूँढ रहे थे! चलो थाने! बाबू, आप बहुत होशियार निकले!", en: "Raghu broker! We were looking for you! Off to the station! Babu, you are very sharp!" },
    "owner_real": { speaker: "owner", or: "ଧନ୍ୟବାଦ ପୁଅ! ଏ ଠକ ମୋ ଘରକୁ ନିଜର କହି ଲୋକଙ୍କୁ ଲୁଟୁଥିଲା!", hi: "धन्यवाद बेटा! यह धोखेबाज़ मेरे घर को अपना बताकर लोगों को लूट रहा था!", en: "Thank you son! This crook was claiming my property as his own and cheating tenants!" },
    "babu_happy": { speaker: "babu", or: "ଜୟ ଜଗନ୍ନାଥ! ସ୍କାମ୍‌ରୁ ବଞ୍ଚିଗଲି, ଏବେ ଏକାମ୍ର ହାଟ କଳା ଗ୍ରାମ ବୁଲିବାକୁ ଯିବି!", hi: "जय जगन्नाथ! स्कैम से बच गया, अब एकाम्र हाट कला ग्राम घूमने जाऊँगा!", en: "Jai Jagannath! Saved from the rental scam, now I'll tour the Ekamra Haat craft village!" },
    "artisan_greet": { speaker: "artisan", or: "ନମସ୍କାର ବାବୁ! ଆମ ରଘୁରାଜପୁର ହସ୍ତଶିଳ୍ପ ଓ ପଟ୍ଟଚିତ୍ର ଦେଖନ୍ତୁ!", hi: "नमस्ते बाबू! हमारे रघुराजपुर के हस्तशिल्प और पट्टचित्र देखिए!", en: "Namaskar Babu! Behold our Raghurajpur handicrafts and authentic Pattachitra art!" },
    "artisan_award": { speaker: "artisan", or: "ଆପଣଙ୍କ ସଚେତନତା ଓ ଓଡ଼ିଶା ପ୍ରେମ ଦେଖି ଖୁସି ଲାଗିଲା। ଏଇ ସ୍ୱର୍ଣ୍ଣ ପଟ୍ଟଚିତ୍ର ଉପହାର ଗ୍ରହଣ କରନ୍ତୁ!", hi: "आपकी समझदारी और ओडिशा प्रेम देखकर खुशी हुई। यह स्वर्ण पट्टचित्र उपहार स्वीकार करें!", en: "Seeing your cultural awareness and love for Odisha brings joy. Please accept this Golden Pattachitra award!" },
    "dhauli_peace": { speaker: "guide", or: "ଏଇଟା ଧଉଳି ଶାନ୍ତି ସ୍ତୂପ। ଏଠାରେ ସମ୍ରାଟ ଅଶୋକ ଚଣ୍ଡାଶୋକରୁ ଧର୍ମାଶୋକ ହୋଇଥିଲେ।", hi: "यह धउलि शांति स्तूप है। यहाँ सम्राट अशोक ने चंडाशोक से धर्माशोक का रूप लिया था।", en: "This is Dhauli Peace Pagoda. Here Emperor Ashoka transformed from fierce warrior Chandashoka to Dharmashoka." },
    "puri_teaser_announcer": { speaker: "announcer", or: "ଅଭିନନ୍ଦନ! ଆପଣ ଭୁବନେଶ୍ୱର ସଫଳତାର ସହ ପୂର୍ଣ୍ଣ କଲେ। ଆଗାମୀ ସ୍ତର: ଜାତୀୟ ରାଜପଥ-୩୧୬ ଦେଇ ପୁରୀ ଶ୍ରୀମନ୍ଦିର ଓ ସମୁଦ୍ର କୂଳ!", hi: "बधाई! आपने भुवनेश्वर सफलतापूर्वक पूरा कर लिया। आगामी स्तर: राष्ट्रीय राजमार्ग-316 से पुरी श्रीमंदिर और समुद्र तट!", en: "Congratulations! You successfully completed Bhubaneswar. Next Level: NH-316 to Puri Jagannath Temple & Sea Beach!" },
    "pg_aunty_rules": { speaker: "aunty", or: "ଶୁଣ ବାବୁ! ଶ୍ରୀ ସାଇ ପିଜିର ନିୟମ ଏକଦମ୍ କଡ଼ା! ରାତି ୯ଟାରେ ମେନ୍ ଗେଟ୍ ବନ୍ଦ! ବାହାର ଖାଇବା ମନା, ସାଙ୍ଗ-ସାଥୀ ଆସିବା ମନା, ଆଉ ରବିବାର ପତଳା ପାଣିଆ ଡାଲି ଛଡ଼ା କିଛି ମିଳିବନି!", hi: "सुनो बाबू! श्री साई पीजी के नियम बहुत सख्त हैं! रात 9:00 बजे मेन गेट बंद! बाहर का खाना मना, दोस्त लाना मना, और रविवार को सिर्फ पतली दाल मिलेगी!", en: "Listen Babu! Sri Sai PG has ironclad rules! Main gate locks at 9:00 PM sharp! No outside food, no guests, and Sundays only watery dal!" },
    "pg_uncle_meter": { speaker: "uncle", or: "ଆରେ ବାବୁ, ତମ ରୁମ୍ର ବିଜୁଳି ବିଲ୍ ଏ ମାସ ₹୩,୫୦୦ ଆସିଛି! କାରଣ ଆମ ଫ୍ୟାନ୍ ୨୨୦ ଭୋଲ୍ଟ ହାଇ-ପାୱାର୍‌ରେ ଘୁରୁଛି!", hi: "अरे बाबू, तुम्हारे कमरे का बिजली बिल इस महीने ₹3,500 आया है! क्योंकि हमारा पंखा 220 वोल्ट हाई-पावर पर चलता है!", en: "Arrey Babu, your room electric bill this month is ₹3,500! Because our ceiling fan spins on 220V high power!" },
    "babu_pg_aayein": { speaker: "babu", or: "ଅଙ୍କଲ୍! ଆୟେଁ?! ଛୋଟ ଗୋଟେ ଏଲ୍‌ଇଡି ବଲ୍ବ ଆଉ ପଙ୍ଖା ଚାଲିଲେ ₹୩,୫୦୦ ବିଲ୍?! ଆରେ ଏଇ ମିଟର ଉପରେ ଏଡ଼େ ବଡ଼ ନାଲି ଚୁମ୍ବକ (ମ୍ୟାଗ୍ନେଟ୍) କାହିଁକି ଲାଗିଛି?!", hi: "अंकल! आयेँ?! एक छोटे से बल्ब और पंखे का बिल ₹3,500?! अरे इस मीटर पर इतना बड़ा लाल चुंबक (मैग्नेट) क्यों चिपका रखा है?!", en: "Uncle! Aayein?! A ₹3,500 bill for a tiny LED bulb and a fan?! Arrey, why is this giant red magnet stuck on the electricity meter?!" },
    "aunty_drama": { speaker: "aunty", or: "କ'ଣ କହିଲୁ?! ମୋ ନିୟମ ଉପରେ କଥା କହୁଛୁ?! ପିଜି ଛାଡ଼ି ଏବେ ପଳାଅ!", hi: "क्या कहा?! हमारे नियमों पर सवाल उठाते हो?! तुरंत पीजी खाली करो!", en: "What did you say?! Questioning our hostel rules?! Pack your bags and leave right now!" },
    "uncle_busted": { speaker: "uncle", or: "ଆରେ ବାବୁ, ପୋଲିସ୍ ଡାକନି! ମୁଁ ଚୁମ୍ବକ ବାହାର କରିଦେଉଛି, ବିଲ୍ ₹୨୦୦ କରିଦେବି!", hi: "अरे बाबू, पुलिस मत बुलाओ! मैं चुंबक हटा लेता हूँ, बिल सिर्फ ₹200 कर दूँगा!", en: "Arrey Babu, don't call the police! I'll take off the magnet, I'll make the bill just ₹200!" },
    "tushar_kiit": { speaker: "student", or: "ଆରେ ଭାଇ! ମୁଁ KIIT ଇଞ୍ଜିନିୟରିଂ ଛାତ୍ର ତୁଷାର। ଶହୀଦ ନଗର ପିଜି ଆଣ୍ଟିଙ୍କୁ ସବୁ ପିଲା ଡରନ୍ତି! ସ୍କୁଟି ଧରି ସହର ବୁଲନ୍ତୁ, ଖୁବ୍ ମଜା ଲାଗିବ!", hi: "अरे भाई! मैं KIIT इंजीनियरिंग का छात्र तुषार हूँ। शहीद नगर पीजी वाली आंटी से सब डरते हैं! स्कूटी लेकर शहर घूमो, बहुत मज़ा आएगा!", en: "Hey bro! I'm Tushar, engineering student at KIIT. Every student dreads the Saheed Nagar PG aunty! Take your scooty and tour the city!" },
    "panda_sir": { speaker: "police", or: "ଜୟ ହିନ୍ଦ୍ ବାବୁ! ରାଜମହଲ ଛକରେ ହେଲମେଟ୍ ପିନ୍ଧି ସ୍କୁଟି ୩୫ କି.ମି./ଘଣ୍ଟାରେ ସୁରକ୍ଷିତ ଭାବେ ଚଳାନ୍ତୁ। ଭଲ ଚାଳକ ହେଲେ ଚାଲାଣ କଟିବନି!", hi: "जय हिन्द बाबू! राजमहल चौक पर हेलमेट पहनकर स्कूटी 35 किमी/घंटे से सुरक्षित चलाएं। नियमों का पालन करेंगे तो कभी चालान नहीं कटेगा!", en: "Jai Hind Babu! Wear your helmet at Raj Mahal square and ride safe at 35 km/h. Good drivers never get fined!" },
    "khandagiri_scene": { speaker: "guide", or: "ନମସ୍କାର! ଏଇଟା ହେଉଛି ଖଣ୍ଡଗିରି ଓ ଉଦୟଗିରି ରାଣୀ ଗୁମ୍ଫା। ଦ୍ୱିତୀୟ ଶତାବ୍ଦୀ ଖ୍ରୀଷ୍ଟପୂର୍ବର ଖାରବେଳଙ୍କ ଶିଳାଲେଖ ଓ ବାନର ସେନା ଏଠାକାର ଶୋଭା ବଢ଼ାନ୍ତି।", hi: "नमस्ते! यह खंडागिरि और उदयगिरि की रानी गुम्फा है। ईसा पूर्व दूसरी सदी के सम्राट खारवेल के शिलालेख और वानर सेना यहाँ की शान हैं।", en: "Namaste! These are the ancient Khandagiri & Udayagiri Queen's caves. 2nd-century BC Emperor Kharavela rock inscriptions and monkey troops grace this hill!" },
    // ══════════════════════════════════════════════════════════════
    // SCENE 15-26: NEW CUTSCENE LINES
    // ══════════════════════════════════════════════════════════════

    // Scene 15: PG Meter Scam
    "pg_meter_babu": { speaker: "babu", or: "ଅଙ୍କଲ୍! ଆୟେଁ?! ଏଇ ମିଟର ଉପରେ ଏଡ଼େ ବଡ଼ ନାଲି ଚୁମ୍ବକ କାହିଁକି ଲାଗିଛି?!", hi: "अंकल! आयें?! इस मीटर पर इतना बड़ा लाल चुंबक क्यों लगा है?!", en: "Uncle! Aayein?! Why is this giant red magnet stuck on the meter?!" },
    "pg_meter_uncle": { speaker: "uncle", or: "ଆରେ ବାବୁ, ପୋଲିସ୍ ଡାକନି! ମୁଁ ଚୁମ୍ବକ ବାହାର କରିଦେଉଛି, ବିଲ୍ ₹୨୦୦ କରିଦେବି!", hi: "अरे बाबू, पुलिस मत बुलाओ! मैं चुंबक हटा देता हूँ, बिल ₹200 कर दूँगा!", en: "Arrey Babu, don't call the police! I'll remove the magnet, I'll make the bill just ₹200!" },

    // Scene 16: PG Curfew Lockout
    "pg_curfew_aunty": { speaker: "aunty", or: "ରାତି ୯ଟା ୫ ମିନିଟ୍! ଗେଟ୍ ବନ୍ଦ! କାଲି ସକାଳେ ଆସ!", hi: "रात 9 बजे 5 मिनट! गेट बंद! कल सुबह आना!", en: "9:05 PM! Gate closed! Come back tomorrow morning!" },
    "pg_curfew_babu": { speaker: "babu", or: "ଆଣ୍ଟି! ମୋର ସ୍କୁଟି ଚାବି ଭିତରେ ଅଛି! ଦିନେ ରାତି ବାହାରେ କିପରି ରହିବି?", hi: "आंटी! मेरी स्कूटी की चाबी अंदर है! पूरी रात बाहर कैसे रहूँ?", en: "Aunty! My scooty keys are inside! How can I stay out all night?" },

    // Scene 17: Auto Haggle War
    "auto_war_1": { speaker: "auto", or: "ମୁଁ ₹୫୦ କହିଲି! ଏ କାଳିଆ ମିଛ କହୁଛି, ସେ ₹୬୦ ନେଉଛି!", hi: "मैंने ₹50 कहा! ये कालिया झूठ बोल रहा है, वो ₹60 ले रहा है!", en: "I said ₹50! This Kalia is lying, he's charging ₹60!" },
    "auto_war_2": { speaker: "auto", or: "ଆରେ ବାବୁ! ସେ ପୁରୁଣା ଗାଡ଼ି! ମୋର ନୂଆ ଅଟୋ ₹୪୫ ରେ ନେବ!", hi: "अरे बाबू! उसकी पुरानी गाड़ी है! मेरा नया ऑटो ₹45 में ले जाऊँगा!", en: "Hey Babu! His auto is old! My newer auto will take you for ₹45!" },

    // Scene 18: Rasagola Heist
    "rasagola_heist_thief": { speaker: "auto", or: "ଏ ରସଗୋଲା ବକ୍ସ ମୋର! ମୁଁ ଆଗେ ଧରିଥିଲି!", hi: "ये रसगुल्ला का डिब्बा मेरा है! मैंने पहले पकड़ा था!", en: "This rasagola box is mine! I grabbed it first!" },
    "rasagola_heist_babu": { speaker: "babu", or: "ଆରେ! ଏହା ପାହାଳ ମନ୍ଦିରର ପ୍ରସାଦ! ଚୋରି କରୁଛ କି?!", hi: "अरे! ये पाहाला मंदिर का प्रसाद है! चोरी कर रहे हो?!", en: "Hey! This is Pahala temple prasad! Are you stealing it?!" },
    "heist_call_priest": { speaker: "babu", or: "ପୂଜକ ମହାଶୟ! ଏ ଚୋର ପାହାଳ ମନ୍ଦିରର ପବିତ୍ର ରସଗୋଲା ଡବା ଲୁଟି ନେଉଛି!", hi: "पुजारी जी! यह चोर पाहाला मंदिर का पवित्र रसगुल्ला का डिब्बा लूट रहा है!", en: "Revered Priest! This thief is snatching the sacred Pahala rasagola offering!" },
    "heist_tackle_thief": { speaker: "babu", or: "ଅଟକ! ମୋ ସାମ୍ନାରେ ପାହାଳ ରସଗୋଲା ଚୋରି?! ଏଇ ନିଅ ଡବା, ଆଉ କେବେ ଏଠିକି ଆସିବନି!", hi: "रुको! मेरे सामने पाहाला रसगुल्ला चोरी?! ये लो डिब्बा, अब दोबारा यहाँ मत दिखना!", en: "Halt! Stealing Pahala rasagolas right in front of me?! Drop the box and surrender!" },
    "heist_buy_peace": { speaker: "babu", or: "ଭୋକ ଲାଗିଛି ତ ମାଗି ନିଅ ଭାଇ! ମୁଁ ₹୧୦୦ ଦେଇ ତୁମ ପାଇଁ ଗୋଟିଏ ଡବା କିଣି ଦେଉଛି, ଚୋରି କରନି!", hi: "भूख लगी है तो माँग लो भाई! मैं ₹100 देकर तुम्हारे लिए डिब्बा खरीद देता हूँ, चोरी मत करो!", en: "If you're hungry just ask, brother! I'll pay ₹100 for your box—don't resort to theft!" },

    // Scene 19: Cow Chakra Jam
    "cow_jam_driver": { speaker: "auto", or: "ଆରେ! ତିନି ଗୋମାତା ଏକାଠି ବସିଛନ୍ତି! ଆଜି ଅଫିସ୍ ଯିବା ବନ୍ଦ!", hi: "अरे! तीन गोमाता एक साथ बैठी हैं! आज ऑफिस जाना बंद!", en: "Hey! Three sacred cows sitting together! No office today!" },
    "cow_jam_babu": { speaker: "babu", or: "ଧୈର୍ଯ୍ୟ ଧରନ୍ତୁ ଭାଇ! ଗୋମାତାଙ୍କୁ ପ୍ରଣାମ କରି ରାସ୍ତା ମାଗିବା!", hi: "धैर्य रखें भाई! गोमाता को प्रणाम करके रास्ता माँगेंगे!", en: "Have patience brother! We'll offer pranam and ask the cows for passage!" },

    // Scene 20: Pattachitra Protest
    "pattachitra_artisan": { speaker: "artisan", or: "ଆମ ପଟ୍ଟଚିତ୍ର ବିକ୍ରି ହେଉନାହିଁ! ପ୍ଲାଷ୍ଟିକ୍ ସାମଗ୍ରୀ ବଜାର ଦଖଲ କରିଛି!", hi: "हमारे पट्टचित्र नहीं बिक रहे! प्लास्टिक सामान ने बाजार पर कब्जा कर लिया है!", en: "Our Pattachitra isn't selling! Plastic goods have taken over the market!" },
    "pattachitra_babu": { speaker: "babu", or: "ମୁଁ ଆପଣଙ୍କ ପାଇଁ ଏକ ଅନଲାଇନ୍ ପେଜ୍ ତିଆରି କରିବି! ସହର ସାରା ଲୋକ କିଣିବେ!", hi: "मैं आपके लिए एक ऑनलाइन पेज बनाऊँगा! पूरे शहर के लोग खरीदेंगे!", en: "I'll create an online page for you! People across the city will buy!" },

    // Scene 21: Monkey Camera
    "monkey_snatches": { speaker: "guide", or: "ଆରେ! ବାନର ତୁମର କ୍ୟାମେରା ନେଇଗଲା! ଖଣ୍ଡଗିରିରେ ଏହା ସାଧାରଣ!", hi: "अरे! बंदर तुम्हारा कैमरा ले गया! खंडगिरि में ये आम बात है!", en: "Hey! The monkey took your camera! This is normal at Khandagiri!" },
    "monkey_babu": { speaker: "babu", or: "ଆରେ ବାନର ରାଜା! ଫେରାଇଦିଅ! ମୁଁ ତୁମକୁ କଦଳୀ ଦେବି!", hi: "अरे बंदर राजा! वापस दो! मैं तुम्हें केला दूँगा!", en: "Hey monkey king! Give it back! I'll give you a banana!" },

    // Scene 22: Flooded Underpass
    "flood_driver": { speaker: "auto", or: "ଆରେ! ରାସ୍ତା ପାଣିରେ ବୁଡ଼ିଗଲା! ଆମର ଅଟୋ ବୁଡ଼ିଯିବ!", hi: "अरे! सड़क पानी में डूब गई! हमारा ऑटो डूब जाएगा!", en: "Hey! The road is flooded! Our auto will drown!" },
    "flood_babu": { speaker: "babu", or: "ପଛକୁ ଫେରନ୍ତୁ ଭାଇ! ଜଳସେତୁ ଦେଇ ଯିବା!", hi: "पीछे मुड़ो भाई! कॉजवे से जाएंगे!", en: "Turn back brother! We'll go via the causeway!" },

    // Scene 23: Chai Tapri Gossip
    "chai_gossip_1": { speaker: "tea", or: "ଶୁଣିଛ କି? ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ରେ ନୂଆ କ୍ୟାଫେ ଖୁଲିଛି! କଫି ₹୨୦୦!", hi: "सुना है? मास्टर कैंटीन में नया कैफे खुला है! कॉफी ₹200!", en: "Heard? A new cafe opened at Master Canteen! Coffee is ₹200!" },
    "chai_gossip_2": { speaker: "babu", or: "₹୨୦୦?! ଆମ ଧବଳେଶ୍ୱର ଚା' ₹୧୦! ବେଙ୍ଗାଲୁରୁ ଦର ଭୁବନେଶ୍ୱରକୁ ଆସିଗଲା!", hi: "₹200?! हमारी धबलेश्वर चाय ₹10! बेंगलुरु रेट भुवनेश्वर आ गए!", en: "₹200?! Our Dhabaleswar chai is ₹10! Bangalore prices have come to Bhubaneswar!" },

    // Scene 24: Traffic Challan Standoff
    "challan_panda": { speaker: "police", or: "ହେଲମେଟ୍ ନାହିଁ! ଚାଲାଣ ₹୫୦୦! କିମ୍ବା ୩୦ ମିନିଟ୍ ଟ୍ରାଫିକ୍ ଡ୍ୟୁଟି କର!", hi: "हेलमेट नहीं! चालान ₹500! या 30 मिनट ट्रैफिक ड्यूटी करो!", en: "No helmet! Fine is ₹500! Or do 30 minutes of traffic duty!" },
    "challan_babu": { speaker: "babu", or: "ସାର୍! ମୁଁ ଟ୍ରାଫିକ୍ ଡ୍ୟୁଟି କରିବି! ମୋତେ ଶିଖାନ୍ତୁ!", hi: "सर! मैं ट्रैफिक ड्यूटी करूँगा! मुझे सिखाइए!", en: "Sir! I'll do traffic duty! Teach me!" },

    // Scene 25: Wedding Sweets Emergency
    "wedding_mother": { speaker: "aunty", or: "ଆରେ! କାଲି ଝିଅର ବାହାଘର! ଆଜି ପାହାଳ ରସଗୋଲା ଆସିବା ଦରକାର!", hi: "अरे! कल बेटी की शादी! आज पाहाला रसगुल्ला आना चाहिए!", en: "Hey! My daughter's wedding is tomorrow! Pahala rasagola needs to arrive today!" },
    "wedding_babu": { speaker: "babu", or: "ଚିନ୍ତା କରନ୍ତୁ ନାହିଁ ଆଣ୍ଟି! ୩୦ ମିନିଟ୍ରେ ପହଞ୍ଚିବି!", hi: "चिंता मत करिए आंटी! 30 मिनट में पहुँचूँगा!", en: "Don't worry Aunty! I'll be there in 30 minutes!" },

    // Scene 26: Haunted Haveli
    "ghost_oldman": { speaker: "guide", or: "ଏହି ହାଭେଲିରେ ରାତି ୨ଟାରେ ଦୀପ ଜଳେ, କିନ୍ତୁ କେହି ନାହିଁ ଦେଖିଛି!", hi: "इस हवेली में रात 2 बजे दीपक जलता है, लेकिन किसी ने नहीं देखा!", en: "At 2 AM a lamp lights up in this haveli, but no one has seen who does it!" },
    "ghost_babu": { speaker: "babu", or: "ଚାଲନ୍ତୁ! ଆଜି ରାତି ଏଠି ରହି ସତ୍ୟ ଜାଣିବା!", hi: "चलो! आज रात यहीं रुककर सच जानेंगे!", en: "Let's go! Tonight we'll stay and find the truth!" },
    // ── INTERACTIVE SCENE CHOICE OUTCOMES ──
    "cow_jam_pranam_all": { speaker: "babu", or: "ଜୟ ଗୋମାତା! ଆପଣଙ୍କ ପବିତ୍ର ଆଶୀର୍ବାଦ ଆମ ସହିତ ରହୁ।", hi: "जय गोमाता! आपका पवित्र आशीर्वाद हमारे साथ रहे।", en: "Jai Go-Mata! May your sacred blessings guide our path." },
    "cow_jam_honk": { speaker: "babu", or: "ଆରେ ହଟିଯାଅ! ରାସ୍ତାରେ କାହିଁକି ବସିଛ?!", hi: "अरे हटो! रास्ते में क्यों बैठी हो?!", en: "Hey move aside! Why are you blocking the road?!" },
    "cow_jam_offroad": { speaker: "auto", or: "ଚାଲ ବାବୁ! ବାଲି ରାସ୍ତା ଦେଇ ବାହାରିଯିବା!", hi: "चलो बाबू! कच्चे रास्ते से निकल जाते हैं!", en: "Hold on Babu! We'll take the dirt detour!" },
    "cow_jam_wait": { speaker: "babu", or: "କିଛି ସମୟ ଅପେକ୍ଷା କରିବା, ଗୋମାତା ନିଜେ ଉଠିବେ।", hi: "थोड़ी देर इंतज़ार करते हैं, गोमाता खुद उठेंगी।", en: "Let's wait patiently, Go-Mata will move on her own." },

    "pattachitra_online": { speaker: "babu", or: "ଆପଣଙ୍କ ସୁନ୍ଦର ପଟ୍ଟଚିତ୍ର ସାରା ଦୁନିଆରେ ପ୍ରସିଦ୍ଧ ହେବ!", hi: "आपका सुंदर पट्टचित्र पूरी दुनिया में प्रसिद्ध होगा!", en: "Your exquisite Pattachitra will become world-famous online!" },
    "pattachitra_buy_art": { speaker: "babu", or: "ମୁଁ ଏହି ସ୍ୱର୍ଣ୍ଣ ପଟ୍ଟଚିତ୍ର କିଣିଲି! କଳାକାରଙ୍କ ସମ୍ମାନ ସର୍ବୋପରି।", hi: "मैंने यह स्वर्ण पट्टचित्र खरीदा! कलाकार का सम्मान सबसे ऊपर।", en: "I'll purchase this masterpiece! Preserving our heritage comes first." },
    "pattachitra_help_demo": { speaker: "babu", or: "ଆମେ ସମସ୍ତେ ଆପଣଙ୍କ ସହିତ ଅଛୁ! ହସ୍ତତନ୍ତ ବଞ୍ଚାଅ!", hi: "हम सब आपके साथ हैं! हथकरघा बचाओ!", en: "We stand united with traditional artisans! Save indigenous crafts!" },
    "pattachitra_ignore": { speaker: "babu", or: "କ୍ଷମା କରିବେ, ମୋତେ ଜରୁରୀ କାମରେ ଯିବାକୁ ହେବ।", hi: "माफ़ कीजिए, मुझे जरूरी काम से जाना है।", en: "Excuse me, I have urgent deliveries to make." },

    "monkey_banana": { speaker: "babu", or: "ଏଇ ନିଅ ମିଠା କଦଳୀ! କ୍ୟାମେରା ତଳେ ଥୋଇଦିଅ!", hi: "ये लो मीठा केला! कैमरा नीचे रख दो!", en: "Here's a ripe sweet banana! Put the camera down!" },
    "monkey_climb": { speaker: "babu", or: "ବାନର ରାଜା! ମୁଁ ନିଜେ ପଥର ଚଢ଼ି କ୍ୟାମେରା ନେଉଛି!", hi: "बंदर राजा! मैं खुद पत्थर चढ़कर कैमरा ले रहा हूँ!", en: "Monkey king! I'm scrambling up the rock ledge after you!" },
    "monkey_guide_help": { speaker: "guide", or: "ବାବୁ ଚିନ୍ତା କରନ୍ତୁ ନାହିଁ! ଏଇ ବାଉଁଶ ବାଡ଼ି ଦେଇ କ୍ୟାମେରା ଆଣିଦେଉଛି।", hi: "बाबू चिंता मत करो! इस बांस की छड़ी से कैमरा निकाल देता हूँ।", en: "Don't panic Babu! I know this troupe well, watch this trick." },
    "monkey_give_up": { speaker: "babu", or: "ହାୟ ରେ! ମୋ ନୂଆ କ୍ୟାମେରା ବାନର ହାତରେ ଗଲା!", hi: "हाय रे! मेरा नया कैमरा बंदर के हाथ चला गया!", en: "Alas! My camera is lost to the Khandagiri monkeys!" },

    "flood_push_auto": { speaker: "babu", or: "ଜୟ ଜଗନ୍ନାଥ! ବଳ ଲଗାଇ ଅଟୋକୁ ପାଣିରୁ ବାହାର କର!", hi: "जय जगन्नाथ! ज़ोर लगाकर ऑटो को पानी से निकालो!", en: "Jai Jagannath! Heave ho, push the auto out of the deluge!" },
    "flood_call_tow": { speaker: "babu", or: "ଟୋ ଭ୍ୟାନ୍ ଡାକନ୍ତୁ ଭାଇ, ଇଞ୍ଜିନ୍ରେ ପାଣି ପଶିଯାଇଛି!", hi: "टो वैन बुलाओ भाई, इंजन में पानी भर गया है!", en: "Call the breakdown tow-truck, the engine is flooded!" },
    "flood_swim": { speaker: "babu", or: "ପହଁରିକି ଯିବା! ଭୁବନେଶ୍ୱର ମୌସୁମୀରେ କିଛି ବି ଅସମ୍ଭବ ନୁହେଁ!", hi: "तैर कर जाएंगे! भुवनेश्वर के मानसून में कुछ भी असंभव नहीं!", en: "Swimming through! Nothing stops a determined Bhubaneswar courier!" },
    "flood_wait": { speaker: "auto", or: "ଗୋଟେ ଘଣ୍ଟା ଅପେକ୍ଷା କରନ୍ତୁ, ନଗର ନିଗମ ପାଣି ନିଷ୍କାସନ କରିବ।", hi: "एक घंटा इंतज़ार करो, नगर निगम पानी निकाल देगा।", en: "Let's wait it out, drainage pumps will clear the road soon." },

    "chai_boycott": { speaker: "babu", or: "ଠିକ୍ କହିଲ ଭାଇ! ₹୨୦୦ କଫି କୌଣସି ଓଡ଼ିଆ ପିଇବେନି!", hi: "सही कहा भाई! ₹200 की कॉफी कोई उड़िया नहीं पिएगा!", en: "Spot on brother! ₹200 fancy coffee can't beat our chai tapri!" },
    "chai_try_coffee": { speaker: "babu", or: "ଠିକ୍ ଅଛି, ଥରେ ଟେଷ୍ଟ କରି ଦେଖିବା କାଫେ କିପରି ହୋଇଛି!", hi: "ठीक है, एक बार टेस्ट करके देखते हैं कैसा कैफे है!", en: "Alright, let's taste this imported coffee once out of curiosity!" },
    "chai_promote": { speaker: "tea", or: "ଆମ ଧବଳେଶ୍ୱର ଅଦା-ଚା' ସବୁଠୁ ଉତ୍ତମ! ଆଉ ଗୋଟେ କପ୍ ନିଅନ୍ତୁ!", hi: "हमारी धबलेश्वर अदरक चाय सबसे उत्तम! एक कप और लीजिए!", en: "Our Dhabaleswar ginger tea reigns supreme! Have another hot cup!" },
    "chai_ignore": { speaker: "babu", or: "ଭାଇ, ଚା' ଟଙ୍କା ନିଅନ୍ତୁ, ମୋର କଲେଜ୍ ଡେଲିଭରୀ ଡେରି ହେଲାଣି!", hi: "भाई, चाय के पैसे लो, मुझे कॉलेज डिलीवरी में देर हो रही है!", en: "Here's the tea payment bhai, got to keep moving on deliveries!" },

    "challan_pay": { speaker: "police", or: "ଏଇ ନିଅନ୍ତୁ ସରକାରୀ ରସିଦ୍! ଆଗକୁ ସବୁବେଳେ ହେଲମେଟ୍ ପିନ୍ଧନ୍ତୁ!", hi: "ये लीजिए सरकारी रसीद! आगे से हमेशा हेलमेट पहनिए!", en: "Here is your official fine receipt! Always strap on your helmet!" },
    "challan_do_duty": { speaker: "babu", or: "ସାର୍! ମୁଁ ରାଜମହଲ ଛକରେ ସମସ୍ତ ଗାଡ଼ିକୁ ସୁରକ୍ଷିତ ମାର୍ଗଦର୍ଶନ କରୁଛି!", hi: "सर! मैं राजमहल चौक पर सभी गाड़ियों को सही रास्ता दिखा रहा हूँ!", en: "Reporting for traffic duty, Sir! Guiding Janpath commuters safely!" },
    "challan_bribe": { speaker: "police", or: "କ'ଣ କହିଲୁ?! ପୋଲିସ୍‌କୁ ଲାଞ୍ଚ?! ଆଇନ୍ ସଭିଙ୍କ ପାଇଁ ସମାନ!", hi: "क्या कहा?! पुलिस को रिश्वत?! कानून सबके लिए बराबर है!", en: "What?! Attempting to bribe the police?! Law is sacred in this city!" },
    "challan_escape": { speaker: "police", or: "ଅଟକ! ଆଗ ଛକରେ ସିସିଟିଭି ତୁମ ନମ୍ବର ପ୍ଲେଟ୍ କ୍ୟାମେରାରେ ଉଠାଇଛି!", hi: "रुको! आगे चौराहे पर सीसीटीवी ने तुम्हारी नंबर प्लेट पकड़ ली!", en: "Halt! High-speed ANPR cameras captured your number plate!" },

    "wedding_rush": { speaker: "babu", or: "ଚିନ୍ତା କରନ୍ତୁନି ଆଣ୍ଟି! ଫୁଲ୍ ଏକ୍ସିଲରେଟର୍ ଲଗାଇ ରସଗୋଲା ପହଞ୍ଚାଉଛି!", hi: "चिंता मत करो आंटी! फुल स्पीड में रसगुल्ला पहुँचा रहा हूँ!", en: "Full throttle! Fresh Pahala rasagolas will reach the mandap in time!" },
    "wedding_shortcut": { speaker: "babu", or: "କଟକ ପୁରୁଣା ମାର୍ଗ ଦେଇ ସର୍ଟକଟ୍ରେ ୨୦ ମିନିଟ୍ରେ ପହଞ୍ଚିବି!", hi: "कटक पुराने रास्ते से शॉर्टकट लेकर 20 मिनट में पहुँचूँगा!", en: "Taking the historic Old Cuttack bypass to beat all traffic!" },
    "wedding_promise": { speaker: "babu", or: "ଓଡ଼ିଆ ପୁଅର କଥା ଦେଲି! ବାହାଘର ଭୋଜିରେ କୌଣସି ଅଭାବ ରହିବନି!", hi: "ओडिशा के बेटे का वादा है! शादी की दावत में कोई कमी नहीं रहेगी!", en: "You have an Odia brother's word! The wedding feast will be a triumph!" },
    "wedding_decline": { speaker: "babu", or: "କ୍ଷମା କରିବେ ଆଣ୍ଟି, ଏତେ କମ୍ ସମୟରେ ପହଞ୍ଚିବା ଅସମ୍ଭବ।", hi: "माफ़ करिए आंटी, इतने कम समय में पहुँचना नामुमकिन है।", en: "Forgive me Aunty, rush hour traffic makes this impossible right now." },

    "ghost_investigate": { speaker: "babu", or: "ଭୟ କାହାକୁ?! ଟର୍ଚ୍ଚ ଧରି ଭୂତ ହାଭେଲିର ରହସ୍ୟ ଆଜି ହିଁ ଖୋଲିବି!", hi: "डर किसको?! टॉर्च लेकर भूत हवेली का रहस्य आज ही खोलूँगा!", en: "No fear! Armed with a torch, I'll uncover the truth of this haveli!" },
    "ghost_call_police": { speaker: "babu", or: "ପୋଲିସ୍ SI ପଣ୍ଡାଙ୍କୁ ଡାକିବା, ଏହା କୌଣସି ଚୋର ଗ୍ୟାଙ୍ଗର ଆଡ୍ଡା ହୋଇପାରେ!", hi: "पुलिस SI पांडा को बुलाते हैं, यह किसी चोर गिरोह का अड्डा हो सकता है!", en: "Alerting SI Panda — this could be an antique smuggling hideout!" },
    "ghost_bring_priest": { speaker: "priest", or: "ହରି ଓମ୍! ଶ୍ରୀ ଲିଙ୍ଗରାଜଙ୍କ ପବିତ୍ର ବେଲପତ୍ର ଓ ମନ୍ତ୍ରରେ ସବୁ ଅଶୁଭ ଦୂର ହେବ!", hi: "हरि ओम! श्री लिंगराज के पवित्र बेलपत्र और मंत्र से सब शुभ होगा!", en: "Hari Om! Holy Bilva leaves and sacred chants dispel all darkness!" },
    "ghost_run": { speaker: "babu", or: "ଓରେ ବାପା! ରାତି ୨ଟାରେ ଏଠି ରହିଲେ ପ୍ରାଣ ଚାଲିଯିବ!", hi: "अरे बाप रे! रात 2 बजे यहाँ रहे तो जान चली जाएगी!", en: "Run for your life! Midnight at Haunted Haveli is no joke!" }
  }

export const CHAPTERS = [
    {
      id: "chap1",
      num: "01",
      title: { or: "ଅଧ୍ୟାୟ ୧: ବାରମୁଣ୍ଡା ଆଗମନ, ଦହିବରା ଓ ଅଟୋ ଦରଦାମ୍", hi: "अध्याय 1: बारामुंडा आगमन, दहीबड़ा और ऑटो मोलभाव", en: "Chapter 1: Baramunda Arrival, Dahibara & Auto Bargain" },
      desc: { or: "ବାରମୁଣ୍ଡା ବସ୍ ଟର୍ମିନାଲ୍ରେ ରଘୁଙ୍କ ଦହିବରା-ଆଳୁଦମ୍ ଆସ୍ୱାଦନ କରନ୍ତୁ, କାଳିଆ ଭାଇଙ୍କ ସହ ଅଟୋ ଦରଦାମ୍ କରନ୍ତୁ ଏବଂ ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ।", hi: "बारामुंडा बस टर्मिनल पर रघु का दहीबड़ा-आलूदम चखें, कालिया भाई से ऑटो मोलभाव करें और मास्टर कैंटीन यात्रा शुरू करें।", en: "Taste Raghu's Dahibara-Aloodum at Baramunda Bus Terminal, negotiate auto fare with Kalia Bhai, and set off towards Master Canteen." },
      obj: { or: "ରଘୁଙ୍କ ଦହିବରା ଖାଆନ୍ତୁ ଓ କାଳିଆ ଭାଇଙ୍କ ସହ କଥା ହୁଅନ୍ତୁ", hi: "रघु का दहीबड़ा खाएं और कालिया भाई से मोलभाव करें", en: "Taste Raghu's Dahibara & negotiate fare with Kalia Bhai" },
      target: "driver",
      done: false
    },
    {
      id: "chap2",
      num: "02",
      title: { or: "ଅଧ୍ୟାୟ ୨: ଜନପଥ ଯାତ୍ରା, ଗୋ-ମାତା ପ୍ରଣାମ ଓ ରାମ ମନ୍ଦିର", hi: "अध्याय 2: जनपथ यात्रा, गोमाता प्रणाम और राम मंदिर", en: "Chapter 2: Janpath Cruise, Sacred Cow Pranam & Ram Mandir" },
      desc: { or: "ଜନପଥ ଦେଇ ସ୍କୁଟି କିମ୍ବା ଅଟୋ ଚଲାନ୍ତୁ, ରାସ୍ତା ମଝିରେ ବସିଥିବା ପବିତ୍ର ଗୋ-ମାତାଙ୍କୁ ପ୍ରଣାମ କରନ୍ତୁ, ଚା' ଖାଆନ୍ତୁ ଓ ରାମ ମନ୍ଦିର ଦର୍ଶନ କରନ୍ତୁ।", hi: "जनपथ पर स्कूटी या ऑटो चलाएं, रास्ते में बैठी पवित्र गोमाता को प्रणाम करें, चाय पिएं और राम मंदिर दर्शन करें।", en: "Drive down Janpath, offer respectful Pranam to the sacred cow on the road, take a cutting chai break, and ring the Ram Mandir prayer bell." },
      obj: { or: "ଜନପଥରେ ଗାଡ଼ି ଚଲାନ୍ତୁ, ଗାଈ ଓ ରାମ ମନ୍ଦିର ପାର କରନ୍ତୁ", hi: "जनपथ पर वाहन चलाएं, गाय और राम मंदिर पार करें", en: "Pranam Sacred Cow (+100 XP), avoid biker overtake & ring Ram Mandir bell" },
      target: "ramMandir",
      done: false
    },
    {
      id: "chap3",
      num: "03",
      title: { or: "ଅଧ୍ୟାୟ ୩: ରାଜମହଲ ଫ୍ଲାଏଓଭର ସ୍ପୀଡ୍ ରନ୍ ଓ ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍", hi: "अध्याय 3: राजमहल फ्लाईओवर स्पीड रन और मास्टर कैंटीन", en: "Chapter 3: Raj Mahal Flyover & Master Canteen Horse Monument" },
      desc: { or: "ରାଜମହଲ ଫ୍ଲାଏଓଭର ଉପରେ ସ୍କୁଟିକୁ ୩୫ କି.ମି. ସ୍ପୀଡ୍‌ରେ ଚଳାଇ ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ କୋଣାର୍କ ଯୁଦ୍ଧ-ଅଶ୍ୱ ସ୍ମାରକ ପାଖରେ ପହଞ୍ଚନ୍ତୁ।", hi: "राजमहल फ्लाईओवर पर स्कूटी को 35 किमी गति से चलाकर मास्टर कैंटीन कोणार्क युद्ध-अश्व स्मारक के पास पहुँचें।", en: "Climb the elevated Raj Mahal flyover, bypass traffic congestion, expose fake roadblock bluff, and reach the heroic Konark War Stallion." },
      obj: { or: "ରାଜମହଲ ଫ୍ଲାଏଓଭର ଦେଇ ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ ଯାଆନ୍ତୁ", hi: "राजमहल फ्लाईओवर पार कर मास्टर कैंटीन पहुँचें", en: "Climb Raj Mahal Flyover & reach Konark War Stallion at Master Canteen" },
      target: "canteen",
      done: false
    },
    {
      id: "chap4",
      num: "04",
      title: { or: "ଅଧ୍ୟାୟ ୪: ଶହୀଦ ନଗର ପିଜି ଓ ଓଲ୍ଡ ଟାଉନ୍ ରୁମ୍ ସ୍କାମ୍ ପର୍ଦ୍ଦାଫାଶ", hi: "अध्याय 4: शहीद नगर पीजी व ओल्ड टाउन रेंट स्कैम भंडाफोड़", en: "Chapter 4: Old Town PG & Rent Syndicate Mystery" },
      desc: { or: "ଶହୀଦ ନଗର କାନ୍ତା ଆଣ୍ଟିଙ୍କ ପିଜି କର୍ଫ୍ୟୁ ନିୟମ ଓ ବାବୁଲାଲ୍‌ଙ୍କ ଚୁମ୍ବକ ମିଟର ସ୍କାମ୍ ଧରନ୍ତୁ, ଏବଂ ଓଲ୍ଡ ଟାଉନ୍ ଦଲାଲ୍ ରଘୁକୁ ପୋଲିସ୍ ଦ୍ୱାରା ଗିରଫ କରାନ୍ତୁ।", hi: "शहीद नगर कांता आंटी के पीजी नियम व बाबूलाल के चुंबक मीटर स्कैम को पकड़ें, और ओल्ड टाउन दलाल रघु को पुलिस के हवाले करें।", en: "Inspect rental room in Old Town with broker Raghu, spot 3 red flags (no agreement, absent owner, cash pressure) and bust scam with Police PCR." },
      obj: { or: "ପିଜି ସ୍କାମ୍ ଓ ଦଲାଲ ରଘୁର ୩ଟି ରେଡ୍ ଫ୍ଲାଗ୍ ଧରନ୍ତୁ", hi: "पीजी स्कैम और दलाल रघु के 3 रेड फ्लैग्स पकड़ें", en: "Spot 3 red flags & recover genuine room keys with Police PCR assistance" },
      target: "rentHouse",
      done: false
    },
    {
      id: "chap5",
      num: "05",
      title: { or: "ଅଧ୍ୟାୟ ୫: ଏକାମ୍ର ହାଟ ପଟ୍ଟଚିତ୍ର ସମ୍ମାନ ଓ ଦହିବରା ସ୍ୱର୍ଣ୍ଣ ଯାତ୍ରା", hi: "अध्याय 5: एकाम्र हाट पट्टचित्र सम्मान व दहीबड़ा स्वर्ण यात्रा", en: "Chapter 5: Ekamra Haat Master Craftsman & Puri Highway" },
      desc: { or: "ଏକାମ୍ର ହାଟରେ ପଟ୍ଟଚିତ୍ର ଶିଳ୍ପୀ ମହାପାତ୍ରଙ୍କଠାରୁ ସ୍ୱର୍ଣ୍ଣ ସମ୍ମାନ ନିଅନ୍ତୁ ଏବଂ ଭୁବନେଶ୍ୱରର ୫ଟି ଯାକ ଦହିବରା ଷ୍ଟଲ୍ ଅନଲକ୍ କରନ୍ତୁ।", hi: "एकाम्र हाट में पट्टचित्र शिल्पी महापात्रा से स्वर्ण पदक पाएं और भुवनेश्वर के सभी 5 दहीबड़ा स्टॉल अनलॉक करें।", en: "Meet master craftsman at Ekamra Haat craft village, receive Golden Pattachitra award, visit Dhauli Peace Pagoda, and unlock the Puri Grand Highway." },
      obj: { or: "ଏକାମ୍ର ହାଟରେ ଶିଳ୍ପୀ ମହାପାତ୍ରଙ୍କୁ ସାକ୍ଷାତ କରନ୍ତୁ", hi: "एकाम्र हाट जाकर शिल्पी महापात्रा से मिलें", en: "Receive Golden Pattachitra at Ekamra Haat & cruise past Dhauli" },
      target: "ekamraHaat",
      done: false
    }
  ]

export const STATE_DEFAULTS = {
    screen: "title", // title, loading, cinematic, game, modal, complete
    lang: "en", // "en" | "or" | "hi" | "all"
    coins: 200,
    xp: 0,
    blessing: "None",
    mode: "walk", // "walk" | "drive" (auto) | "scooty"
    weather: "sunny", // "sunny" | "rain" | "sunset" | "night"
    currentChapter: 0, // 0 to 4
    tutorialStep: 0, // 0 to 3
    redFlagsFound: [],
    dahibaraStallsEaten: [],
    lowGraphics: false,
    speed: 0,
    distance: 1200,
    teaBoost: false,
    teaBoostTimer: 0,
    dahibaraBoost: false,
    dahibaraBoostTimer: 0,
    ramMandirBlessed: false,
    reputation: 0,
    repTier: 'Newcomer',
    activeContract: null,
    contractTimer: 0,
    cargoHealth: 100,
    fuel: 100,
    contractsCompleted: 0,
    modalActive: false,
    activeCutscene: null,
    rainSoundActive: false,
    autoHaggleTriggered: false,
    rasagolaHeistTriggered: false,
    cowJamTriggered: false,
    pattachitraTriggered: false,
    monkeyTriggered: false,
    floodTriggered: false,
    chaiGossipTriggered: false,
    challanTriggered: false,
    weddingTriggered: false,
    ghostTriggered: false,
    pgScamDone: false,
    sceneChoices: {}
  }

export function createContracts(POI) {
  return [
    {
      id: "c_dahibara_ram",
      client: "Raghu Bhai (Baramunda)",
      clientIcon: "🍛",
      title: {
        or: "ରାମ ମନ୍ଦିର ପୂଜକଙ୍କ ପାଇଁ ଗରମ ଦହିବରା",
        hi: "राम मंदिर पुजारी के लिए गरमा-गरम दहीबड़ा",
        en: "Hot Dahibara for Ram Mandir Priest"
      },
      cargo: "Spicy Dahibara-Aloodum",
      pickup: POI.dahibaraBaramunda,
      dropoff: POI.ramMandirPriest,
      destName: { or: "ରାମ ମନ୍ଦିର", hi: "राम मंदिर", en: "Ram Mandir" },
      distanceKm: 2.4,
      basePayout: 120,
      timeLimitSec: 180,
      fragile: false,
      repRequired: 0,
      repReward: 5,
      desc: {
        or: "ରାମ ମନ୍ଦିରର ପୂଜକ ସକାଳ ଆଳତି ପରେ ରଘୁଙ୍କ ଦହିବରା ଚାହୁଁଛନ୍ତି। ୩ ମିନିଟ୍ ଭିତରେ ପହଞ୍ଚାନ୍ତୁ!",
        hi: "राम मंदिर के पुजारी सुबह की आरती के बाद रघु का दहीबड़ा चाहते हैं। 3 मिनट में पहुंचाएं!",
        en: "The Ram Mandir priest wants hot Dahibara after morning aarti. Deliver in 3 minutes!"
      }
    },
    {
      id: "c_bank_saheed",
      client: "Master Canteen Station Bank",
      clientIcon: "🏦",
      title: {
        or: "ଶହୀଦ ନଗର ପିଜିକୁ ଜରୁରୀ ଋଣ ଫାଇଲ୍",
        hi: "शहीद नगर पीजी को जरूरी लोन फाइल",
        en: "Urgent Loan Dossier to Saheed Nagar PG"
      },
      cargo: "Confidential Loan Files",
      pickup: POI.canteen,
      dropoff: POI.saheedPG,
      destName: { or: "ଶହୀଦ ନଗର ପିଜି", hi: "शहीद नगर पीजी", en: "Saheed Nagar PG" },
      distanceKm: 1.8,
      basePayout: 150,
      timeLimitSec: 130,
      fragile: false,
      repRequired: 0,
      repReward: 6,
      desc: {
        or: "ବ୍ୟାଙ୍କ ମ୍ୟାନେଜରଙ୍କ ଜରୁରୀ ଋଣ ଡକ୍ୟୁମେଣ୍ଟ ଶହୀଦ ନଗର ପିଜି ମାଲିକାଣୀଙ୍କ ପାଖକୁ ଶୀଘ୍ର ନିଅନ୍ତୁ!",
        hi: "बैंक मैनेजर के जरूरी लोन कागजात शहीद नगर पीजी मालकिन के पास तुरंत पहुंचाएं!",
        en: "Express bank clearance documents needed by Saheed Nagar PG owner before office closing!"
      }
    },
    {
      id: "c_pattachitra_lingaraj",
      client: "Ekamra Haat Master Artisan",
      clientIcon: "🎨",
      title: {
        or: "ଲିଙ୍ଗରାଜ କଲେକ୍ଟରଙ୍କୁ ସୂକ୍ଷ୍ମ ପଟ୍ଟଚିତ୍ର",
        hi: "लिंगराज कलेक्टर को नाजुक पट्टचित्र",
        en: "Fragile Pattachitra Scroll to Lingaraj Collector"
      },
      cargo: "Mineral Pigment Palm-leaf Scroll",
      pickup: POI.ekamraHaat,
      dropoff: POI.templeLingaraj,
      destName: { or: "ଲିଙ୍ଗରାଜ ମନ୍ଦିର ପ୍ରବେଶ", hi: "लिंगराज मंदिर प्रवेश", en: "Lingaraj Temple Gateway" },
      distanceKm: 3.1,
      basePayout: 220,
      timeLimitSec: 210,
      fragile: true,
      repRequired: 50,
      repReward: 8,
      desc: {
        or: "ଏହା ଅତି ମୂଲ୍ୟବାନ ପଟ୍ଟଚିତ୍ର। ରାସ୍ତାରେ ଗାଡ଼ି ଧକ୍କା ହେଲେ ପେମେଣ୍ଟ କଟିବ। ସାବଧାନରେ ଚଲାନ୍ତୁ!",
        hi: "यह बेहद कीमती पट्टचित्र है। रास्ते में टक्कर हुई तो हर्जाना कटेगा। संभलकर चलाएं!",
        en: "Priceless natural pigment palm-leaf artwork. Traffic collisions severely damage cargo!"
      }
    },
    {
      id: "c_flowers_lingaraj",
      client: "Ram Mandir Head Pujari",
      clientIcon: "🌺",
      title: {
        or: "ଓଲ୍ଡ ଟାଉନ୍ ମହାପ୍ରଭୁଙ୍କ ପାଇଁ ପବିତ୍ର ତୁଳସୀ ଓ ଫୁଲ",
        hi: "ओल्ड टाउन महाप्रभु के लिए पवित्र तुलसी व पुष्प",
        en: "Sacred Tulsi & Flowers to Old Town"
      },
      cargo: "Consecrated Flower Basket",
      pickup: POI.ramMandirPriest,
      dropoff: POI.templeLingaraj,
      destName: { or: "ଲିଙ୍ଗରାଜ ମନ୍ଦିର", hi: "लिंगराज मंदिर", en: "Lingaraj Temple" },
      distanceKm: 2.8,
      basePayout: 140,
      timeLimitSec: 190,
      fragile: false,
      repRequired: 50,
      repReward: 6,
      desc: {
        or: "ସନ୍ଧ୍ୟା ଆଳତି ପାଇଁ ରାମ ମନ୍ଦିରରୁ ଲିଙ୍ଗରାଜ ମନ୍ଦିରକୁ ପବିତ୍ର ତୁଳସୀ ଫୁଲ ନେଇ ଯାଆନ୍ତୁ।",
        hi: "संध्या आरती हेतु राम मंदिर से लिंगराज मंदिर पवित्र तुलसी और फूल लेकर जाएं।",
        en: "Carry consecrated marigold garlands and sacred Tulsi leaves for the Lingaraj evening aarti."
      }
    },
    {
      id: "c_medicine_canteen",
      client: "Capital Ayurvedic Dispensary",
      clientIcon: "💊",
      title: {
        or: "ରେଳ ଷ୍ଟେସନ ଯାତ୍ରୀଙ୍କୁ ଜରୁରୀ ଆୟୁର୍ବେଦିକ ଔଷଧ",
        hi: "रेलवे स्टेशन यात्री को आपातकालीन आयुर्वेदिक दवा",
        en: "Emergency Ayurvedic Medicine to Railway Station"
      },
      cargo: "Glass Tonic Bottles",
      pickup: POI.canteen,
      dropoff: POI.canteen,
      destName: { or: "ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍ ଷ୍ଟେସନ", hi: "मास्टर कैंटीन स्टेशन", en: "Master Canteen Station" },
      distanceKm: 1.5,
      basePayout: 180,
      timeLimitSec: 120,
      fragile: true,
      repRequired: 150,
      repReward: 7,
      desc: {
        or: "କଟକ ଏକ୍ସପ୍ରେସ୍ ଟ୍ରେନ୍ ଛାଡ଼ିବା ପୂର୍ବରୁ ପ୍ଲାଟଫର୍ମ ନମ୍ବର ୧ ରେ ଯାତ୍ରୀଙ୍କୁ ଔଷଧ ଦିଅନ୍ତୁ!",
        hi: "कटक एक्सप्रेस ट्रेन छूटने से पहले प्लेटफॉर्म 1 पर यात्री को दवा पहुंचाएं!",
        en: "Deliver tonic bottles to passenger on Platform 1 before the Cuttack Express departs!"
      }
    }
  ]
}

export function createInitialState() {
  return {
    ...STATE_DEFAULTS,
    redFlagsFound: [],
    dahibaraStallsEaten: [],
    sceneChoices: {}
  };
}
