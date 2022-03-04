package testing

import (
	"fmt"
	"good-reads/controller"
	"good-reads/model"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestGetBook(t *testing.T) {
	model.Connect()
	req, err := http.NewRequest("GET", "/getBook?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(controller.FetchBookDataHandler())
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
	expected := `{"ID":1,"Name":"Anatomy: A Love Story","Description":"A gothic tale full of mystery and romance about a willful female surgeon, a resurrection man who sells bodies for a living, and the buried secrets they must uncover together.","AuthorName":"Dana Schwartz","GenreId":5,"PublisherName":"Wednesday Books","ImageName":"image1","PublishedYear":"","AvgRating":0,"NoOfRatings":0,"NoOfReviews":0,"CreatedAt":"2022-02-04T21:27:43.9907152-05:00","UpdatedAt":"2022-02-04T21:27:43.9907152-05:00"}`
	got := strings.TrimSpace(rr.Body.String())
	if got != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			got, expected)
		fmt.Println(len(rr.Body.String()), "------", len(expected))
	}
}
