'use strict'

import { Flex, P } from 'smbls'

const Static = {
  extend: Flex,
  props: {
    flow: 'column',
    content: {
      flex: 1,
      margin: 'C1 auto E',
      maxWidth: 'J',
      '@tabletS': {
        padding: 'B1'
      }
    }
  },
  LogoHeader: {},
  Footer: {}
}

export const terms = {
  extend: Static,
  LogoHeader: {},

  content: {
    extend: Flex,
    props: { flow: 'column' },
    H2: { order: -1, text: 'წესები და პირობები' },

    ...[{
      childExtend: P,
      $propsCollection: [
        'წინამდებარე დოკუმენტი არის Archy-ს“ -ს ვებგვერდით სარგებლობის წესები და პირობები.',
        'წინამდებარე დოკუმენტი არის ორმხრივად მავალდებულებელი ხელშეკრულება, რომელიც ფორმდება მომხმარებელსა და ი/მ საბა ჩხაიძეს შორის. ი/მ საბა ჩხაიძე (ს.ნ. 01024067314) რეგისტრირებული მისამართი - ქ. თბილისი, საბურთალოს რაიონი, პეკინის გამზირი, II კვარტალი, კორპუსი 9, ბინა 5.  Შემდგომში მოხსენიებული როგორც Archy (პავილიონ ფილმ)',
        'ი/მ საბა ჩხაიძე“ წინამდებარე სარგებლობის წესებსა და პირობებში, კონფიდენციალურობის პოლიტიკაში და ყველა სხვა სახელმძღვანელოსა და ინსტრუქციაში შემდგომში მოხსენიებული იქნება როგორც „Archy” (პავილიონ ფილმ)',
        '.',
        'Archy-ს“ -ს ვებგვერდით სარგებლობის წესები და პირობები, მასში შეტანილ ცვლილებებთან და Archy-ს“ -ს სხვა რეგულაციებთან ერთად წარმოადგენენ ერთიან დოკუმენტს და განხილულ უნდა იქნეს როგორც მომხმარებელთან გაფორმებული ერთიანი ხელშეკრულება.',
        'ვებგვერდზე რეგისტრაციის დროს მომხმარებელი ეთანხმება და აღიარებს წინამდებარე წესებსა და პირობებს, კონფიდენციალურობის პოლიტიკას, დაბრუნებისა და გაცვლის წესებს, ასევე აცხადებს თანხმობას, გავრცელდეს მასზე მათი სამართლებრივი ძალა.',
        'იმ შემთხვევაში, თუ მომხმარებელი არ ეთანხმება Archy-ს“ -ს სამართლებრივი დოკუმენტების შინაარსს, შეუძლია არ გამოიყენოს ვებგვერდი, თუმცა, ამასთან Archy-ს“  მომხმარებელს მიმართავს თხოვნით, შენიშვნები მიაწოდოს ელექტრონულ ფოსტაზე.',
        'დამატებითი კითხვების, პრეტენზიის, თხოვნის შემთხვევაში, მომხმარებელს შეუძლია Archy-ს“ -ს დაუკავშირდეს ელექტრონული ფოსტის მეშვეობით. Archy-ს“ -ს გუნდი მზად არის მომხმარებელს კითხვებზე გასცეს დეტალური პასუხი.'
      ].map(text => ({ text }))
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'ტერმინთა განმარტება' },
      P: { text: 'წინამდებარე წესებსა და პირობებში გამოყენებულ ტერმინებს გააჩნიათ შემდეგი მნიშვნელობა:' },
      List: {
        props: {},
        $propsCollection: [
          'Archy-ს“ (შემდგომში „ჩვენ“, „ჩვენი“, „ვებ-გვერდი“) - საქართველოს კანონმდებლობის შესაბამისად დაფუძნებული Archy“, საიდენტიფიკაციო კოდი 01024067314, რეგისტრირებული: ქ. თბილისი, საბურთალოს რაიონი, პეკინის გამზირი, II კვარტალი, კორპუსი 9, ბინა 5..',
          'მომხმარებელი - იურიდიული ან ფიზიკური პირი, რომელსაც სურს შეიძინოს Archy-ს“ -ზე განთავსებული პროდუქცია და სერვისები.',
          'მომხმარებლის თანხმობა - წინამდებარე დოკუმენტის მომხმარებლის მიერ გაცნობისა და მისი პერსონალური ხასიათის მონაცემების დამუშავების შესახებ გამოხატული ნება.',
          'მესამე პირი - ნებისმიერი ფიზიკური ან იურიდიული პირი, საჯარო დაწესებულება.',
          'პირდაპირი მარკეტინგი - ფოსტის, სატელეფონო ზარების, ელექტრონული ფოსტის ან სხვა ნებისმიერი სატელეკომუნიკაციო საშუალებით საქონლის, მომსახურების შეთავაზება.',
          'რეგისტრაცია - პირადი ანგარიშის შექმნა.',
          'ანგარიში - მომხმარებლის მიერ Archy-ს“ -ზე რეგისტრირებული პირადი გვერდი.'
        ].map(text => ({ text }))
      },
      Paragraphs: {
        props: {},
        $propsCollection: [
          'ვებგვერდზე  მომხმარებელს ეძლევა საშუალება, შეიძინოს Archy-ს“ -ზე განთავსებული პროდუქცია.',
          'მომხმარებლის მიერ გაკეთებული თითოეული შეკვეთა წარმოადგენს ცალკეულ ნასყიდობის ხელშეკრულებას, რომლის მხარეები არიან ვებგვერდის ავტორიზებული მომხმარებელი და „Archy“. შეკვეთის გაფორმებისას გენერირდება ნასყიდობის საგანი, მისი ღირებულება და მიწოდების ადგილი.'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'მომხმარებელი ადასტურებს და იძლევა გარანტიას, რომ:' },
      List: {
        props: {},
        $propsCollection: [
          'მის მიერ მითითებული ინფორმაცია არის სრული და სწორი;',
          'არ გამოიყენებს სახელს, რომელიც შესაძლოა დამამცირებელი და შეურაცხმყოფელი აღმოჩნდეს ნებისმიერი სხვა პირისათვის;',
          'არ გამოიყენებს ვებგვერდს ყალბი ინფორმაციის გავრცელების მიზნით;',
          'არ გამოიყენებს ვებგვერდს სხვა კომპანიის, კომპანიის თანამშრომლის ან ნებისმიერი სხვა პირის განსახიერების მიზნით;',
          'არ დაარღვევს სხვა პირის უფლებებს, კანონსაწინააღმდეგო და ზიანის მიმყენებელი ქმედებით;',
          'არ გამოიყენებს მოწყობილობას, პროგრამას, რომლის მიზანი არის ინფორმაციის მოპოვება ვებგვერდიდან ან/და ნორმალური ფუნქციონირებისათვის ხელის შეშლა;',
          'დაიცავს საავტორო და მომიჯნავე უფლებებს, არ განახორციელებს Archy“ -ზე არსებული ინფორმაციის: ლოგო, პიქტოგრამა, სურათი, გრაფიკა, გამოსახულება, პატენტი, სასაქონლო ნიშნები, დიზაინის და სხვა ნებისმიერი სახის ინტელექტუალური საკუთრების უნებართვო გამოყენებას, დამუშავებასა და გამოქვეყნებას, Archy-ს“ -ს წინასწარი წერილობითი თანხმობის გარეშე;',
          'არ განახორციელებს ისეთ ქმედებას, რომელიც საფრთხეს შეუქმნის Archy-ს“ -ის გამართულ ფუნქციონირებას;',
          'არ განახორციელებს ქმედებას, რომელიც იკრძალება მოქმედი კანონმდებლობით, წინამდებარე ხელშეკრულებითა და Archy“ -ს კონფიდენციალურობის დაცვის პოლიტიკით.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მომხმარებლის მიერ შეკვეთის გაფორმება და პროდუქციის შეძენა' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'მომხმარებლის მიერ პროდუქტის შერჩევის და ვირტუალურ კალათაში მოთავსების შემდგომ, საჭირო იქნება შემდეგი ინფორმაციის მითითება: ელექტრონული ფოსტა, სახელი, მობილურის ნომერი და მისამართი სადაც სურს რომ შენაძენი მიიღოს.',
          'Archy-ს“ -ს პროდუქციის საფასურის გადახდის მიზნით გადამისამართდება ანგარიშსწორების გვერდზე. ანგარიშსწორების განხორციელებამდე მომხმარებელი ვალდებულია გადაამოწმოს მის მიერ მითითებული მისამართი და საკონტაქტო ინფორმაცია, შეძენილი პროდუქციის მისთვის შეუფერხებლად მიწოდების განხორციელების მიზნით. არასწორი/არასრული მისამართისა ან/და საკონტაქტო ინფორმაციის მითითების შემთხვევაში პროდუქციის მიწოდების შეფერხების თაობაზე პასუხისმგებლობა ეკისრება მომხმარებელს.',
          'მომხმარებელი მის მიერ შეძენილი პროდუქტის შესახებ ინფორმაციის გადამოწმებას შეძლებს მითითებულ ელ ფოსტაზე მიღებულ შეკვეთის დამადასტურებელ წერილში..',
          'Archy-ს“ იტოვებს უფლებამოსილებას უარი თქვას ან გააუქმოს მომხმარებლის შეკვეთა თაღლითობის, უნებართვო ან უკანონო ტრანზაქციაზე ეჭვის არსებობის შემთხვევაში.',
          'მომხმარებლის მიერ პროდუქტის საფასურის გადახდის შემდგომ შეძენილ ნივთზე საკუთრების უფლება სრულად გადადის მომხმარებელზე.',
          'შეძენილი პროდუქციის გაცვლისა და დაბრუნების წესები მომხმარებელს შეუძლია იხილოს დაბრუნების პირობების გვერდზე .'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'შეძენილი პროდუქციის მიწოდების წესები და პირობები' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'მომხმარებელი აცხადებს თანხმობას, რომ მის მიერ შეძენილი პროდუქციის მიწოდებას განახორციელებს  „Archy“ (საიდენტიფიკაციო კოდი: 01024067314, რეგისტრირებული: საქართველო, თბილისი, საბურთალოს რაიონი, პეკინის გამზირი, II კვარტალი, კორპუსი 9, ბინა 5.).',
          'მიწოდების ხელშეკრულების მხარეები არიან მომხმარებელი და  „Archy“.',
          'კონფიდენციალური ინფორმაციის დამუშავებისა და შენახვის შესახებ პოლიტიკა მომხმარებელს შეუძლია იხილოს კონფიდენციალური პოლიტიკის გვერდზე.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მომსახურების მიღება' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'შეძენილი პროდუქციის მიღება მომხმარებელს შეუძლია როგორც სამუშაო, ასევე არასამუშაო დღეებში.',
          'მომხმარებლის მიერ Archy-ს“ -ს ვებგვერდიდან საღამოს 18:00 საათამდე შეძენილი პროდუქციის მიწოდება, თბილისის ტერიტორიაზე, განხორციელდება იმავე დღეს, ხოლო 18:00საათის შემდეგ შეძენილი პროდუქციის მიწოდება, - მეორე დღეს.',
          'თბილისის ფარგლებს გარეთ მიწოდება განხორციელდება საქართველოს ფოსტით, მისივე დადგენილი ტარიფითა და ვადებით.',
          'Archy-ს“ , საკურიერო მომსახურების გაწევის მიზნით, მომხმარებლის შესახებ მისთვის ცნობილ, პერსონალური ხასიათის კონფიდენციალურ ინფორმაციას, კერძოდ, მომხმარებლის სახელს, გვარს, მისამართსა და ტელეფონის ნომერს მიაწოდებს „საქართველოს ფოსტას“.',
          'Archy-ს“  მომხმარებლის მიერ შეძენილ პროდუქციას გადასცემს ”საქართველოს ფოსტა”, რომელიც ახორციელებს პროდუქციის ტრანსპორტირებას მითითებულ მისამართზე. “Archy“ -ის პასუხისმგებლობა სრულდება პროდუქციის საკურიერო კომპანიისათვის გადაცემის დროს. პროდუქციის დაკარგვისა და დაზიანების რისკი სრულად გადადის საკურიერო მომსახურების გამწევ კომპანიაზე.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'ანგარიშსწორების წესი' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'ანგარიშსწორება ხორციელდება მხოლოდ უნაღდო ანგარიშსწორების გზით.',
          'შეკვეთის გაფორმებისას მომხმარებელი ვებგვერდიდან გადამისამართდება ანგარიშსწორების გვერდზე, სადაც უთითებს საკუთარი ბარათის მონაცემებს. ანგარიშსწორების მოთხოვნა მუშავდება და დასტურდება ბანკის მიერ.',
          'Archy“ -ს არ აქვს წვდომა როგორც ანგარიშსწორების გვერდზე, ასევე მომხმარებლის მიერ მითითებულ საბანკო ბარათის მონაცემებზე.',
          'ანგარიშსწორების წარმატებით დასრულების შემთხვევაში, ეკრანზე გამოდის შესაბამისი ინფორმაციის შემცველი შეტყობინება.',
          'ანგარიშსწორების დასრულების შემდგომ მომხმარებელი მის მიერ მითითებულ ელექტრონულ ფოსტაზე მიიღებს დასტურს შეკვეთის წარმატებით დასრულების შესახებ.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'პასუხისმგებლობის შეზღუდვა' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'Archy-ს“  შესაძლებლობების ფარგლებში მაქსიმალურად უზრუნველყოფს თავდაცვის შესაბამისი მექანიზმების შემუშავებას, თუმცა არ არის პასუხისმგებელი პლატფორმაზე დაცული მონაცემების არასანქცირებულ წვდომაზე, მესამე პირების მიერ მიყენებულ ზიანზე, მათ მიერ მომხმარებლისათვის შეთავაზებულ მომსახურებაზე.',
          'Archy“  პასუხისმგებელი არ არის, რომ ვებგვერდი ან მომსახურება მომხმარებლისათვის იქნება მუდმივად ხელმისაწვდომი და არ იძლევა გარანტიას, რომ ვებგვერდს არ ექნება პროგრამული ხარვეზები, ვირუსები ან/და სხვა ნებისმიერი შეცდომა.',
          'Archy“  იხნის სრულ პასუხისმგებლობას გაუფრთხილებლობის შედეგად დამდგარ ზიანზე, ასევე იმ შემთხვევებზე, როდესაც მესამე პირისათვის გახდა ცნობილი მომხმარებლის მომსახურების მიღებისთვის გაზიარებული საჭირო ინფორმაცია.',
          'Archy“  გამორიცხავს როგორც თავის, ასევე მისი ყველა თანამშრომლის ნებისმიერ პასუხისმგებლობას წინამდებარე დოკუმენტისა და მოქმედი კანონმდებლობის მომხმარებლის მიერ ბრალეული დარღვევის შემთხვევაში.',
          'Archy“  სასამართლოს მიერ მისი პასუხისმგებლობის დადგენის შემთხვევაში შეზღუდულია სადავო პროდუქტის ღირებულების ოდენობით.',
          'კომპანია იხსნის სრულ პასუხისმგებლობას ნებისმიერი სახის ზიანისათვის ან/და შეფერხებისათვის, რომელიც შესაძლებელია გამოწვეულ იქნას მესამე პირების მონაწილეობით - ინტერნეტ პროვაიდერების, მობილური კომპანიების და სხვათა შეფერხებული მუშაობით.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'შეზღუდვები ვებგვერდის გამოყენებისას' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'ვებგვერდზე არსებული ინფორმაცია შეიძლება შეიცვალოს ან მოიხსნას წინასწარი შეტყობინების გარეშე. Archy“  მომხმარებელს არ გაუწევს იმ სახის მომსახურებას, რომელიც მიაჩნია, რომ ეწინააღმდეგება მოქმედ კანონმდებლობას.',
          'მომხმარებელს ეკრძალება ვებგვერდის არაკანონიერი მიზნებისთვის გამოყენება, მათ შორის, Archy“ -ის სისტემებში არასანქცირებული შეღწევა, ვებგვერდზე არსებული ინფორმაციის ცვლილება, არასათანადოდ გამოყენება ან სხვაგვარი ქმედება, რომელმაც შეიძლება პირდაპირი ან ირიბი ზიანი მიაყენოს Archy“ -ის კანონით დაცულ ინტერესებს.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მარკეტინგი' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'ვებგვერდზე პროდუქციის შესყიდვის დროს მომხმარებელი ეთანხმება სარეკლამო, წამახალისებელი მასალების, მომხმარებლისათვის საინტერესო მომსახურების, პროდუქციისა და სერვისების გამოწერას. თანხმობის შემთხვევაში მომხმარებელი ელექტრონული ფოსტის მეშვეობით მიიღებს ვებგვერდის სიახლეებს, სხვადასხვა შეთავაზებასა და ინფორმაციას.',
          'მომხმარებელს შეუძლია ნებისმიერ დროს Archy“ -ის ელექტრონულ ფოსტაზე გაგზავნილი შეტყობინებით განაცხადოს უარი მარკეტინგული აქტივობების შესახებ ინფორმაციის მიღებაზე.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'საავტორო უფლებები' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'ვებგვერდზე განთავსებული ნებისმიერი ტექსტი, გრაფიკული და ანიმაციური გამოსახულებები ექსკლუზიურად ეკუთვნის Archy“ -ს.',
          'Archy“ -ს სასაქონლო ნიშანი რეგისტრირებულია საქპატენტში და წარმოადგენს  "Archy“ საკუთრებას.',
          'Archy“ -ის სასაქონლო ნიშნის ნებისმიერი სახით გამოყენება, Archy-ს“ -ს წერილობითი ფორმით გამოხატული წინასწარი თანხმობის გარეშე, მკაცრად აკრძალულია. მომხმარებელს არ აქვს უფლება, გამოიყენოს Archy“ -ის სასაქონლო ნიშანი, ვებგვერდზე განთავსებული გრაფიკული გამოსახულებები ნებისმიერ პროდუქტთან ან მომსახურებასთან დაკავშირებით, რამაც შეიძლება გამოიწვიოს აღრევა. მომხმარებელს არ აქვს უფლება, გამოიყენოს ისინი იმგვარად, რომ დაამციროს ან შეურაცხყოფა მიაყენოს Archy“ -ს რეპუტაციას. ამგვარი დარღვევის შემთხვევაში, Archy“  უფლებას იტოვებს, მიმართოს სამართლებრივი უფლებების დაცვის საშუალებებს. მომხმარებელი პასუხისმგებელი იქნება Archy“ -სათვის მიყენებულ მატერიალურ და არამატერიალურ ზიანზე, ზიანი შესაძლოა მოიცავდეს Archy“ -ის მიერ ამ ზიანის აღმოფხვრისთვის გაწეულ ხარჯებს, მათ შორის, საადვოკატო მომსახურებისა და სასამართლოს ხარჯებს.',
          'ვებგვერდზე პროდუქციის ყიდვით მომხმარებელზე არ გადადის არანაირი საავტორო უფლება.',
          'Archy“  პატივს სცემს სხვა პირების საავტორო უფლებებს და მოუწოდებს მომხმარებელს დაიცვას Archy“ -ის საავტორო უფლებები.',
          'იმ შემთხვევაში, თუ მომხმარებელი საავტორო უფლებების მესაკუთრეა და თვლის, რომ მისი საავტორო უფლების დაცვის ობიექტი რაიმე ფორმით, კანონმდებლობის დარღვევით განთავსდა Archy“ -ზე, მომხმარებელი უნდა დაუკავშირდეს Archy“ -ს ელექტრონულ ფოსტაზე და მიუთითოს დანიშნულებაში საავტორო უფლების დარღვევა.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მოქმედების ვადა და შეწყვეტა' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'წინამდებარე წესები და პირობები ძალაში შედის მომხმარებლის მიერ თანხმობის გამოცხადების შემდეგ.',
          'წინამდებარე დოკუმენტის მოქმედება შესაძლებელია შეწყდეს საქართველოს კანონმდებლობით ან/და წინამდებარე წესით გათვალისწინებულ შემთხვევებში, აგრეთვე მომხმარებლის ინიციატივით ნებისმიერ დროს, შეწყვეტის მომენტისათვის Archy“ -ის წინაშე არსებული ნებისმიერი სახის დავალიანების (ასეთის არსებობის შემთხვევაში) სრულად დაფარვის შემდეგ.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მესამე მხარე' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'Archy“  იხსნის ყოველგვარ პასუხისმგებლობას სხვა ვებგვერდებთან მიმართებით, რომლებიც შესაძლებელია გარე ბმულის სახით განთავსებული იყოს Archy“ -ის ვებგვერდზე. სხვა ვებგვერდის შინაარსი, წესები და პირობები, კონფიდენციალურობის პოლიტიკა შესაძლოა განსხვავდებოდეს წინამდებარე პოლიტიკისგან. შესაბამისად, Archy“  მომხმარებელს მოუწოდებს გაეცნოს გარე ბმულის სახით მითითებული ვებგვერდის გამოყენების პირობებსა და კონფიდენციალურობის პოლიტიკას.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მარეგულირებელი კანონმდებლობა და დავების გადაწყვეტის წესი' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'წინამდებარე წესები და პირობები რეგულირდება და განიმარტება საქართველოს მოქმედი კანონმდებლობის შესაბამისად.',
          'მხარეები თანხმდებიან რომ დავის შემთხვევაში, შეეცდებიან მოლაპარაკებით გადაწყდეს წარმოშობილი უთანხმოება. მოლაპარაკებების წარმატებით დასრულების შეუძლებლობის შემთხვევაში, მხარეები უფლებამოსილნი არიან მიმართონ თბილისის საქალაქო სასამართლოს.',
          'წინამდებარე წესებისა და პირობების რომელიმე ნაწილის ბათილად ცნობა არ გამოიწვევს სხვა ნაწილის ბათილად ცნობას.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'ცვლილებები და დამატებები' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'Archy“  იტოვებს უფლებას, წინამდებარე დოკუმენტში ნებისმიერ დროს, ცალმხრივად, ამავე ვებგვერდზე გამოქვეყნების გზით, შეიტანოს ცვლილებები ან/და დამატებები მომხმარებლის შემდგომი დამატებითი თანხმობის გარეშე. ცვლილებების/დამატებების განხორციელების შემდეგ, Archy“  მომხმარებლის მიერ ვებგვერდით სარგებლობის გაგრძელებას მიიჩნევს მომხმარებლის თანხმობად.'
        ].map(text => ({ text }))
      }
    }]
  }
}

