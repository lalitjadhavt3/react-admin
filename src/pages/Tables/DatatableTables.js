import React from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

const DatatableTables = () => {
  const columns = [

    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "Position",
      field: "position",
      sort: "asc",
      width: 270,
    },
    {
      label: "Office",
      field: "office",
      sort: "asc",
      width: 200,
    },
    {
      label: "Age",
      field: "age",
      sort: "asc",
      width: 100,
    },
    {
      label: "Start date",
      field: "date",
      sort: "asc",
      width: 150,
    },
    {
      label: "Salary",
      field: "salary",
      sort: "asc",
      width: 100,
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>Default Datatable </CardTitle>
                <CardSubtitle className="mb-3">
                  mdbreact DataTables has most features enabled by default, so
                  all you need to do to use it with your own tables is to call
                  the construction function:{" "}
                  <code>&lt;MDBDataTable /&gt;</code>.
                </CardSubtitle>

                <MDBDataTable responsive bordered columns={columns} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>Stripped example </CardTitle>
                <CardSubtitle className="mb-3">
                  mdbreact DataTables has most features enabled by default, so
                  all you need to do to use it with your own tables is to call
                  the construction function:{" "}
                  <code>&lt;MDBDataTable striped /&gt;</code>.
                </CardSubtitle>

                <MDBDataTable responsive striped bordered />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    </React.Fragment>
  )
}

export default DatatableTables
