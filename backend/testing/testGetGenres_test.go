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

func TestGetGenre(t *testing.T) {
	model.Connect()
	req, err := http.NewRequest("GET", "/getGenreForID?id=5", nil)
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(controller.GetGenreForIDHandler())
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
	expected := `{"Id":5,"Name":"Horror","Description":"Horror fiction is fiction in any medium intended to scare, unsettle, or horrify the audience. Historically, the cause of the horror experience has often been the intrusion of a supernatural element into everyday human experience. Since the 1960s, any work of fiction with a morbid, gruesome, surreal, or exceptionally suspenseful or frightening theme has come to be called horror. Horror fiction often overlaps science fiction or fantasy, all three of which categories are sometimes placed under the umbrella classification speculative fiction. ","Count":5,"CreatedAt":"2022-02-04T21:26:13.3915407-05:00","UpdatedAt":"2022-02-04T21:26:13.3915407-05:00"}`
	got := strings.TrimSpace(rr.Body.String())
	if got != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			got, expected)
		fmt.Println(len(rr.Body.String()), "------", len(expected))
	}
}
