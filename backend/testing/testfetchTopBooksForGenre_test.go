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

func TestFetchTopBooksForGenre(t *testing.T) {
	model.Connect()
	req, err := http.NewRequest("GET", "/fetchTopBooksForGenre?id=5", nil)
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(controller.FetchTopBooksForGenreHandler())
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	got := strings.TrimSpace(rr.Body.String())

	if len(got) == 0 {
		fmt.Println("There are no top books for this GenreID ")
	} else {
		fmt.Println(" Received top 5 books for Genre ID 5 ")
	}
}
