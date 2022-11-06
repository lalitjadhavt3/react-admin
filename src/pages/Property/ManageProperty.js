import React from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import axios from "axios"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"
import { useState, useEffect } from "react"
import * as url from "../../helpers/url_helper"
import { post, del, get, put } from "../../helpers/api_helper"

const ManageProperty = () => {
  const [data2, setData] = useState([]);
  useEffect(() => {
    async function getToken() {
      await get('https://lalitjadhav.in/adminapi/getProperty.php').then(response => {
        setData(response.data['data']);

      })
    }
    getToken();
  }, [])

  const data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "borrowername",
        sort: "asc",
        width: 270,
      },

    ],

  }

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Property" breadcrumbItem="Manage Property" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>Property List</CardTitle>

                {data2 && (
                  <MDBDataTable responsive bordered rows={data2} columns={data.columns} />
                )}

              </CardBody>
            </Card>
          </Col>
        </Row>


      </div>

    </React.Fragment>
  )
}

export default ManageProperty
