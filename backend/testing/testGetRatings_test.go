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

func TestGetBookRatings(t *testing.T) {
	model.Connect()
	req, err := http.NewRequest("GET", "/fetchBookRatings?id=7", nil)
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(controller.FetchBookRatingsHandler())
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
	expected := `{"book_id":"7","five_stars":1,"four_stars":1,"three_stars":1,"two_stars":1,"one_stars":1}`
	got := strings.TrimSpace(rr.Body.String())

	if got != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			got, expected)
		fmt.Println(len(rr.Body.String()), "------", len(expected))
	}
}
