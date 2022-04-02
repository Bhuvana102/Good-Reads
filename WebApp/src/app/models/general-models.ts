export interface GenreModel {
    Id: string;
    Name: string;
    Description: string;
  }

  export interface GenreDetailsModel {
    ID:            number;
    Name:          string;
    Description:   string;
    AuthorName:    string;
    GenreId:       number;
    PublisherName: string;
    ImageName:     string;
    CreatedAt:     Date;
    UpdatedAt:     Date;
}

export interface ReviewPostData{
    Book_ID:string;
    User_ID:string;
    Rating:Number;
    Review:string;
}

export interface IndividualRatings{
  book_id: string;
  five_stars: number;
  four_stars: number;
  three_stars: number;
  two_stars: number;
  one_stars: number;
}

export interface ReviewModal{
    Review_Num: number;
    Book_ID: string;
    User_ID: string;
    Rating: number;
    Review: string;
    Reviewed_Date: string;
}