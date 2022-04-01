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