export const privacy = {
  extend: Static,
  LogoHeader: {},
  content: {
    extend: Flex,
    props: { flow: 'column' },
    H2: { order: -1, text: 'კონფიდენციალურობის პირობები' },

    ...[{
      H5: { text: 'მიზანი' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'ვებგვერდზე www.pavilion.film-ზე ვიზიტის დროს ვალდებული ხართ გაეცნოთ ჩვენს კონფიდენციალურობის პოლიტიკას. შესაძლებელია წინამდებარე კონფიდენციალურობის პოლიტიკაში განხორციელდეს ცვლილებები და დამატებები, შესაბამისად "Archy"  მოგიწოდებთ, რომ პერიოდულად გადაამოწმოთ კონფიდენციალურობის პოლიტიკა.',
          'მომხმარებელი, რომელიც "Archy" -ს საკუთარი სურვილით მიაწოდებს პერსონალური ხასიათის ინფორმაციას, ის ავტომატურად ანიჭებს უფლებამოსილებას "Archy" -ს გამოიყენოს მომხმარებლის პერსონალური მონაცემები შენახვისა და დამუშავების მიზნით.',
          'წინამდებარე კონფიდენციალურობის პოლიტიკა განსაზღვრავს "Archy" -ის მომხმარებელთა პერსონალური ხასიათის მონაცემების დამუშავების წესს, მიზნებს, გამოყენებისა და შენახვის პირობებს. „პერსონალურ მონაცემთა დაცვის შესახებ“ საქართველოს კანონის საფუძველზე, "Archy" -ის მიზანია მომხმარებლის პერსონალური მონაცემების დაცვა.',
          'წინამდებარე დოკუმენტი (კონფიდენციალურობის პოლიტიკა) წარმოადგენს "Archy" -ის ვებგვერდით სარგებლობის წესებისა და პირობების განუყოფელ ნაწილს, რომელიც არის ორმხრივი მავალდებულებელი დოკუმენტი.'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'ტერმინთა განმარტება' },
      P: { text: 'წინამდებარე დოკუმენტში გამოყენებულ ტერმინებს აქვს შემდეგი მნიშვნელობა:' },
      List: {
        props: {},
        $propsCollection: [
          '"Archy" (შემდგომში „ჩვენ“, „ჩვენი“, „ვებგვერდი“) - საქართველოს კანონმდებლობის შესაბამისად დაფუძნებული ი/მ საბა ჩხაიძე, საიდენტიფიკაციო კოდი 01024067314, რეგისტრირებული:  ქ. თბილისი, საბურთალოს რაიონი, პეკინის გამზირი, II კვარტალი, კორპუსი 9, ბინა 5..',
          'პერსონალური მონაცემი - ნებისმიერი ინფორმაცია, რომელიც უკავშირდება იდენტიფიცირებულ ან იდენტიფიცირებად ფიზიკურ პირს.',
          'მონაცემთა დამუშავება - ავტომატური, ნახევრად ავტომატური ან არაავტომატური საშუალებების გამოყენებით მონაცემთა მიმართ შესრულებული ნებისმიერი მოქმედება.',
          'მონაცემთა სუბიექტი (შემდგომში მომხმარებელი) - ნებისმიერი ფიზიკური პირი, რომლის შესახებაც მუშავდება მონაცემები.',
          'მომხმარებლის თანხმობა - წინამდებარე დოკუმენტის მომხმარებლის მიერ გაცნობისა და მისი პერსონალური ხასიათის მონაცემების დამუშავების შესახებ გამოხატული ნება.',
          'მესამე პირი - ნებისმიერი ფიზიკური ან იურიდიული პირი, საჯარო დაწესებულება.',
          'პირდაპირი მარკეტინგი - ფოსტის, სატელეფონო ზარების, ელექტრონული ფოსტის ან სხვა ნებისმიერი სატელეკომუნიკაციო საშუალებით საქონლის, მომსახურების შეთავაზება.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'თანხმობა' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          '"Archy" -ის ვებგვერდით სარგებლობა მიიჩნევა მომხმარებლის მიერ კონფიდენციალურობის პოლიტიკის თაობაზე თანხმობად. შესაბამისად, "Archy" -ს მომხმარებელი ანიჭებს უფლებას დაამუშაოს, შეინახოს და გამოიყენოს მომხმარებლის მიერ მიწოდებული პერსონალური ხასიათის ინფორმაცია.',
          'აღნიშნული ინფორმაცია "Archy" -ის მიერ გამოყენებული იქნება მომსახურების გაწევის მიზნებიდან გამომდინარე მოქმედი კანონმდებლობის გათვალისწინებით.'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'მონაცემთა დამუშავების საფუძვლები' },
      P: { text: '"Archy"  მომხმარებლის პერსონალურ მონაცემებს დაამუშავებს, თუ:' },
      List: {
        props: {},
        $propsCollection: [
          'არსებობს მომხმარებლის თანხმობა.',
          'მონაცემთა დამუშავება საჭიროა "Archy" -ის მიერ, მისთვის კანონმდებლობით დაკისრებული მოვალეობების შესასრულებლად.',
          'მონაცემთა დამუშავება აუცილებელია მომხმარებლისათვის მომსახურების გასაწევად.'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'მომხმარებლის პერსონალური მონაცემების დამუშავების მიზანი' },
      List: {
        props: {},
        $propsCollection: [
          '"Archy" -ის მომსახურების ხარისხის გაუმჯობესება;',
          '"Archy" -ის კანონისმიერი ვალდებულებების ჯეროვნად შესრულება;',
          'მომხმარებლის მიერ წაყენებული პრეტენზიების აღმოფხვრა;',
          'მომხმარებლის მიერ ვებგვერდზე გამოვლენილი აქტივობების მონიტორინგი;',
          '"Archy" -ზე განახლებული მონაცემების მომხმარებლებისათვის შეტყობინება;',
          'მომხმარებელთან ეფექტური კომუნიკაცია;',
          'მომხმარებლის მიერ უკუკავშირის დამყარება;',
          '"Archy" -ის მიერ დანერგილი სიახლეების დატესტვა;',
          'ვებგვერდზე ახალი პროდუქტებისა და სიახლეების დანერგვა;',
          'მომხმარებლების იმ ჯგუფთა განსაზღვრა, რომელთათვის უნდა განხორციელდეს სიახლეების შეთავაზება;',
          'მარკეტინგული და სხვა სახის აქტივობების განხორციელება;',
          'მომხმარებლის მიერ განხორციელებული შესყიდვების თაობაზე ინფორმაციის მიწოდება;',
          'მომხმარებლის მიერ ფულადი ვალდებულების შესრულების თაობაზე უფლებამოსილი მესამე პირისგან ინფორმაციის მიღება;',
          '"Archy" -ის სისტემის არამართლზომიერი გამოყენების პრევენცია;',
          'საქართველოს სისხლის სამართლის კოდექსით გათვალისწინებული დანაშაულის პრევენცია;',
          'სახელმწიფო კომპეტენტური ორგანოებისათვის მიწოდება;',
          'კანონიერი ინტერესების დაცვა;',
          '"Archy" -ისთვის პერსონალურ მონაცემთა დაცვის შესახებ საქართველოს კანონით მინიჭებული სხვა ლეგიტიმური მიზანი.'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'მომხმარებლის უფლებამოსილება' },
      P: { text: 'მომხმარებელს უფლება აქვს "Archy" -ს მოსთხოვოს მონაცემთა დამუშავების შესახებ შემდეგი ინფორმაცია:' },
      List: {
        props: {},
        $propsCollection: [
          'მომხმარებლის შესახებ რომელი მონაცემები მუშავდება "Archy" -ის მიერ;',
          'მონაცემთა დამუშავების მიზანი;',
          'მონაცემთა დამუშავების სამართლებრივი საფუძველი;',
          'რა გზით შეგროვდა მონაცემები;',
          'ვისზე გაიცა მომხმარებლის შესახებ მონაცემები, მონაცემთა გაცემის საფუძველი და მიზანი;'
        ].map(text => ({ text }))
      },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'მომხმარებლის მიერ მოთხოვნის შემთხვევაში "Archy"  ვალდებულია გაასწოროს, განაახლოს, დაამატოს, დაბლოკოს, წაშალოს ან გაანადგუროს მონაცემები, თუ ისინი არასრულია, არაზუსტია, არ არის განახლებული ან თუ მათი შეგროვება და დამუშავება განხორციელდა კანონის მოთხოვნათა დარღვევით.',
          'მომხმარებელი უფლებამოსილია პერსონალურ მონაცემთა დაცვის შესახებ საქართველოს კანონით გათვალისწინებული უფლებების დარღვევის შემთხვევაში მიმართოს სახელმწიფო ინსპექტორის სამსახურს ან სასამართლოს.',
          'მომხმარებელს უფლება აქვს, ნებისმიერ დროს განაცხადოს უარი მის მიერ "Archy" -ისათვის მიცემულ თანხმობაზე და მოითხოვოს მონაცემთა დამუშავების შეწყვეტა ან/და დამუშავებული მონაცემების განადგურება.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მომხმარებლის ვალდებულება' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'მომხმარებელი ვალდებულია "Archy" -ს მის შესახებ მიაწოდოს სრულყოფილი და სწორი ინფორმაცია შემდგომში მომსახურების მიღების მიზნით. აღნიშნული ვალდებულება ასევე ვრცელდება მომხმარებლის მიერ მიწოდებული ინფორმაციის ცვლილებებზე.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: '"Archy" -ის ვებგვერდის გამოყენების პირობები' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'მომხმარებლის მიერ "Archy" -ის ვებგვერდის გამოყენებით მომხმარებელი აცხადებს თანხმობას "Archy" -ის მიერ მისი პერსონალური მონაცემებისა და მზა ჩანაწერების (Cookies) შენახვასა და დამუშავებაზე.',
          'მომხმარებელი ვალდებულია "Pavilion Film" -ს მიაწოდოს სრული და სწორი ინფორმაცია, ცვლილების შემთხვევაში განაახლოს მის მიერ მიწოდებული ინფორმაცია'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'ვის ვუზიარებთ მომხმარებლის მონაცემებს' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'პერსონალური მონაცემების გაზიარება ხორციელდება პარტნიორი საკურიერო მომსახურების გამწევი კომპანიებისათვის, რომლებიც უზრუნველყოფენ მომხმარებლისათვის შეძენილი პროდუქციის მიწოდებას მის მიერ მითითებულ მისამართზე. საკურიერო მომსახურების გამწევ პარტნიორ კომპანიებს მომხმარებლის შესახებ გადაეცემა შემდეგი სახის ინფორმაცია: შეკვეთის დეტალები, სახელი, გვარი, მისამართი და საკონტაქტო ნომერი. პარტნიორი საკურიერო კომპანიებისათვის მიწოდებული ინფორმაცია გამოყენებული იქნება მხოლოდ შეძენილი პროდუქციის მიწოდების მიზნით.',
          'მომხმარებლის პერსონალური მონაცემების გაზიარება შესაძლებელია საჭირო გახდეს საქართველოს მოქმედი კანონმდებლობით გათვალისწინებულ შემთხვევებში, დანაშაულის დადგენის, გამოძიების ან დანაშაულის აღკვეთის მიზნით.',
          'მომხმარებლის ინტერესებიდან გამომდინარე, პირდაპირი მარკეტინგის გზით, სარეკლამო მასალების მოწოდების, მომხმარებლისათვის საინტერესო მომსახურების, პროდუქციის, სერვისებისა და მომსახურების ხარისხის გაუმჯობესების მიზნით "Pavilion Film" -ს შეუძლია ისარგებლოს მომხმარებლის პერსონალური ინფორმაციით, კერძოდ, სახელით და ელ. ფოსტის მისამართით/ტელეფონის ნომრით. პირდაპირი მარკეტინგის განსახორციელებლად "Pavilion Film"  იტოვებს უფლებას, ხსენებული პერსონალური ხასიათის ინფორმაცია გადასცეს მესამე პირებს, რომლებიც სახელშეკრულებო ურთიერთობიდან გამომდინარე გაუწევენ "Pavilion Film" -ს სარეკლამო მომსახურებას.',
          '"Pavilion Film"  უფლებამოსილია პერსონალური ინფორმაცია გაუზიაროს საქართველოს მოქმედი კანონმდებლობით გათვალისწინებულ შემთხვევებში, გარდა ზემოაღნიშნულისა, ნებისმიერ მესამე პირს.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'პირდაპირი მარკეტინგის შეწყვეტის მოთხოვნა' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'მომხმარებელს ნებისმიერ დროს აქვს შესაძლებლობა "Pavilion Film" -ს მოსთხოვოს პირდაპირი მარკეტინგის შეწყვეტა. მომხმარებლის მიერ პირდაპირი მარკეტინგის შეწყვეტის თაობაზე მოთხოვნა არ ავალდებულებს "Pavilion Film" -ს შეწყვიტოს ინფორმაციის მიწოდება განახლებებისა და ცვლილებების შესახებ.',
          'პირდაპირი მარკეტინგის შეწყვეტის სურვილის შემთხვევაში მომხმარებელს შეუძლია ელ.ფოსტის მეშვეობით მიმართოს "Pavilion Film" -ს. აღნიშნულში არ მოიაზრება "Pavilion Film" -ის მიერ სხვა მომსახურების მიწოდების შეწყვეტა.'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'ლოგ ფაილები და cookies' },
      P: { text: '"Pavilion Film"  სარგებლობს ლოგ ფაილების სტანდარტული პროცედურით. სხვა ვებგვერდების მსგავსად, "Pavilion Film"  იყენებს Cookies. ლოგ ფაილები და Cookies გამოიყენება იმისთვის რომ ვებგვერდმა შეინახოს ინფორმაცია მომხმარებლების ქცევის შესახებ და გააუმჯობესოს მომსახურების ხარისხი. მათი მეშვეობით გენერირდება და გროვდება შემდეგი ინფორმაცია:' },
      List: {
        props: {},
        $propsCollection: [
          'IP მისამართი',
          'მოწყობილობის ტიპი',
          'ბრაუზერი',
          'ვებგვერდის ვიზიტის დრო, თარიღი და ხანგრძლივობა',
          'რომელი პლატფორმიდან გადმომისამართდა მომხმარებელი "Pavilion Film" -ის ვებგვერდზე',
          'ინფორმაცია "Pavilion Film" -ის ვებგვერდზე განხორციელებული ქმედებების შესახებ - რა პროდუქტები მოინახულა მომხმარებელმა'
        ].map(text => ({ text }))
      },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'ამ ინფორმაციით არ ხდება კონკრეტული მომხმარებლის იდენტიფიცირება და წარმოადგენს ანალიტიკურ მონაცემებს.'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'ამგვარი ინფორმაციის დამუშავების მიზანია:' },
      P: { text: '"Pavilion Film"  სარგებლობს ლოგ ფაილების სტანდარტული პროცედურით. სხვა ვებგვერდების მსგავსად, "Pavilion Film"  იყენებს Cookies. ლოგ ფაილები და Cookies გამოიყენება იმისთვის რომ ვებგვერდმა შეინახოს ინფორმაცია მომხმარებლების ქცევის შესახებ და გააუმჯობესოს მომსახურების ხარისხი. მათი მეშვეობით გენერირდება და გროვდება შემდეგი ინფორმაცია:' },
      List: {
        props: {},
        $propsCollection: [
          'გავაანალიზოთ ტრენდები',
          '"Pavilion Film" -მა მართოს ვებგვერდი',
          'აწარმოოს სტატისტიკა',
          'თვალი ადევნოს მომხმარებლების ქმედებებს ვებგვერდზე გამოცდილების შექმნის მიზნით',
          'ეფექტური მარკეტინგული აქტივობების შესამუშავებლად და განსახორციელებლად',
          'რჩევებისა და რეკომენდაციების მისაცემად'
        ].map(text => ({ text }))
      },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'ვებგვერდის გამოყენების დაწყებისას მომხმარებელს აქვს საშუალება დაეთანხმოთ cookies. თუ მომხმარებელი არ დააჭერს შესაბამის ღილაკს და შეტყობინების მიუხედავად გააგრძელებს ვებგვერდით სარგებლობას, ამგვარი ქმედება ჩაითვლება მომხმარებლის მიერ თანხმობად.',
          'Cookie-ს პარამეტრების ცვლილება შესაძლებელია ბრაუზერის პარამეტრების შეცვლით.'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'მონაცემების მიღება' },
      P: { text: '"Pavilion Film"  ინფორმაციას იღებს შემდეგი წყაროებიდან:' },
      List: {
        props: {},
        $propsCollection: [
          'როდესაც მომხმარებელი ავსებს ვებგვერდზე პროდუქტის შეძენის ფორმას',
          'როდესაც კომუნიკაცია ხდება ტელეფონის ან ელექტრონული ფოსტის მეშვეობით',
          'როდესაც მომხმარებელი იყენებს "Pavilion Film" -ის ვებგვერდს'
        ].map(text => ({ text }))
      }
    }, {
      props: { margin: 'C 0 0' },
      H5: { text: 'რა სახის მონაცემები მუშავდება' },
      P: { text: 'ვებგვერდზე რეგისტრაციისას მომხმარებელი უთითებს შემდეგ ინფორმაციას:' },
      List: {
        props: {},
        $propsCollection: [
          'მობილურის ნომერი',
          'ელექტრონული ფოსტა',
          'მისამართი',
          'სახელი და გვარი'
        ].map(text => ({ text }))
      },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'რეგისტრაციისთვის აუცილებელია აღნიშნული ინფორმაციის მითითება, რომლის გარეშე მომხმარებელი ვერ განახორციელებს ვებგვერდზე რეგისტრაციას.',
          'პროდუქციის შერჩევის შემდგომ მომხმარებელი ანგარიშსწორების მიზნით გადამისამართდება ბანკის ანგარიშსწორების გვერდზე, სადაც უთითებს მისი ბარათის მონაცემებს და ადასტურებს გადარიცხვას. "Pavilion Film" -ს არ აქვს წვდომა მომხმარებლის საბანკო ბარათის მონაცემებზე. "Pavilion Film"  იღებს ინფორმაციას მომხმარებლის მიერ ანგარიშსწორების შესახებ.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'კონფიდენციალური მონაცემების შენახვის ვადა' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          '"Pavilion Film"  პასუხისმგებლობას იღებს მომხმარებლის პერსონალური მონაცემების საიდუმლოებასა და უსაფრთხოებაზე.',
          'მომხმარებლის შესახებ კონფიდენციალურ ინფორმაციას "Pavilion Film"  ინახავს კანონმდებლობით და წინამდებარე პოლიტიკით გათვალისწინებული მიზნის მიღწევისათვის საჭირო ვადით.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'უსაფრთხოება' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          '"Pavilion Film" -ისთვის მნიშვნელოვანია მომხმარებლის მიერ მიწოდებული კონფიდენციალური ხასიათის ინფორმაციის დაცვა. მომხმარებლის პირადი პროფილი ხელმისაწვდომია მხოლოდ მის მიერ შერჩეული მომხმარებლის სახელისა და ფასვორდის საშუალებით. "Pavilion Film"  გთხოვთ, აღნიშნული ინფორმაცია არ გაანდოთ მესამე პირებს. წინააღმდეგ შემთხვევაში "Pavilion Film"  იხსნის სრულ პასუხისმგებლობას.',
          '"Pavilion Film"  მიმართავს ყველა ზომას მომხმარებლის კონფიდენციალური ინფორმაციის დაცვის მიზნით, თუმცა არ იღებს პასუხისმგებლობას და არ იძლევა გარანტიას მესამე პირების ქმედებებზე, რომლებიც ახორციელებენ კანონსაწინააღმდეგო შეღწევას "Pavilion Film" -ის სერვერებზე.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მესამე მხარე' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          '"Pavilion Film"  იხსნის ყოველგვარ პასუხისმგებლობას სხვა ვებგვერდებთან მიმართებით, რომლებიც შესაძლებელია გარე ბმულის სახით განთავსებული იყოს "Pavilion Film" -ის ვებგვერდზე. სხვა ვებგვერდის კონფიდენციალურობის პოლიტიკა შესაძლოა განსხვავდებოდეს წინამდებარე პოლიტიკისგან. შესაბამისად, "Pavilion Film"  მოგიწოდებთ გაეცნოთ გარე ბმულის სახით მითითებული ვებგვერდის გამოყენების პირობებსა და კონფიდენციალურობის პოლიტიკას.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'ცვლილებები და დამატებები' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'შესაძლებელია წინამდებარე დოკუმენტში განხორციელდეს ცვლილებები და დამატებები. ცვლილებების ან დამატებების შეტანის შემთხვევაში მომხმარებელი მიიღებს პირად შეტყობინებას ან გამოქვეყნდება ვებგვერდზე.',
          'ცვლილებები და დამატებები ძალაში შედის "Pavilion Film" -ის მიერ მომხმარებლისათვის პირადი შეტყობინების გაგზავნის ან ვებგვერდზე გამოქვეყნების შემდეგ. ცვლილებებისა და დამატებების ძალაში შესვლის შემდგომ, მომხმარებლის მიერ ვებგვერდით სარგებლობა განხილული იქნება როგორც შეცვლილ პირობებზე თანხმობა.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: '"Pavilion Film"-თან დაკავშირება' },
      props: { margin: 'C 0 0' },
      Paragraphs: {
        childExtend: P,
        $propsCollection: [
          'კონფიდენციალურობის პოლიტიკასთან დაკავშირებული კითხვებისა და დამატებითი ინფორმაციის მიღების მიზნით დაგვიკავშირდით info@pavilion.film'
        ].map(text => ({ text }))
      }
    }]
  }
}

