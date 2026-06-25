import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

class Department {
    private int deptId;
    private String deptName;

    public Department(int deptId, String deptName) {
        this.deptId = deptId;
        this.deptName = deptName;
    }

    public int getDeptId() {
        return deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptId(int deptId) {
        this.deptId = deptId;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    @Override
    public String toString() {
        return "Department [id=" + deptId + ", name='" + deptName + "']";
    }
}

class Employee {

    private int empId;
    private String empName;
    private double salary;
    private Department department;

    public Employee(int empId, String empName, double salary, Department department) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
        this.department = department;
    }

    public int getEmpId() {
        return empId;
    }

    public String getEmpName() {
        return empName;
    }

    public double getSalary() {
        return salary;
    }

    public Department getDepartment() {
        return department;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "Employee [id=" + empId +
            ", name='" + empName + '\'' +
            ", salary=" + salary +
            ", department=" + department +
            ']';
    }
}

public class FilterEmployeesWithStreamAndLambda {
    public static void main(String[] args) {

        Comparator<Employee> sortComparator = (a,b)->{
            // if (a < b) return 1;
            // else if (a > b) return -1;
            // else return 0;

            return a.getEmpName().compareTo(b.getEmpName());
        };

        Department IT = new Department(101, "IT");
        Department HR = new Department(102, "HR");

        Employee e1 = new Employee(1, "Pratap", 50000, IT);
        Employee e2 = new Employee(2, "Prakash", 45000, IT);
        Employee e3 = new Employee(3, "Pratham", 40000, HR);
        Employee e4 = new Employee(4, "Roshith", 55000, IT);
        Employee e5 = new Employee(5, "Shubham", 35000, HR);

        List<Employee> employees = new ArrayList<>();

        employees.add(e1);
        employees.add(e2);
        employees.add(e3);
        employees.add(e4);
        employees.add(e5);

        // All employees who have names starting with P
        employees.stream()
                .filter(emp -> emp.getEmpName().startsWith("P") )
                .sorted(sortComparator)
                .forEach(System.out::println);

        // Third highest paid employee - sort list first
        List<Employee> sortedEmployees = employees.stream()
            .sorted((a, b) -> Double.compare(b.getSalary(), a.getSalary()))
            .toList();

        System.out.println("\nThird Highest paid employee : " + sortedEmployees.get(2).getEmpName());

        // Same using comparator + reverse + skip
        Optional<Employee> thirdHighest = employees.stream()
        .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
        .skip(2)
        .findFirst();

        thirdHighest.ifPresentOrElse(
            emp -> System.out.println("\nThird Highest paid employee : " + emp.getEmpName()),
            () -> System.out.println("\nThird Highest paid employee : Not found")
        );

        // All employees who have names starting with Z - (none present) -  Using List
        List<Employee> startsWithZ =  employees.stream()
                .filter(emp -> emp.getEmpName().startsWith("Z") )
                .toList();

        if(startsWithZ.isEmpty()){
            System.out.println("\nNo employees with names starting with Z");
        }   

        // All employees who have names starting with Z - (none present) - Using Optional Class
        Optional<Employee> startsWithZoptional =  employees.stream()
                .filter(emp -> emp.getEmpName().startsWith("Z") )
                .findAny();

        if(!startsWithZoptional.isPresent()){
            System.out.println("\nNo employees with names starting with Z (w/ optional class)");
        }   
    }
}
