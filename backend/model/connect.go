package model

import (
	"good-reads/views"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func add_genresdb() {

	var genres1 views.Genres
	result := DB.Find(&genres1)

	if result.RowsAffected != 0 {
		return
	}

	var genres = []views.Genres{
		{Name: "Comics", Description: "A comic book or comicbook, also called comic magazine or simply comic, is a publication that consists of comic art in the form of sequential juxtaposed panels that represent individual scenes. Panels are often accompanied by brief descriptive prose and written narrative, usually dialog contained in word balloons emblematic of the comics art form.", Count: 5},
		{Name: "Romance", Description: "According to the Romance Writers of America, Two basic elements comprise every romance novel: a central love story and an emotionally-satisfying and optimistic ending. Both the conflict and the climax of the novel should be directly related to that core theme of developing a romantic relationship, although the novel can also contain subplots that do not specifically relate to the main characters' romantic love. Other definitions of a romance novel may be broader, including other plots and endings or more than two people, or narrower, restricting the types of romances or conflicts.", Count: 8},
		{Name: "Mystery", Description: "Mystery fiction is a loosely-defined term that is often used as a synonym of detective fiction — in other words a novel or short story in which a detective (either professional or amateur) solves a crime. The term mystery fiction may sometimes be limited to the subset of detective stories in which the emphasis is on the puzzle element and its logical solution (cf. whodunit), as a contrast to hardboiled detective stories which focus on action and gritty realism. However, in more general usage mystery may be used to describe any form of crime fiction, even if there is no mystery to be solved. For example, the Mystery Writers of America describes itself as - the premier organization for mystery writers, professionals allied to the crime writing field, aspiring crime writers, and those who are devoted to the genre", Count: 10},
		{Name: "Thriller", Description: "Thrillers are characterized by fast pacing, frequent action, and resourceful heroes who must thwart the plans of more-powerful and better-equipped villains. Literary devices such as suspense, red herrings and cliffhangers are used extensively.\n Thrillers often overlap with mystery stories, but are distinguished by the structure of their plots. In a thriller, the hero must thwart the plans of an enemy, rather than uncover a crime that has already happened. Thrillers also occur on a much grander scale: the crimes that must be prevented are serial or mass murder, terrorism, assassination, or the overthrow of governments. Jeopardy and violent confrontations are standard plot elements. While a mystery climaxes when the mystery is solved, a thriller climaxes when the hero finally defeats the villain, saving his own life and often the lives of others.", Count: 6},
		{Name: "Horror", Description: "Horror fiction is fiction in any medium intended to scare, unsettle, or horrify the audience. Historically, the cause of the horror experience has often been the intrusion of a supernatural element into everyday human experience. Since the 1960s, any work of fiction with a morbid, gruesome, surreal, or exceptionally suspenseful or frightening theme has come to be called horror. Horror fiction often overlaps science fiction or fantasy, all three of which categories are sometimes placed under the umbrella classification speculative fiction. ", Count: 5},
		{Name: "Cook-Books", Description: "Non-fiction books that contain a collection of recipes, techniques, and tricks of the trade or else focus on the exploration of food, cooking, and culture of food. Many cookbooks are divided into sections such as baking, dinner, and breakfast. A specialty cookbook may focus only on a certain country's cuisine, such as Italian or Cajun. There are some cookbooks that are written to highlight one ingredient (i.e. honey), and some cookbooks focused on only one branch of cooking (such as bread.) Even further, some cookbooks focus on types of cooking (microwave, barbecue, baking.)", Count: 12},
		{Name: "Children's", Description: "Children's literature is for readers and listeners up to about age 12. It is often illustrated. The term is used in senses that sometimes exclude young-adult fiction, comic books, or other genres. Books specifically for children existed at least several hundred years ago.", Count: 5},
		{Name: "Classics", Description: "A classic stands the test of time. The work is usually considered to be a representation of the period in which it was written; and the work merits lasting recognition. In other words, if the book was published in the recent past, the work is not a classic.\n A classic has a certain universal appeal. Great works of literature touch us to our very core beings--partly because they integrate themes that are understood by readers from a wide range of backgrounds and levels of experience. Themes of love, hate, death, life, and faith touch upon some of our most basic emotional responses. ", Count: 8},
		{Name: "Fiction", Description: "Fiction is the telling of stories which are not real. More specifically, fiction is an imaginative form of narrative, one of the four basic rhetorical modes. Although the word fiction is derived from the Latin fingo, fingere, finxi, fictum, to form, create, works of fiction need not be entirely imaginary and may include real people, places, and events. Fiction may be either written or oral. Although not all fiction is necessarily artistic, fiction is largely perceived as a form of art or entertainment. The ability to create fiction and other artistic works is considered to be a fundamental aspect of human culture, one of the defining characteristics of humanity.", Count: 10},
		{Name: "Nonfiction", Description: "Nonfiction is an account or representation of a subject which is presented as fact. This presentation may be accurate or not; that is, it can give either a true or a false account of the subject in question. However, it is generally assumed that the authors of such accounts believe them to be truthful at the time of their composition. Note that reporting the beliefs of others in a nonfiction format is not necessarily an endorsement of the ultimate veracity of those beliefs, it is simply saying that it is true that people believe that (for such topics as mythology, religion). Nonfiction can also be written about fiction, giving information about these other works.", Count: 6},
		{Name: "Sports", Description: "Sports : engagement in physical activity intended to create a benefit to the participant. Ranging from Amateur to Professional, from incompetent to proficient, for all levels of ability, all nations, all creeds, all genders.", Count: 5},
		{Name: "Fantasy", Description: "Fantasy is a genre that uses magic and other supernatural forms as a primary element of plot, theme, and/or setting. Fantasy is generally distinguished from science fiction and horror by the expectation that it steers clear of technological and macabre themes, respectively, though there is a great deal of overlap between the three (collectively known as speculative fiction or science fiction/fantasy) \n In its broadest sense, fantasy comprises works by many writers, artists, filmmakers, and musicians, from ancient myths and legends to many recent works embraced by a wide audience today, including young adults, most of whom are represented by the works below.", Count: 12},
		{Name: "Travel", Description: "Travel is the movement of people or objects (such as airplanes, boats, trains and other conveyances) between relatively distant geographical locations. The term travel originates from the Old French word travail. Travel writing is a genre that has, as its focus, accounts of real or imaginary places. The genre encompasses a number of styles that may range from the documentary to the evocative, from literary to journalistic, and from the humorous to the serious. Travel writing is often associated with tourism, and includes works of an ephemeral nature such as guide books and reviews, with the intent being to educate the reader about the destination, provide helpful advice for those visiting the destination, and inspire readers to travel to the destination. Travel writing has also been produced by other types of travelers, such as military officers, missionaries, explorers, scientists, pilgrims, and migrants.", Count: 12},
		{Name: "Poetry", Description: "Poetry is a form of literary art in which language is used for its aesthetic and evocative qualities in addition to, or in lieu of, its apparent meaning. Poetry may be written independently, as discrete poems, or may occur in conjunction with other arts, as in poetic drama, hymns or lyrics.", Count: 12},
		{Name: "Young-adult", Description: "Young-adult fiction (often abbreviated as YA) is fiction written for, published for, or marketed to adolescents and young adults, roughly ages 13 to 18. \n Young-adult fiction, whether in the form of novels or short stories, has distinct attributes that distinguish it from the other age categories of fiction. The vast majority of YA stories portray an adolescent as the protagonist, rather than an adult or a child. The subject matter and story lines are typically consistent with the age and experience of the main character, but beyond that YA stories span the entire spectrum of fiction genres. The settings of YA stories are limited only by the imagination and skill of the author. ", Count: 12},
		{Name: "business", Description: "A business (also known as enterprise or firm) is an organization engaged in the trade of goods, services, or both to consumers. Businesses are predominant in capitalist economies, where most of them are privately owned and administered to earn profit to increase the wealth of their owners. Businesses may also be not-for-profit or state-owned. A business owned by multiple individuals may be referred to as a company, although that term also has a more precise meaning.", Count: 12},
	}

	DB.Create(&genres)
}

func Connect() *gorm.DB {
	log.Println("sqlite-database.db opening...")
	db, err := gorm.Open(sqlite.Open("./databases/books.db"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	} else {
		log.Println("books.db opened")
	}
	db.AutoMigrate(&views.Genres{})
	db.AutoMigrate(&views.Book{})
	DB = db
	add_genresdb()
	return DB
}
