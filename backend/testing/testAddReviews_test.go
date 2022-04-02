package testing

import (
	"bytes"
	"encoding/json"
	"fmt"
	"good-reads/model"
	"io/ioutil"
	"net/http"
	"testing"
)

type ReviewTest struct {
	Book_ID string
	User_ID string
	Rating  uint8
	Review  string
}

func TestAddReviews(t *testing.T) {
	model.Connect()

	// review1 := `{"Book_ID":"6","User_ID":"28","Rating":2,"Review":"hard to grasp "}`

	var cod ReviewTest

	var jsonStr = []byte(`{"Book_ID":"6","User_ID":"28","Rating":2,"Review":"hard to grasp "}`)

	err := json.Unmarshal(jsonStr, &cod)

	jsonbuf, _ := json.Marshal(cod)

	req, err := http.NewRequest("POST", "/addReviews", bytes.NewBuffer(jsonbuf))

	if err != nil {
		panic(err)
	}

	// req, err := http.NewRequest("POST", "/addReviews", bytes.NewBuffer(jsonbuf))

	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)

	if err != nil {
		panic(err)
	}

	fmt.Println("response Status:", resp.Status)
	fmt.Println("response Headers:", resp.Header)
	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println("response Body:", string(body))
}
