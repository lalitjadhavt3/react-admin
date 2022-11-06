import React from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Label } from "reactstrap"
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
    async function getRows() {
      await get('https://lalitjadhav.in/adminapi/getProperty.php').then(response => {
        setData(response.data['data']);
      })
    }
    getRows();
  }, [])
  const rows = data2.map(post => ({
    id: <div key={post.id} > {post.id}</div>,
    image: <div key={post.id} ><img style={{ width: '200px', height: '150px' }} src={post.image} /> </div>,
    borrowername: <div key={post.id} >{post.borrowername} </div>,
    updated_at: <div key={post.id} > {post.updated_at}</div>,
  }));
  const data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",

      },
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 200
      },
      {
        label: "Name",
        field: "borrowername",
        sort: "asc",

      },
      {
        label: "DateTime",
        field: "updated_at",
        sort: "asc",

      },

    ],
    rows
  }

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Property" breadcrumbItem="Manage Property" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle>Property List <Label>(Total {data2.length} Properties)</Label></CardTitle>

                {data2.length > 0 && (
                  <MDBDataTable noBottomColumns={true} responsive bordered data={data} />

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
