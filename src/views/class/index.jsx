import { useEffect, useState } from "react";
import { Card, Row, Col, Spin, Input, Select, Button } from "antd";
import { getClassList } from "../../api/classApi";
import { useClassListStyles } from "./index.styles"; 
const { Option } = Select;

const ClassList = () => {

    const styles = useClassListStyles();

    const [loading, setLoading] = useState(false);
    const [classes, setClasses] = useState([]);

    const [pagination, setPagination] = useState({
        limit: 10,
        offset: 0,
        total: 0
    });

    const [filters, setFilters] = useState({
        name: "",
        subjectId: undefined,
        lecturerId: undefined,
        semesterId: undefined
    });

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await getClassList({
                filter: {
                    name: filters.name,
                    subjectId: filters.subjectId,
                    lecturerId: filters.lecturerId,
                    semesterId: filters.semesterId
                },
                pagination: {
                    limit: pagination.limit,
                    offset: pagination.offset
                }
            });

            const data = res?.data;

            setClasses(data.items);
            setPagination(prev => ({
                ...prev,
                total: data.total
            }));

        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [pagination.offset]);

    const handleSearch = () => {
        setPagination(prev => ({ ...prev, offset: 0 }));
        fetchData();
    };

    return (
        <div style={styles.container}>
            <div style={styles.bgGrid} />
            <div style={styles.bgGlow} />

            <div style={styles.content}>

                {/* FILTER */}
                <div style={styles.filterBar}>
                    <Input
                        placeholder="Search class name"
                        style={styles.input}
                        value={filters.name}
                        onChange={(e) =>
                            setFilters({ ...filters, name: e.target.value })
                        }
                    />

                    <Select
                        placeholder="Subject"
                        allowClear
                        style={styles.select}
                        onChange={(value) =>
                            setFilters({ ...filters, subjectId: value })
                        }
                    >
                       
                    </Select>

                    <Select
                        placeholder="Lecturer"
                        allowClear
                        style={styles.select}
                        onChange={(value) =>
                            setFilters({ ...filters, lecturerId: value })
                        }
                    >
                        
                    </Select>

                    <Select
                        placeholder="Semester"
                        allowClear
                        style={styles.select}
                        onChange={(value) =>
                            setFilters({ ...filters, semesterId: value })
                        }
                    >
                        
                    </Select>

                    <Button style={styles.button} onClick={handleSearch}>
                        Search
                    </Button>
                </div>

                {/* LIST */}
                {loading ? (
                    <Spin />
                ) : (
                    <Row gutter={[16, 16]}>
                        {classes.map((item) => (
                            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                                <Card
                                    hoverable
                                    style={styles.card}
                                    cover={
                                        <img
                                            alt="class"
                                            src="https://picsum.photos/300/200"
                                            style={styles.image}
                                        />
                                    }
                                >
                                    <div style={styles.title}>
                                        {item.name}
                                    </div>

                                    <div style={styles.meta}>
                                        Subject: {item.subject}
                                    </div>

                                    <div style={styles.meta}>
                                        Lecturer: {item.lecturer}
                                    </div>

                                    <div style={styles.meta}>
                                        Semester: {item.semester}
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </div>
    );
};

export default ClassList;