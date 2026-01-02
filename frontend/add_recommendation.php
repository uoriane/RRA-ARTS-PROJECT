<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add Recommendation</title>

  <!-- Bootstrap CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Your custom CSS -->
  <link rel="stylesheet" href="css/style.css">
</head>

<body class="bg-light">

  <?php include('navbar.html'); ?>

  <div class="container my-5">
    <div class="card shadow">
      <div class="card-body">
        <h2 class="card-title text-success mb-4">Add Audit Recommendation</h2>

        <form id="recommendationForm" class="row g-3">

          <div class="col-md-6">
            <input name="title" type="text" class="form-control" placeholder="Title" required>
          </div>

          <div class="col-md-6">
            <input name="team" type="text" class="form-control" placeholder="Audit Team" required>
          </div>

          <div class="col-md-6">
            <select name="auditType" class="form-select" required>
              <option value="">Audit Type</option>
              <option>Internal Audit</option>
              <option>External Audit</option>
              <option>QMS Internal</option>
              <option>QMS External</option>
            </select>
          </div>

          <div class="col-md-6">
            <select name="department" class="form-select" required>
              <option value="">Department</option>
              <option>Commissioner General Office</option>
              <option>Domestic Taxes Department</option>
              <option>Customs Services Department</option>
              <option>Finance Department</option>
              <option>Information Technology & Digital Transformation Department</option>
              <option>Legal Services and Board Affairs Department</option>
              <option>Strategy and Risk Analysis Department</option>
              <option>Internal audit and Integrity Department</option>
              <option>Administration and Logistics Division</option>
              <option>Human Resource</option>
              <option>Strategic Intelligence and Investigation Division</option>
              <option>Taxpayer Service and Communication Division</option>
              <option>Taxpayer Audit Division</option>
              <option>Provincial and Decentralized Revenue Division</option>
              <option>Debt Management Division</option>
              <option>Registration, filing and Payment Division</option>
              <option>Tax Control and Operational Support Division</option>
              <option>Customs Operations Divisions</option>
              <option>Customs Operations Support Division</option>
              <option>Single Project Implementation Unit</option>
              <option>Compliance Risk Analysis and Data Analytics Division</option>
              <option>Planning, Research and Statistics Division</option>
              <option>Revenue Accounting Division</option>
            </select>
          </div>

          <div class="col-12">
            <textarea name="description" class="form-control" rows="4" placeholder="Description" required></textarea>
          </div>

          <div class="col-md-6">
            <select name="status" class="form-select" required>
              <option value="not-implemented">Not Implemented</option>
              <option value="partially-implemented">Partially Implemented</option>
              <option value="fully-implemented">Fully Implemented</option>
              <option value="beyond-control">Beyond Control</option>
              <option value="not-applicable">Not Applicable</option>
            </select>
          </div>

          <div class="col-md-6">
            <input type="date" name="deadline" class="form-control">
          </div>

          <div class="col-12 d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" onclick="window.history.back()">
              Back
            </button>
            <button type="submit" class="btn btn-primary">
              Save Recommendation
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS Bundle CDN -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

  <!-- Your JS for saving recommendation -->
  <script src="js/add.js"></script>

</body>

</html>