export const refund = {
  extend: Static,
  LogoHeader: {},

  content: {
    extend: Flex,
    props: { flow: 'column' },
    H2: { order: -2, text: 'დაბრუნების პოლიტიკა' },
    P: { order: -1, text: 'დაბრუნების პოლიტიკა / პროდუქტის უკან დაბრუნების პოლიტიკა' },
    P_2: {
      text: 'პროდუქტის უკან დაბრუნება შესაძლებელია მისი მიღებიდან 1 კვირის მანძილზე, მხოლოდ იმ შემთხვევაში თუ პროდუქტი არაა გახსნილი, დაზიანებული ან გამოყენებული.'
    },

    div: {
      P: { text: 'პროდუქტის დაბრუნების პირობები:' },
      List: {
        props: {},
        $propsCollection: [
          'პირველ რიგში საჭიროა, დაგვიკავშირდეთ ჩვენს ნომერზე და განაცხადოთ მიზეზი რის საფუძველზეც ხდება პროდუქტის უკან დაბრუნება.',
          'დაბრუნებისთვის საჭიროა წარმოადგინოთ ჩეკი (შეკვეთის დოკუმენტი), რომელიც მისი შეძენისას გადმოგეცათ.',
          'იმ შემთხვევაში თუ თვლით, რომ პროდუქტს აქვს ქარხნული ნაკლი, პროდუქტის მიღებიდან 1 კვირის მანძილზე, უნდა მოგვმაროთ ზარით. ჩვენი კომპანია შეამოწმებს მას და 3-5 სამუშაო დღის მანძილზე შეგატყობინებთ პასუხს აღნიშნულ საკითხზე.',
          'იმ შემთხვევაში თუ ზედა კრიტერიუმების განხილვის შემდეგ კომპანია მიიღებს პროდუქტის უკან დაბრუნების გადაწყვეტილებას,თქვენ გაქვთ უფლება, როგორც გადაცვალოთ პროდუქტი, ასევე დაიბრუნოთ უკან თანხა.',
          'თანხის უკან დაბრუნება მოხდება საბანკო გადარიცხვით 2-3 სამუშაო დღის შუალედში შემკვეთის კუთვნილ საბანკო ანგარიშზე.'
        ].map(text => ({ text }))
      }
    }
  }
}

