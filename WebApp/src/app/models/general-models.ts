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