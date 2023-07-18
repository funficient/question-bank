function card(type, title, description, brand) {
    this.type = type;
    this.title = title;
    this.description = description;
    this.brand = brand;
    
}

var deck = [
    new card('Placement', 'How might we associate with a complementary brand?', 'Unlike most fashion retailers, Zara has a very small ad budget. They don’t spend money on advertising, but invest in retail space next to wellknown luxury brands they can be associated with.', 'tango'),
    new card('Product', 'How might we get better user feedback?', 'Zara releases small batches of new collections regularly and adapt the styles based on customer feedback before the next batch is produced.  They observe people in public wearing the brand and adapt their styles based on this real-life feedback.', 'zara'),
    new card('Pricing', 'How might we make older products more desirable?', 'Zara showcases their older items next to a few new collection items before a sale to increase sales and desirability of the new collections.', 'old'),
    new card('Product', 'How might we meet customer needs better?', 'Zara designs their new collections based on what customers say and how they wear it in the real world.', 'lollipop'),
    new card('Technology', 'How might we make customers curious to interact with our products?', 'Using an augmented reality app, Zara customers can dress up shop window models with selected fashion.', 'augmented'),
    new card('Placement', 'How might we attract people to build our products?', 'Ethereum has a small team with a global reach.  They create an online environment for crypto lovers to create and market products they love, strenghtening the platform, all without ever employing or paying these creators.', 'volunteer'),
    new card('Process', 'How might we support co-creation?', 'Ethereum has a friendly, helpful Discord community to help and support people interested in building crypto products. They bring together people in monthly hackathons and check-in regularly to ensure everyone has what they need to build products to strenghten the platform.', 'collaborate'),
    new card('Pricing', 'How might we benefit from constraints?', 'Ethereum introduced an extra gas fee based on network load to deter people from transacting during peak times.', 'restrict'),
    new card('Process', 'How might we give early form to an idea?', 'Walt Disney studios introduced the storyboard as prototyping tool to make sure no scenes were missing before shooting the film, saving them millions.', 'prototype'),
    new card('Technology', 'How might we communicate our idea better?', 'When Wi-Fi communications were in its infancy, Vocera developed a video scenario to demonstrate how employees could stay connected with a wearable, voice-controlled badge to demonstrate its benefits within context.', 'movie'),
    
    new card('Product', 'How might we encourage desired behaviors?', 'Bank of America automatically rounds up card purchases and transfers the difference into a savings account called "Keep the change" to cultivate a culture of saving in customers.', 'save'),
    new card('Product', 'How might we be more sustainable?', 'Polyester, mostly made from oil forms as much as half of all clothing made and contributing to as much as a quarter of the total carbon budget globally.  Patagonia, one of the most loved and successful outdoor clothing brands, uses recycled plastic to create their polyester, in an attempt to reduce the carbon footprint in a circular economy model.', 'fashion'),
    new card('Pricing', 'How might we protect the source of our wealth for sustainable profit?', 'Patagonia, a successful outdoor clothing brand, invests their profit to causes that fight climate change, prioritizing protecting the source of their wealth - cotton and other raw materials -  over short-term profit for shareholders.', 'cotton'),
    new card('Product', 'How might we gain a better undertanding of our user needs?', 'Four Seasons Hotels, famous for their quality of service, gives employees a perk that allows them to stay at any of its hotels worldwide for free to put them in the shoes of a customer.', 'hotel'),
    new card('Product', 'How might we make our product timeless?', 'Instead of offering kids ready-made toys they easily bore of, LEGO introduced and sells a system where children can build an infinite amount of different toys by arranging blocks in numerous configurations.', 'lego'),
    new card('Product', 'How might we simplify our product?', 'Apple famously created a cult-like following by being non-negiotable about simplicity and quality.  They removed all features that could distract or confuse a user and focused on doing one thing really well, rather than many things mediocre.', 'ipod'),
    new card('Pricing', 'How might we get recurring income from a product?', 'Windows became a monopoly and the most used Operating System globally by introducing a licensing model that sold rights to computer manufacturers to pre-install and use its product, rather than sell it to them.', 'contract'),
    new card('Placement', 'How might we get users to freely give the resources we need?', 'Google became one of the most loved brands by giving away free applications like maps and email, which allowed them to gather data in their vision "to organize the worlds information and make it universally accessible and useful".', 'google'),
    new card('Technology', 'How might we make our product easier to use?', 'Amazon became one of the biggest companies globally by using technology to make it so easy for customers to buy that they preferred the variety and speed of online purchases over supporting local shops.', 'amazon'),
    new card('Technology', 'How might we make our product more accessible?', 'Netflix disrupted traditional television by allowing subscribers to watch what they want, when they want it, on any device they want.', 'netflix'),

    new card('Pricing', 'How might we encourage sharing?', 'Calendly provides a free calendar scheduling service for individuals. They target those individuals who frequently collaborate as a team for a premium package with extra features for teams and collaborators.', 'calendly'),
    new card('Product', 'How might we create higher customer retention?', 'Farmville became the most popular social game because they gave users a sense of ownership by giving them responsibility to look after and grow their resources. They gave users autonomy to personalize their farm, giving them a reason to come back each day.', 'farmville'),
    new card('Technology', 'How might we make our product easy to integrate?', 'Stripe became one of the most popular payment processing service providers with a mission to raise the economic value of the internet. They dont only focus on the user featuers, a core focus of their product strategy is to create a great developer experience to allow Stripe to be integrated more easily.', 'stripe'),
    new card('Product', 'How might we support new users better?', 'Airtable categorizes new users based on their learning style and goals rather than function or role.  They personalize the onboarding experience to support new users based on their specific needs to get started.', 'airtable-onboarding'),
    new card('Product', 'How might we focus our efforts on customers who will be with us for the long haul?', 'Airtable focus their effort for improvement on the 5% of users that still actively use the product after a year rather than perhaps 40% of users that is active within the first month but then drop off.', 'airtable-retention'),
    new card('Product', 'How might we augment the user experience?', 'Zombies Run gamifies the running experience by overlaying your music player with a fictional story where you are running away from Zombies, making running more fun.', 'zombies-run'),
    new card('Product', 'How might we build community?', 'Basecamp opened up their platform to fans.  They share user success stories, how different people use Basecamp, and ask users what features they most want, all within their own product.', 'basecamp'),
    new card('Product', 'How might we delight our customers children?', 'The Magic Castel Hotel has a Popsicle hotline where children can order free popsicles.  The children love this, resulting in happy parents who refers it to their friends.', 'popsicle'),

]

function getRandom(number) {
    var randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
}

document.getElementById("shuffle").onclick = function(){
    var index = getRandom(28);
    var currentCard = deck[index];

    document.getElementById("brand").innerHTML = '<img src="/assets/' + currentCard.brand + '.jpg"></img>';
    document.getElementById("display").innerHTML = '<h3>' + currentCard.type + '</h3><h2>' + currentCard.title + '</h2><p>' + currentCard.description + '</p>';
};
