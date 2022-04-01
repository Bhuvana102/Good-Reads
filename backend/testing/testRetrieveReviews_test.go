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

func TestRetrieveReviews(t *testing.T) {
	model.Connect()
	req, err := http.NewRequest("GET", "/retrieveReviews?rindex=7&BookID=6", nil)
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(controller.RetrieveReviewsHandler())
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	got := strings.TrimSpace(rr.Body.String())

	if len(got) == 0 {
		fmt.Println("There are no more Reviews Present")
	} else {
		fmt.Println("Reviews Received from 7th index for BookID 6")
	}
}