export const shipping = {
  extend: Static,
  LogoHeader: {},

  content: {
    extend: Flex,
    props: { flow: 'column', gap: 'B1' },
    H2: { order: -2, text: 'მიტანის სერვისი' },

    ...[{
      H5: { text: 'მიწოდება თბილისის მაშტაბით:' },
      List: {
        props: {},
        $propsCollection: [
          'მიტანის სერვისის ღირებულება თბილისის მაშტაბით შეადგენს 5 ლარს.',
          'მიტანის სერვისი მუშაობს ორშაბათიდან პარასკევის ჩათვლით 11:00 – 18:00',
          'მიწოდება ხდება შეკვეთის გაფორმებიდან 2 სამუშაო დღის მანძილზე.',
          'შეგიძლიათ ისარგებლოთ ექსპრეს შეკვეთით, რომელიც გულისხმობს 18:00 საათამდე დაფიქსირებული შეკვეთის იმავე სამუშაო დღეს მიღებას, რომლის ღირებულებაა 10 ლარი.',
          'თუ შეკვეთის ჯამური ღირებულება შეადგენს 100 ლარს ან მეტს მიტანის სერვისი უფასოა.',
          'პროდუქტის ღირებულების გადახდა შეგიძლიათ, როგორც ჩვენი ვებგვერდიდან საბანკო ბარათის გამოყენებით, ასევე კომპანიის ანგარიშზე თანხის გადმორიცხვით.'
        ].map(text => ({ text }))
      }
    }, {
      H5: { text: 'მიწოდება საქართვლოს მაშტაბით:' },
      P: { text: 'საქართველოს მაშტაბით მიწოდების სარგებლობისას პროდუქტის ღირებულები გადახდა ხდება მხოლოდ ონლაინ საბანკო ანგარიშის საშუალებით ან კომპანიის ანგარიშზე თანხის წინასწარი გადმორიცხვით.' }
    }, {
      H5: { text: 'საქართველოს ფოსტა:' },
      P: { text: 'შეკვეთის შესრულებიდან მეორე სამუშო დღეს ხდება შეკვეთის საქართველოს ფოსტისთვის გადაცემა, რომლის ტრანსპორტირების საშუალო დრო გახლავთ 2-3 სამუშაო დღე. გზავნილის ასაღებად უნდა მიბრძანდეთ შესაბამის საქართველოს ფოსტის ფილიალში. ტრანსპორტიების ღირებულებას იხდით ამანათის აღებისას გზავნილის წონის მიხედვით.' }
    }]
  }
}
