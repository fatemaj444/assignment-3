<script>
    function getAPI() {
        fetch('https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?limit=20')
            .then(response => response.json())
            .then(data => { console.log(data);})
    }
</script>