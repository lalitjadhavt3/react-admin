import React, { useState } from "react"

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Label,
  Input,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const EditProperty = () => {
  const [customchk, setcustomchk] = useState(true)
  const [toggleSwitch, settoggleSwitch] = useState(true)

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Form" breadcrumbItem="Form Elements" />

        <Row>
          <Col>
            <Card>
              <CardBody>
                <h2 style={{marginBottom:'5%'}}>Add Property</h2>
                

                <Row className="mb-3">
                  <div className="col-md-4">
                    <Label className="form-label">Default input</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Default input"
                    />
                  </div>
                  <div className="col-md-4">
                    <Label className="form-label">Default input</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Default input"
                    />
                  </div>
                  <div className="col-md-4">
                    <Label className="form-label">Default input</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Default input"
                    />
                  </div>
                </Row>
                
               
                <Row className="mb-3">
                  <label
                    htmlFor="example-datetime-local-input"
                    className="col-md-2 col-form-label"
                  >
                    Date and time
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="datetime-local"
                      defaultValue="2019-08-19T13:45:00"
                      id="example-datetime-local-input"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-date-input"
                    className="col-md-2 col-form-label"
                  >
                    Date
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="date"
                      defaultValue="2019-08-19"
                      id="example-date-input"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-month-input"
                    className="col-md-2 col-form-label"
                  >
                    Month
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="month"
                      defaultValue="2019-08"
                      id="example-month-input"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-week-input"
                    className="col-md-2 col-form-label"
                  >
                    Week
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="week"
                      defaultValue="2019-W33"
                      id="example-week-input"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-time-input"
                    className="col-md-2 col-form-label"
                  >
                    Time
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="time"
                      defaultValue="13:45:00"
                      id="example-time-input"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-color-input"
                    className="col-md-2 col-form-label"
                  >
                    Color
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control form-control-color mw-100"
                      type="color"
                      defaultValue="#556ee6"
                      id="example-color-input"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label">Select</label>
                  <div className="col-md-10">
                    <select className="form-control">
                      <option>Select</option>
                      <option>Large select</option>
                      <option>Small select</option>
                    </select>
                  </div>
                </Row>
                <Row>
                  <label className="col-md-2 col-form-label">
                    Datalists
                    </label>
                  <div className="col-md-10">
                    <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                    <datalist id="datalistOptions">
                      <option value="San Francisco" />
                      <option value="New York" />
                      <option value="Seattle" />
                      <option value="Los Angeles" />
                      <option value="Chicago" />
                    </datalist>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="h4 mb-4">Checkboxes</CardTitle>

                <Row>
                  <Col md={6}>
                    <div>
                      <h5 className="font-size-14 mb-4">
                        Form Checkboxes
                        </h5>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck1"
                        >
                          Default Checkbox
                          </label>
                      </div>
                      <div className="form-check form-check-end">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck2"
                        >
                          Checked Checkbox
                          </label>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <h5 className="font-size-14 mb-4"> Form Check Right</h5>
                      <div className="form-check form-check-right mb-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="CustomCheck1"

                        />
                        <label
                          className="form-check-label"
                        >
                          Form Checkbox Right
                          </label>
                      </div>

                      <div className="form-check form-check-right">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck2"
                          onChange={() => false}
                          checked={customchk}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheck2"
                          onClick={() => {
                            setcustomchk(!customchk)
                          }}
                        >
                          Form Checkbox Right checked
                          </label>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="h4 mb-4">Radios</CardTitle>

                <Row>
                  <Col md={6}>
                    <div>
                      <h5 className="font-size-14 mb-4">Default Radios</h5>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Default Radio
                          </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          Checked Radio
                          </label>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div>
                      <h5 className="font-size-14 mb-4">Form radio right</h5>
                      <div>
                        <div className="form-check form-check-right mb-2">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customRadio1"
                          >
                            Form Radio Right
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="form-check form-check-right">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="customRadio"
                            className="form-check-input"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customRadio2"
                          >
                            Form Radio Checked Right
                          </label>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="h4">Switches</CardTitle>
                <p className="card-title-desc">
                  A switch has the markup of a custom checkbox but uses the <code>.form-switch</code> class to render a toggle switch. Switches also support the <code>disabled</code> attribute.
                  </p>
                <div>
                  <div className="form-check form-switch" dir="ltr">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customSwitch2"
                      defaultChecked
                      onClick={e => {
                        settoggleSwitch(!toggleSwitch)
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="customSwitch2"
                    >
                      Checked switch checkbox input
                          </label>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="h4">File browser</CardTitle>
                <p className="card-title-desc">The file input is the most gnarly of the bunch and
                requires additional JavaScript if you’d like to hook them up with functional
                                    <em>Choose file…</em> and selected file name text.
                                </p>

                <div className="input-group">
                  <Input type="file" className="form-control" id="inputGroupFile02" />
                  <Label className="input-group-text" for="inputGroupFile02">Upload</Label>
                </div>

              </CardBody>
            </Card>
          </Col>

        </Row>
        


      </div>
    </React.Fragment>
  )
}

export default EditProperty
